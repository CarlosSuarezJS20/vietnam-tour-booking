import { tourCategories, regions, cities, tours, cruises } from "@/data/db";
import { parsePriceValue } from "@/lib/tourParsers";

interface CartItem {
  uid:         string;
  productId:   string;
  productType: string;
  date:        string;
  time:        string;
  partySize:   number;
  price:       number;
}

// In-memory cart — dummy data until a real backend is wired up
let cartItems: CartItem[] = [];

const buildCart = () => ({
  items:      cartItems,
  itemCount:  cartItems.length,
  totalPrice: cartItems.reduce((sum, i) => sum + i.price, 0),
});

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
    searchProducts: (
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
      type RawTour   = (typeof tours)[0]   & { __typename: "Tour" };
      type RawCruise = (typeof cruises)[0] & { __typename: "Cruise" };
      type RawProduct = RawTour | RawCruise;

      let pool: RawProduct[] = [
        ...tours.map(t => ({ ...t, __typename: "Tour" as const })),
        ...cruises.map(c => ({ ...c, __typename: "Cruise" as const })),
      ];

      if (filters.types?.length) {
        pool = pool.filter(i => filters.types!.includes(i.__typename.toLowerCase()));
      }

      if (filters.categories?.length) {
        const catIds = tourCategories
          .filter(c => filters.categories!.includes(c.slug))
          .map(c => c.id);
        pool = pool.filter(i =>
          i.__typename !== "Tour" ||
          (i as RawTour).categoryIds.some(id => catIds.includes(id))
        );
      }

      if (filters.regions?.length || filters.cities?.length) {
        const regionIds = regions
          .filter(r => (filters.regions ?? []).includes(r.key))
          .map(r => r.id);
        const cityIdsFromRegions = cities
          .filter(c => regionIds.includes(c.regionId))
          .map(c => c.id);
        const allMatchingCityIds = new Set([
          ...cityIdsFromRegions,
          ...(filters.cities ?? []),
        ]);
        pool = pool.filter(i =>
          i.__typename !== "Tour" ||
          (i as RawTour).cityIds.some(id => allMatchingCityIds.has(id))
        );
      }

      if (filters.minPrice != null) {
        pool = pool.filter(i => parsePriceValue(i.price) >= filters.minPrice!);
      }

      if (filters.maxPrice != null) {
        pool = pool.filter(i => parsePriceValue(i.price) <= filters.maxPrice!);
      }

      if (filters.deals) {
        pool = pool.filter(i => (i as { onSale: boolean }).onSale === true);
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
    tourCategories: () => tourCategories,
    regions:        () => regions,
    region:         (_: unknown, { key }: { key: string }) => regions.find(r => r.key === key),
    cities:         () => cities,
    featuredTour:   () => tours.find(t => t.featuredTour === true) ?? null,
    toursByCity:     (_: unknown, { cityId, limit = 4 }: { cityId: string; limit?: number }) =>
                       tours.filter(t => t.cityIds.includes(cityId)).slice(0, limit),
    toursByCategory: (_: unknown, { categoryId, limit = 8 }: { categoryId: string; limit?: number }) =>
                       tours.filter(t => t.categoryIds.includes(categoryId)).slice(0, limit),
    cruises:        () => cruises,
    allTours:       () => tours,
    allCruises:     () => cruises,
    tour:           (_: unknown, { id }: { id: string }) => tours.find(t => t.id === id) ?? null,
    cruise:         (_: unknown, { id }: { id: string }) => cruises.find(c => c.id === id) ?? null,
    cart:           () => buildCart(),
  },
  CartItem: {
    product: (item: CartItem) => {
      if (item.productType === "cruise") {
        const cruise = cruises.find(c => c.id === item.productId);
        return cruise ? { ...cruise, __typename: "Cruise" } : null;
      }
      const tour = tours.find(t => t.id === item.productId);
      return tour ? { ...tour, __typename: "Tour" } : null;
    },
  },

  Mutation: {
    addToCart: (_: unknown, { input }: { input: Omit<CartItem, "uid"> }) => {
      const item: CartItem = { ...input, uid: `${input.productId}-${Date.now()}` };
      cartItems = [...cartItems, item];
      return buildCart();
    },
    removeFromCart: (_: unknown, { uid }: { uid: string }) => {
      cartItems = cartItems.filter(i => i.uid !== uid);
      return buildCart();
    },
    clearCart: () => {
      cartItems = [];
      return buildCart();
    },
  },

  Tour: {
    cities:     (tour: { cityIds: string[] }) => cities.filter(c => tour.cityIds.includes(c.id)),
    categories: (tour: { categoryIds: string[] }) => tourCategories.filter(c => tour.categoryIds.includes(c.id)),
  },
  Region: {
    // Resolver for Region.cities — returns all cities that belong to this region
    cities: (region: { id: string }) => cities.filter(c => c.regionId === region.id),
  },
  City: {
    // Resolver for City.region — looks up the parent region by regionId
    region: (city: { regionId: string }) => regions.find(r => r.id === city.regionId),
  },
};
