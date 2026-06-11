import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

// ─── Shared types ────────────────────────────────────────────────────────────

export interface TourCategory {
  id: string;
  slug: string;
  label: string;
}

export interface City {
  id: string;
  name: string;
}

export interface Region {
  id: string;
  key: string;
  label: string;
  image: string;
  cities: City[];
}

export interface MobileNavData {
  tourCategories: Pick<TourCategory, "id" | "label">[];
  regions: Omit<Region, "image">[];
}

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

const MOBILE_NAV_QUERY = `
  query {
    tourCategories { id label }
    regions { id key label cities { id name } }
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

    getMobileNavData: builder.query<MobileNavData, void>({
      query: () => ({
        url: "/graphql",
        method: "POST",
        body: { query: MOBILE_NAV_QUERY },
      }),
      transformResponse: (res: { data: MobileNavData }) => res.data,
    }),
  }),
});

export const {
  useGetTourCategoriesQuery,
  useGetRegionsQuery,
  useGetMobileNavDataQuery,
} = graphqlApi;
