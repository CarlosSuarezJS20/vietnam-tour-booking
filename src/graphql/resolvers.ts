import { prisma } from "@/lib/prisma";
import { parsePriceValue } from "@/lib/tourParsers";
import type { CartItemInput } from "@/types/graphql";
import type { Tour, Cruise } from "@/generated/prisma/client";

const buildCartFromDb = (cart: { items: { id: string; tourId: string | null; cruiseId: string | null; date: string; time: string; partySize: number; price: number }[] } | null) => {
  const items = cart?.items ?? [];
  return {
    items:      items.map(i => ({ ...i, uid: i.id })),
    itemCount:  items.length,
    totalPrice: items.reduce((sum, i) => sum + i.price, 0),
  };
};

const PAGE_SIZE = 12;

// Payload stored inside every cursor — encodes both the row id and which table
// it belongs to so the next request knows which table to resume from.
type CursorPayload = { id: string; type: "Tour" | "Cruise" };

const encodeCursor = (id: string, type: "Tour" | "Cruise"): string => {
  const payload: CursorPayload = { id, type };
  return Buffer.from(JSON.stringify(payload)).toString("base64");
};

const decodeCursor = (cursor: string): CursorPayload =>
  JSON.parse(Buffer.from(cursor, "base64").toString("utf8")) as CursorPayload;

// Filters accepted by searchProducts
type ProductFilters = {
  types?:      string[];
  categories?: string[];
  regions?:    string[];
  cities?:     string[];
  minPrice?:   number;
  maxPrice?:   number;
  deals?:      boolean;
};

// Named interface for the searchProducts resolver arguments
interface SearchProductsArgs {
  filters?: ProductFilters;
  first?:   number;
  after?:   string | null;
}

// Module-level union type for items in the merged tour+cruise pool
type PoolItem = (Tour & { __typename: "Tour" }) | (Cruise & { __typename: "Cruise" });

// Builds the Prisma WHERE clause for tours from the active filters.
// Kept separate so filter logic stays out of the pagination logic.
const buildTourWhere = (filters: ProductFilters) => ({
  ...(filters.categories?.length && {
    categories: { some: { category: { slug: { in: filters.categories } } } },
  }),
  ...((filters.regions?.length || filters.cities?.length) && {
    cities: {
      some: {
        city: {
          OR: [
            ...(filters.regions?.length ? [{ region: { key: { in: filters.regions } } }] : []),
            ...(filters.cities?.length  ? [{ id:     { in: filters.cities } }]            : []),
          ],
        },
      },
    },
  }),
  ...(filters.deals && { onSale: true }),
  // minPrice / maxPrice are NOT applied here.
  // price is stored as a formatted string (e.g. "$1,200"), not a numeric column,
  // so SQL cannot compare it directly. Price filtering happens in JS after the
  // DB fetch. To fix this, add a numeric priceValue column to Tour and Cruise.
});

// Builds the Prisma WHERE clause for cruises.
// Cruises don't support category or city filters yet — only deals applies.
const buildCruiseWhere = (filters: ProductFilters) => ({
  ...(filters.deals && { onSale: true }),
  // Same price limitation as buildTourWhere.
});

export const resolvers = {
  Product: {
    __resolveType(obj: { __typename: string }) {
      return obj.__typename === "Tour" ? "Tour" : "Cruise";
    },
  },

  Query: {
    searchProducts: async (
      _: unknown,
      { filters = {}, first = PAGE_SIZE, after }: SearchProductsArgs
    ) => {
      // Decide which product types to include based on the types filter.
      // If no types are specified, include both tours and cruises.
      const includeTours   = !filters.types?.length || filters.types.includes("tour");
      const includeCruises = !filters.types?.length || filters.types.includes("cruise");

      const tourWhere   = buildTourWhere(filters);
      const cruiseWhere = buildCruiseWhere(filters);

      // Decode the cursor to find which table and row we left off at.
      const afterPayload = after ? decodeCursor(after) : null;
      const cursorType   = afterPayload?.type ?? null;
      const cursorId     = afterPayload?.id   ?? null;

      // Fetch one extra item beyond `first` — if we get first+1 back, a next page
      // exists without needing a separate hasNextPage count query.
      const fetchSize = first + 1;

      // Tours always come before cruises in the merged ordering.
      // When the cursor is a Cruise, all tours have been served so skip them entirely.
      // Run the tour page fetch and both count queries in parallel.
      const [rawTours, tourTotal, cruiseTotal] = await Promise.all([
        (includeTours && cursorType !== "Cruise")
          ? prisma.tour.findMany({
              where:   tourWhere,
              orderBy: { id: "asc" },
              take:    fetchSize,
              ...(cursorId && cursorType === "Tour"
                ? { cursor: { id: cursorId }, skip: 1 }
                : {}),
            })
          : Promise.resolve([] as Tour[]),
        includeTours   ? prisma.tour.count({ where: tourWhere })     : Promise.resolve(0),
        includeCruises ? prisma.cruise.count({ where: cruiseWhere }) : Promise.resolve(0),
      ]);

      // How many cruise slots remain after filling with tours on this page.
      const toursKept     = Math.min(rawTours.length, first);
      const cruisesNeeded = fetchSize - toursKept;

      // Fetch cruises to fill remaining page slots.
      // When the cursor is a Cruise, resume from that row using Prisma's cursor.
      const rawCruises: Cruise[] = (includeCruises && cruisesNeeded > 0)
        ? await prisma.cruise.findMany({
            where:   cruiseWhere,
            orderBy: { id: "asc" },
            take:    cruisesNeeded,
            ...(cursorId && cursorType === "Cruise"
              ? { cursor: { id: cursorId }, skip: 1 }
              : {}),
          })
        : [];

      // Merge into a single pool and tag each item with __typename so
      // GraphQL knows which union type to resolve it as.
      let pool: PoolItem[] = [
        ...rawTours.map(t  => ({ ...t, __typename: "Tour"   as const })),
        ...rawCruises.map(c => ({ ...c, __typename: "Cruise" as const })),
      ];

      // Apply price filters in JS — price is a formatted string in the DB so it
      // cannot be filtered at the SQL level (see buildTourWhere for details).
      // Limitation: when a price filter is active, pages may return fewer than
      // `first` items even when more pages exist, and `total` will not reflect
      // the price filter.
      if (filters.minPrice != null) {
        pool = pool.filter(i => parsePriceValue(i.price) >= filters.minPrice!);
      }
      if (filters.maxPrice != null) {
        pool = pool.filter(i => parsePriceValue(i.price) <= filters.maxPrice!);
      }

      // The extra item we fetched (first+1) tells us whether a next page exists.
      const hasNextPage = pool.length > first;
      const page        = pool.slice(0, first);

      const edges = page.map(item => ({
        cursor: encodeCursor(item.id, item.__typename),
        node:   item,
      }));

      // Total across both tables for "X results" display and page count.
      // Does not account for price filtering (same string limitation above).
      const total = tourTotal + cruiseTotal;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          // A cursor means we started past the first page.
          hasPreviousPage: !!after,
          startCursor:     edges[0]?.cursor ?? null,
          endCursor:       edges[edges.length - 1]?.cursor ?? null,
        },
        total,
      };
    },
    tourCategories: () => prisma.tourCategory.findMany(),
    regions:         () => prisma.region.findMany(),
    region:          (_: unknown, { key }: { key: string }) => prisma.region.findUnique({ where: { key } }),
    cities:          () => prisma.city.findMany(),
    featuredTour:    () => prisma.tour.findFirst({ where: { featuredTour: true } }),
    toursByCity:     (_: unknown, { cityId, limit = 4 }: { cityId: string; limit?: number }) =>
                       prisma.tour.findMany({ where: { cities: { some: { cityId } } }, take: limit }),
    toursByCategory: (_: unknown, { categoryId, limit = 8 }: { categoryId: string; limit?: number }) =>
                       prisma.tour.findMany({ where: { categories: { some: { categoryId } } }, take: limit }),
    cruises:         () => prisma.cruise.findMany(),
    allTours:        () => prisma.tour.findMany(),
    allCruises:      () => prisma.cruise.findMany(),
    tour:            (_: unknown, { id }: { id: string }) => prisma.tour.findUnique({ where: { id } }),
    cruise:          (_: unknown, { id }: { id: string }) => prisma.cruise.findUnique({ where: { id } }),
    cart: async (_: unknown, { sessionId }: { sessionId: string }) => {
      const cart = await prisma.cart.findUnique({
        where:   { sessionId },
        include: { items: true },
      });
      return buildCartFromDb(cart);
    },
  },

  CartItem: {
    product: async (item: { tourId: string | null; cruiseId: string | null }) => {
      if (item.tourId) {
        const tour = await prisma.tour.findUnique({ where: { id: item.tourId } });
        return tour ? { ...tour, __typename: "Tour" } : null;
      }
      if (item.cruiseId) {
        const cruise = await prisma.cruise.findUnique({ where: { id: item.cruiseId } });
        return cruise ? { ...cruise, __typename: "Cruise" } : null;
      }
      return null;
    },
  },

  Mutation: {
    addToCart: async (_: unknown, { sessionId, input }: { sessionId: string; input: CartItemInput }) => {
      const cart = await prisma.cart.upsert({
        where:  { sessionId },
        create: { sessionId },
        update: {},
      });
      await prisma.cartItem.create({
        data: {
          cartId:    cart.id,
          tourId:    input.tourId   ?? null,
          cruiseId:  input.cruiseId ?? null,
          date:      input.date,
          time:      input.time,
          partySize: input.partySize,
          price:     input.price,
        },
      });
      const updated = await prisma.cart.findUnique({
        where:   { sessionId },
        include: { items: true },
      });
      return buildCartFromDb(updated);
    },

    removeFromCart: async (_: unknown, { sessionId, uid }: { sessionId: string; uid: string }) => {
      await prisma.cartItem.delete({ where: { id: uid } });
      const cart = await prisma.cart.findUnique({
        where:   { sessionId },
        include: { items: true },
      });
      return buildCartFromDb(cart);
    },

    clearCart: async (_: unknown, { sessionId }: { sessionId: string }) => {
      await prisma.cartItem.deleteMany({ where: { cart: { sessionId } } });
      const cart = await prisma.cart.findUnique({
        where:   { sessionId },
        include: { items: true },
      });
      return buildCartFromDb(cart);
    },
  },

  Tour: {
    imageUrl:   (tour: { id: string }) =>
      prisma.tourImage
        .findFirst({ where: { tourId: tour.id }, orderBy: { position: "asc" } })
        .then(img => img?.url ?? null),
    cities:     (tour: { id: string }) => prisma.city.findMany({ where: { tours: { some: { tourId: tour.id } } } }),
    categories: (tour: { id: string }) => prisma.tourCategory.findMany({ where: { tours: { some: { tourId: tour.id } } } }),
  },
  Region: {
    // Resolver for Region.cities — returns all cities that belong to this region
    cities: (region: { id: string }) => prisma.city.findMany({ where: { regionId: region.id } }),
  },
  City: {
    // Resolver for City.region — looks up the parent region by regionId
    region: (city: { regionId: string }) => prisma.region.findUnique({ where: { id: city.regionId } }),
  },
};
