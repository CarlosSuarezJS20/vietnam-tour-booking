import { prisma } from "@/lib/prisma";
import { parsePriceValue } from "@/lib/tourParsers";
import type { CartItemInput } from "@/types/graphql";


const buildCartFromDb = (cart: { items: { id: string; tourId: string | null; cruiseId: string | null; date: string; time: string; partySize: number; price: number }[] } | null) => {
  const items = cart?.items ?? [];
  return {
    items:      items.map(i => ({ ...i, uid: i.id })),
    itemCount:  items.length,
    totalPrice: items.reduce((sum, i) => sum + i.price, 0),
  };
};

const PAGE_SIZE = 12;

function encodeCursor(id: string): string {
  return Buffer.from(id).toString("base64");
}

function decodeCursor(cursor: string): string {
  return Buffer.from(cursor, "base64").toString("utf8");
}

export const resolvers = {
  Product: {
    __resolveType(obj: { __typename: string }) {
      return obj.__typename === "Tour" ? "Tour" : "Cruise";
    },
  },

  Query: {
    searchProducts: async (
      _: unknown,
      {
        filters = {},
        first = PAGE_SIZE,
        after,
      }: {
        filters?: {
          types?:      string[];
          categories?: string[];
          regions?:    string[];
          cities?:     string[];
          minPrice?:   number;
          maxPrice?:   number;
          deals?:      boolean;
        };
        first?: number;
        after?: string | null;
      }
    ) => {
      const includeTours   = !filters.types?.length || filters.types.includes("tour");
      const includeCruises = !filters.types?.length || filters.types.includes("cruise");

      const tourWhere = {
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
      };

      const cruiseWhere = {
        ...(filters.deals && { onSale: true }),
      };

      const [rawTours, rawCruises] = await Promise.all([
        includeTours   ? prisma.tour.findMany({ where: tourWhere })     : [],
        includeCruises ? prisma.cruise.findMany({ where: cruiseWhere }) : [],
      ]);

      type PoolItem = (typeof rawTours)[0] & { __typename: "Tour" }
                   | (typeof rawCruises)[0] & { __typename: "Cruise" };

      let pool: PoolItem[] = [
        ...rawTours.map(t  => ({ ...t, __typename: "Tour"   as const })),
        ...rawCruises.map(c => ({ ...c, __typename: "Cruise" as const })),
      ];

      if (filters.minPrice != null) {
        pool = pool.filter(i => parsePriceValue(i.price) >= filters.minPrice!);
      }
      if (filters.maxPrice != null) {
        pool = pool.filter(i => parsePriceValue(i.price) <= filters.maxPrice!);
      }

      const total = pool.length;

      let startIndex = 0;
      if (after) {
        const afterId = decodeCursor(after);
        const pos = pool.findIndex(i => i.id === afterId);
        startIndex = pos >= 0 ? pos + 1 : 0;
      }

      const slice = pool.slice(startIndex, startIndex + first);
      const edges = slice.map(item => ({
        cursor: encodeCursor(item.id),
        node:   item,
      }));

      return {
        edges,
        pageInfo: {
          hasNextPage:     startIndex + first < total,
          hasPreviousPage: startIndex > 0,
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
