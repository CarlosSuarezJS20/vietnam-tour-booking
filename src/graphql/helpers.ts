import type { Tour, Cruise } from "@/generated/prisma/client";

export type ProductFilters = {
  types?:      string[];
  categories?: string[];
  regions?:    string[];
  cities?:     string[];
  minPrice?:   number;
  maxPrice?:   number;
  deals?:      boolean;
};

export const buildTourWhere = (filters: ProductFilters) => {
  const where: any = { isVisible: true };
  if (filters.categories?.length) {
    where.categories = { some: { category: { slug: { in: filters.categories } } } };
  }
  if (filters.regions?.length || filters.cities?.length) {
    where.cities = {
      some: {
        city: {
          OR: [
            ...(filters.regions?.length ? [{ region: { key: { in: filters.regions } } }] : []),
            ...(filters.cities?.length  ? [{ id:     { in: filters.cities } }]            : []),
          ],
        },
      },
    };
  }
  if (filters.deals)            where.onSale = true;
  if (filters.minPrice != null) where.price = { ...where.price, gte: filters.minPrice };
  if (filters.maxPrice != null) where.price = { ...where.price, lte: filters.maxPrice };
  return where;
};

export const buildCruiseWhere = (filters: ProductFilters) => {
  const where: any = { isVisible: true };
  if (filters.deals)            where.onSale = true;
  if (filters.minPrice != null) where.price = { ...where.price, gte: filters.minPrice };
  if (filters.maxPrice != null) where.price = { ...where.price, lte: filters.maxPrice };
  return where;
};

export type CursorPayload = { id: string; type: "Tour" | "Cruise" };

export const encodeCursor = (id: string, type: "Tour" | "Cruise"): string => {
  const payload: CursorPayload = { id, type };
  return Buffer.from(JSON.stringify(payload)).toString("base64");
};

export const decodeCursor = (cursor: string): CursorPayload =>
  JSON.parse(Buffer.from(cursor, "base64").toString("utf8")) as CursorPayload;

export const buildCartFromDb = (cart: {
  items: {
    id:        string;
    tourId:    string | null;
    cruiseId:  string | null;
    date:      string;
    time:      string;
    partySize: number;
    price:     number;
  }[];
} | null) => {
  const items = cart?.items ?? [];
  return {
    items:      items.map(i => ({ ...i, uid: i.id })),
    itemCount:  items.length,
    totalPrice: items.reduce((sum, i) => sum + i.price, 0),
  };
};

// Module-level union type for items in the merged tour+cruise pool
export type PoolItem = (Tour & { __typename: "Tour" }) | (Cruise & { __typename: "Cruise" });
