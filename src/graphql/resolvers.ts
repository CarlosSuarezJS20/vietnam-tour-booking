import { tourCategories, regions, cities, tours, cruises } from "@/data/db";

export const resolvers = {
  Query: {
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
