import { prisma } from "@/lib/prisma";
import type { CartItemInput, EnquiryInput } from "@/types/graphql";
import type { Tour, Cruise } from "@/generated/prisma/client";
import {
  buildCartFromDb, encodeCursor, decodeCursor,
  buildTourWhere, buildCruiseWhere,
  type PoolItem, type ProductFilters,
} from "./helpers";

const PAGE_SIZE = 12;

// Named interface for the searchProducts resolver arguments
interface SearchProductsArgs {
  filters?: ProductFilters;
  first?:   number;
  after?:   string | null;
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
      { filters = {}, first = PAGE_SIZE, after }: SearchProductsArgs
    ) => {
      // Decide which product types to include based on the types filter.
      // If no types are specified, include both tours and cruises.
      const includeTours   = !filters.types?.length || filters.types.includes("tour");
      const includeCruises = !filters.types?.length || filters.types.includes("cruise");

      const tourWhere   = buildTourWhere(filters);
      const cruiseWhere = buildCruiseWhere(filters);
      console.log('searchProducts - tourWhere:', JSON.stringify(tourWhere, null, 2));
      console.log('searchProducts - cruiseWhere:', JSON.stringify(cruiseWhere, null, 2));

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
    featuredTour:    () => prisma.tour.findFirst({ where: { featuredTour: true, isVisible: true } }),
    toursByCity:     (_: unknown, { cityId, limit = 4 }: { cityId: string; limit?: number }) =>
                       prisma.tour.findMany({ where: { cities: { some: { cityId } }, isVisible: true }, take: limit }),
    toursByCategory: (_: unknown, { categoryId, limit = 8 }: { categoryId: string; limit?: number }) =>
                       prisma.tour.findMany({ where: { categories: { some: { categoryId } }, isVisible: true }, take: limit }),
    cruises:         () => prisma.cruise.findMany({ where: { isVisible: true } }),
    allTours: async (_: unknown, { filter, first = 7, after }: { filter?: string; first?: number; after?: string }) => {
      const allTours = await prisma.tour.findMany();

      let filtered = allTours;
      if (filter === 'VISIBLE') {
        filtered = allTours.filter(t => t.isVisible === true);
      } else if (filter === 'HIDDEN') {
        filtered = allTours.filter(t => t.isVisible === false);
      }

      const cursorIndex = after ? filtered.findIndex(t => t.id === decodeCursor(after).id) : -1;
      const startIdx = after ? cursorIndex + 1 : 0;
      const fetchSize = first + 1;
      const items = filtered.slice(startIdx, startIdx + fetchSize);
      const hasNextPage = items.length > first;
      const paginated = items.slice(0, first);

      const visibleCount = allTours.filter(t => t.isVisible).length;
      const hiddenCount = allTours.filter(t => !t.isVisible).length;

      return {
        edges: paginated.map(tour => ({
          cursor: encodeCursor(tour.id, 'Tour'),
          node: tour,
        })),
        pageInfo: {
          hasNextPage,
          hasPreviousPage: startIdx > 0,
          endCursor: paginated.length > 0 ? encodeCursor(paginated[paginated.length - 1].id, 'Tour') : null,
        },
        total: filtered.length,
        visibleCount,
        hiddenCount,
      };
    },
    allCruises: async (_: unknown, { filter, first = 7, after }: { filter?: string; first?: number; after?: string }) => {
      const allCruises = await prisma.cruise.findMany();

      let filtered = allCruises;
      if (filter === 'VISIBLE') {
        filtered = allCruises.filter(c => c.isVisible === true);
      } else if (filter === 'HIDDEN') {
        filtered = allCruises.filter(c => c.isVisible === false);
      }

      const cursorIndex = after ? filtered.findIndex(c => c.id === decodeCursor(after).id) : -1;
      const startIdx = after ? cursorIndex + 1 : 0;
      const fetchSize = first + 1;
      const items = filtered.slice(startIdx, startIdx + fetchSize);
      const hasNextPage = items.length > first;
      const paginated = items.slice(0, first);

      const visibleCount = allCruises.filter(c => c.isVisible).length;
      const hiddenCount = allCruises.filter(c => !c.isVisible).length;

      return {
        edges: paginated.map(cruise => ({
          cursor: encodeCursor(cruise.id, 'Cruise'),
          node: cruise,
        })),
        pageInfo: {
          hasNextPage,
          hasPreviousPage: startIdx > 0,
          endCursor: paginated.length > 0 ? encodeCursor(paginated[paginated.length - 1].id, 'Cruise') : null,
        },
        total: filtered.length,
        visibleCount,
        hiddenCount,
      };
    },
    tour:            (_: unknown, { id }: { id: string }) => prisma.tour.findUnique({ where: { id, isVisible: true } }),
    cruise:          (_: unknown, { id }: { id: string }) => prisma.cruise.findUnique({ where: { id, isVisible: true } }),
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

    submitContact: async (_: unknown, { input }: { input: { firstName: string; lastName: string; email: string; phone?: string; message?: string } }) => {
      const contact = await prisma.contact.create({ data: input });
      return { id: contact.id, createdAt: contact.createdAt.toISOString() };
    },

    submitEnquiry: async (_: unknown, { input }: { input: EnquiryInput }) => {
      const enquiry = await prisma.enquiry.create({ data: input });
      return { id: enquiry.id, createdAt: enquiry.createdAt.toISOString() };
    },

    toggleTourVisibility: async (_: unknown, { id }: { id: string }) => {
      const tour = await prisma.tour.findUnique({ where: { id } });
      if (!tour) throw new Error(`Tour not found: ${id}`);
      return prisma.tour.update({
        where: { id },
        data: { isVisible: !tour.isVisible },
      });
    },

    toggleCruiseVisibility: async (_: unknown, { id }: { id: string }) => {
      const cruise = await prisma.cruise.findUnique({ where: { id } });
      if (!cruise) throw new Error(`Cruise not found: ${id}`);
      return prisma.cruise.update({
        where: { id },
        data: { isVisible: !cruise.isVisible },
      });
    },

    setAllToursVisibility: async (_: unknown, { visible }: { visible: boolean }) => {
      await prisma.tour.updateMany({
        data: { isVisible: visible },
      });
      return prisma.tour.findMany();
    },

    setAllCruisesVisibility: async (_: unknown, { visible }: { visible: boolean }) => {
      await prisma.cruise.updateMany({
        data: { isVisible: visible },
      });
      return prisma.cruise.findMany();
    },

    createTour: async (
      _: unknown,
      {
        input,
      }: {
        input: {
          title: string;
          duration: string;
          price: number;
          description: string;
          itinerary?: string;
          featuredTour?: boolean;
          onSale?: boolean;
          saleDiscountPercentage?: number | null;
        };
      }
    ) => {
      return prisma.tour.create({
        data: {
          title: input.title,
          duration: input.duration,
          price: input.price,
          description: input.description,
          itinerary: input.itinerary || '',
          featuredTour: input.featuredTour === true,
          onSale: input.onSale === true,
          ...(input.saleDiscountPercentage !== undefined && input.saleDiscountPercentage !== null && { saleDiscountPercentage: input.saleDiscountPercentage }),
        } as any,
      });
    },

    createCruise: async (
      _: unknown,
      {
        input,
      }: {
        input: {
          title: string;
          duration: string;
          price: number;
          description: string;
          itinerary?: string;
          sourceUrl: string;
          onSale?: boolean;
          saleDiscountPercentage?: number | null;
        };
      }
    ) => {
      return prisma.cruise.create({
        data: {
          title: input.title,
          duration: input.duration,
          price: input.price,
          description: input.description,
          itinerary: input.itinerary || '',
          sourceUrl: input.sourceUrl,
          onSale: input.onSale === true,
          ...(input.saleDiscountPercentage !== undefined && input.saleDiscountPercentage !== null && { saleDiscountPercentage: input.saleDiscountPercentage }),
        } as any,
      });
    },

    addTourImage: async (
      _: unknown,
      { tourId, url }: { tourId: string; url: string }
    ) => {
      return prisma.tourImage.create({
        data: {
          tourId,
          url,
          isPrimary: false,
        },
      });
    },

    deleteTourImage: async (_: unknown, { imageId }: { imageId: string }) => {
      await prisma.tourImage.delete({ where: { id: imageId } });
      return true;
    },

    setPrimaryTourImage: async (
      _: unknown,
      { imageId }: { imageId: string }
    ) => {
      const image = await prisma.tourImage.findUnique({ where: { id: imageId } });
      if (!image) throw new Error('Image not found');

      await prisma.tourImage.updateMany({
        where: { tourId: image.tourId },
        data: { isPrimary: false },
      });

      return prisma.tourImage.update({
        where: { id: imageId },
        data: { isPrimary: true },
      });
    },

    addCruiseImage: async (
      _: unknown,
      { cruiseId, url }: { cruiseId: string; url: string }
    ) => {
      return prisma.cruiseImage.create({
        data: {
          cruiseId,
          url,
          isPrimary: false,
        },
      });
    },

    deleteCruiseImage: async (_: unknown, { imageId }: { imageId: string }) => {
      await prisma.cruiseImage.delete({ where: { id: imageId } });
      return true;
    },

    setPrimaryCruiseImage: async (
      _: unknown,
      { imageId }: { imageId: string }
    ) => {
      const image = await prisma.cruiseImage.findUnique({ where: { id: imageId } });
      if (!image) throw new Error('Image not found');

      await prisma.cruiseImage.updateMany({
        where: { cruiseId: image.cruiseId },
        data: { isPrimary: false },
      });

      return prisma.cruiseImage.update({
        where: { id: imageId },
        data: { isPrimary: true },
      });
    },

    setFeaturedTour: async (_: unknown, { tourId }: { tourId: string }) => {
      await prisma.tour.updateMany({
        data: { featuredTour: false },
      });
      return prisma.tour.update({
        where: { id: tourId },
        data: { featuredTour: true },
      });
    },
  },

  Tour: {
    images:     (tour: { id: string }) => prisma.tourImage.findMany({ where: { tourId: tour.id }, orderBy: { position: "asc" } }),
    cities:     (tour: { id: string }) => prisma.city.findMany({ where: { tours: { some: { tourId: tour.id } } } }),
    categories: (tour: { id: string }) => prisma.tourCategory.findMany({ where: { tours: { some: { tourId: tour.id } } } }),
    createdAt:  (tour: { createdAt?: Date }) => tour.createdAt ? new Date(tour.createdAt).toISOString() : null,
  },

  Cruise: {
    images: (cruise: { id: string }) => prisma.cruiseImage.findMany({ where: { cruiseId: cruise.id }, orderBy: { position: "asc" } }),
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
