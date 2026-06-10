import { tourCategories, regions, cities } from "@/data/db";

export const resolvers = {
  Query: {
    tourCategories: () => tourCategories,
    regions:        () => regions,
    region:         (_: unknown, { key }: { key: string }) => regions.find(r => r.key === key),
    cities:         () => cities,
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
