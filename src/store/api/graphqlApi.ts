import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import type { TourCategory, City, Region, FeaturedTour, CarouselTour, Cruise } from "@/types/graphql";

export type { TourCategory, City, Region, FeaturedTour, Cruise };

// ─── Queries ─────────────────────────────────────────────────────────────────

const TOUR_CATEGORIES_QUERY = `
  query {
    tourCategories { id slug label }
  }
`;

const REGIONS_QUERY = `
  query {
    regions { id key label image cities { id name } }
  }
`;

const FEATURED_TOUR_QUERY = `
  query {
    featuredTour {
      id title description imageUrl duration price featuredTour
      cities     { id name region { label } }
      categories { id slug label }
    }
  }
`;

// ─── Custom base query — surfaces GraphQL-level errors ────────────────────────
// GraphQL always returns HTTP 200, even on errors. This wrapper promotes
// response.errors into RTK Query's error channel so components see isError.

const rawBase = fetchBaseQuery({ baseUrl: "/api" });

const graphqlBaseQuery: BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBase(args, api, extraOptions);

  if (result.error) return result;

  const body = result.data as {
    data?: unknown;
    errors?: { message: string }[];
  };

  if (body.errors?.length) {
    return {
      error: {
        status: "CUSTOM_ERROR" as const,
        error: body.errors.map((e) => e.message).join("; "),
        data: body.errors,
      },
    };
  }

  return result;
};

// ─── API slice ────────────────────────────────────────────────────────────────

export const graphqlApi = createApi({
  reducerPath: "graphqlApi",
  baseQuery: graphqlBaseQuery,
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getTourCategories: builder.query<TourCategory[], void>({
      query: () => ({
        url: "/graphql",
        method: "POST",
        body: { query: TOUR_CATEGORIES_QUERY },
      }),
      transformResponse: (res: { data: { tourCategories: TourCategory[] } }) =>
        res.data.tourCategories,
    }),

    getRegions: builder.query<Region[], void>({
      query: () => ({
        url: "/graphql",
        method: "POST",
        body: { query: REGIONS_QUERY },
      }),
      transformResponse: (res: { data: { regions: Region[] } }) =>
        res.data.regions,
    }),

    getFeaturedTour: builder.query<FeaturedTour, void>({
      query: () => ({
        url: "/graphql",
        method: "POST",
        body: { query: FEATURED_TOUR_QUERY },
      }),
      transformResponse: (res: { data: { featuredTour: FeaturedTour } }) =>
        res.data.featuredTour,
    }),

    getToursByCategory: builder.query<CarouselTour[], { categoryId: string; limit?: number }>({
      query: ({ categoryId, limit = 8 }) => ({
        url: "/graphql",
        method: "POST",
        body: {
          query: `
            query ToursByCategory($categoryId: ID!, $limit: Int) {
              toursByCategory(categoryId: $categoryId, limit: $limit) {
                id title imageUrl duration price
                categories { id slug label }
              }
            }
          `,
          variables: { categoryId, limit },
        },
      }),
      transformResponse: (res: { data: { toursByCategory: CarouselTour[] } }) =>
        res.data.toursByCategory,
    }),

    getCruises: builder.query<Cruise[], void>({
      query: () => ({
        url: "/graphql",
        method: "POST",
        body: {
          query: `
            query {
              cruises {
                id title imageUrl description itinerary duration price sourceUrl
              }
            }
          `,
        },
      }),
      transformResponse: (res: { data: { cruises: Cruise[] } }) =>
        res.data.cruises,
    }),

    getToursByCity: builder.query<CarouselTour[], { cityId: string; limit?: number }>({
      query: ({ cityId, limit = 4 }) => ({
        url: "/graphql",
        method: "POST",
        body: {
          query: `
            query ToursByCity($cityId: ID!, $limit: Int) {
              toursByCity(cityId: $cityId, limit: $limit) {
                id title imageUrl duration price
                categories { id slug label }
              }
            }
          `,
          variables: { cityId, limit },
        },
      }),
      transformResponse: (res: { data: { toursByCity: CarouselTour[] } }) =>
        res.data.toursByCity,
    }),

  }),
});

export const {
  useGetTourCategoriesQuery,
  useGetRegionsQuery,
  useGetFeaturedTourQuery,
  useGetCruisesQuery,
  useGetToursByCityQuery,
  useGetToursByCategoryQuery,
} = graphqlApi;
