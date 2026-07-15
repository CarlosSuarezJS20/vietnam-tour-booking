"use client";

import { useQuery, useMutation } from "@apollo/client/react";
import {
  TOUR_CATEGORIES_QUERY,
  REGIONS_QUERY,
  FEATURED_TOUR_QUERY,
  TOURS_BY_CATEGORY_QUERY,
  CRUISES_QUERY,
  TOURS_BY_CITY_QUERY,
  ALL_TOURS_QUERY,
  ALL_CRUISES_QUERY,
  SEARCH_PRODUCTS_QUERY,
  GET_TOUR_BY_ID_QUERY,
  GET_CRUISE_BY_ID_QUERY,
  GET_CART_QUERY,
  ADD_TO_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  SUBMIT_CONTACT_MUTATION,
  SUBMIT_ENQUIRY_MUTATION,
  TOGGLE_TOUR_VISIBILITY_MUTATION,
  TOGGLE_CRUISE_VISIBILITY_MUTATION,
  SET_ALL_TOURS_VISIBILITY_MUTATION,
  SET_ALL_CRUISES_VISIBILITY_MUTATION,
  CREATE_TOUR_MUTATION,
  CREATE_CRUISE_MUTATION,
  ADD_TOUR_IMAGE_MUTATION,
  DELETE_TOUR_IMAGE_MUTATION,
  SET_PRIMARY_TOUR_IMAGE_MUTATION,
  ADD_CRUISE_IMAGE_MUTATION,
  DELETE_CRUISE_IMAGE_MUTATION,
  SET_PRIMARY_CRUISE_IMAGE_MUTATION,
  SET_FEATURED_TOUR_MUTATION,
} from "./queries";
import { useReactiveVar } from "@apollo/client/react";
import { sessionIdVar } from "@/lib/sessionVar";
import type { TourCategory, Region, FeaturedTour, CarouselTour, Cruise, SearchTour, SearchCruise, ProductConnection, GqlProductFilters, ProductDetailTour, ProductDetailCruise, GqlCart, CartItemInput, EnquiryInput, EnquiryResult, ContactInput, ContactResult } from "@/types/graphql";

export function useGetTourCategoriesQuery() {
  const { data, loading, error } = useQuery<{ tourCategories: TourCategory[] }>(
    TOUR_CATEGORIES_QUERY
  );
  return { data: data?.tourCategories ?? [], loading, error };
}

export function useGetRegionsQuery() {
  const { data, loading, error } = useQuery<{ regions: Region[] }>(REGIONS_QUERY);
  return { data: data?.regions ?? [], loading, error };
}

export function useGetFeaturedTourQuery() {
  const { data, loading, error } = useQuery<{ featuredTour: FeaturedTour }>(
    FEATURED_TOUR_QUERY
  );
  return { data: data?.featuredTour, loading, error };
}

export function useGetToursByCategoryQuery(variables: { categoryId: string; limit?: number }) {
  const { data, loading, error } = useQuery<{ toursByCategory: CarouselTour[] }>(
    TOURS_BY_CATEGORY_QUERY,
    { variables, fetchPolicy: 'no-cache' }
  );
  return { data: data?.toursByCategory ?? [], loading, error };
}

export function useGetCruisesQuery() {
  const { data, loading, error } = useQuery<{ cruises: Cruise[] }>(CRUISES_QUERY, { fetchPolicy: 'no-cache' });
  return { data: data?.cruises ?? [], loading, error };
}

export function useGetToursByCityQuery(variables: { cityId: string; limit?: number }) {
  const { data, loading, error } = useQuery<{ toursByCity: CarouselTour[] }>(
    TOURS_BY_CITY_QUERY,
    { variables, fetchPolicy: 'no-cache' }
  );
  return { data: data?.toursByCity ?? [], loading, error };
}

export function useGetAllToursQuery(filter?: 'ALL' | 'VISIBLE' | 'HIDDEN', first: number = 7, after?: string) {
  const { data, loading, error, refetch } = useQuery<{ allTours: { edges: Array<{ node: Omit<SearchTour, "_type" | "cityNames">; cursor: string }>; pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; endCursor: string | null }; total: number; visibleCount: number; hiddenCount: number } }>(
    ALL_TOURS_QUERY,
    { variables: { filter: filter || 'ALL', first, after }, fetchPolicy: 'no-cache' }
  );
  return {
    data: data?.allTours ?? { edges: [], pageInfo: { hasNextPage: false, hasPreviousPage: false, endCursor: null }, total: 0, visibleCount: 0, hiddenCount: 0 },
    loading,
    error,
    refetch,
  };
}

export function useGetAllCruisesQuery(filter?: 'ALL' | 'VISIBLE' | 'HIDDEN', first: number = 7, after?: string) {
  const { data, loading, error } = useQuery<{ allCruises: { edges: Array<{ node: Omit<SearchCruise, "_type">; cursor: string }>; pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; endCursor: string | null }; total: number; visibleCount: number; hiddenCount: number } }>(
    ALL_CRUISES_QUERY,
    { variables: { filter: filter || 'ALL', first, after }, fetchPolicy: 'no-cache' }
  );
  return {
    data: data?.allCruises ?? { edges: [], pageInfo: { hasNextPage: false, hasPreviousPage: false, endCursor: null }, total: 0, visibleCount: 0, hiddenCount: 0 },
    loading,
    error,
  };
}

export const useGetCartQuery = () => {
  const sessionId = useReactiveVar(sessionIdVar);
  const { data, loading, error } = useQuery<{ cart: GqlCart }>(
    GET_CART_QUERY,
    { variables: { sessionId }, skip: !sessionId }
  );
  return { data: data?.cart, loading, error };
};

export const useAddToCartMutation = () => {
  const sessionId = useReactiveVar(sessionIdVar);
  const [mutate, { loading }] = useMutation<{ addToCart: GqlCart }, { sessionId: string; input: CartItemInput }>(
    ADD_TO_CART_MUTATION,
    { refetchQueries: [{ query: GET_CART_QUERY, variables: { sessionId } }] }
  );
  return { addToCart: (input: CartItemInput) => mutate({ variables: { sessionId: sessionId!, input } }), loading };
};

export const useRemoveFromCartMutation = () => {
  const sessionId = useReactiveVar(sessionIdVar);
  const [mutate, { loading }] = useMutation<{ removeFromCart: GqlCart }, { sessionId: string; uid: string }>(
    REMOVE_FROM_CART_MUTATION,
    { refetchQueries: [{ query: GET_CART_QUERY, variables: { sessionId } }] }
  );
  return { removeFromCart: (uid: string) => mutate({ variables: { sessionId: sessionId!, uid } }), loading };
};

export const useGetTourByIdQuery = (id: string, skip = false) => {
  const { data, loading, error } = useQuery<{ tour: ProductDetailTour }>(
    GET_TOUR_BY_ID_QUERY,
    { variables: { id }, skip: skip || !id, fetchPolicy: 'no-cache' }
  );
  return { data: data?.tour ?? null, loading, error };
};

export const useGetCruiseByIdQuery = (id: string, skip = false) => {
  const { data, loading, error } = useQuery<{ cruise: ProductDetailCruise }>(
    GET_CRUISE_BY_ID_QUERY,
    { variables: { id }, skip: skip || !id, fetchPolicy: 'no-cache' }
  );
  return { data: data?.cruise ?? null, loading, error };
};

export function useSubmitContactMutation() {
  const [mutate, { loading, error }] = useMutation<
    { submitContact: ContactResult },
    { input: ContactInput }
  >(SUBMIT_CONTACT_MUTATION);
  return {
    submitContact: (input: ContactInput) => mutate({ variables: { input } }),
    loading,
    error,
  };
}

export function useSubmitEnquiryMutation() {
  const [mutate, { loading, error }] = useMutation<
    { submitEnquiry: EnquiryResult },
    { input: EnquiryInput }
  >(SUBMIT_ENQUIRY_MUTATION);
  return {
    submitEnquiry: (input: EnquiryInput) => mutate({ variables: { input } }),
    loading,
    error,
  };
}

export function useSearchProductsQuery(variables: {
  filters?: GqlProductFilters;
  first?:   number;
  after?:   string | null;
}) {
  const { data, loading, error } = useQuery<{ searchProducts: ProductConnection }>(
    SEARCH_PRODUCTS_QUERY,
    { variables, fetchPolicy: 'no-cache' }
  );
  return { data: data?.searchProducts, loading, error };
}

export const useToggleTourVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { toggleTourVisibility: SearchTour },
    { id: string }
  >(TOGGLE_TOUR_VISIBILITY_MUTATION, {
    refetchQueries: [
      { query: ALL_TOURS_QUERY, variables: { filter: 'ALL', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'VISIBLE', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'HIDDEN', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'ALL', first: 1000 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'VISIBLE', first: 1000 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'HIDDEN', first: 1000 } },
    ],
    awaitRefetchQueries: true,
  });
  return { toggle: (id: string) => mutate({ variables: { id } }), loading };
};

export const useToggleCruiseVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { toggleCruiseVisibility: SearchCruise },
    { id: string }
  >(TOGGLE_CRUISE_VISIBILITY_MUTATION, {
    refetchQueries: [
      { query: ALL_CRUISES_QUERY, variables: { filter: 'ALL', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'VISIBLE', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'HIDDEN', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'ALL', first: 1000 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'VISIBLE', first: 1000 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'HIDDEN', first: 1000 } },
    ],
    awaitRefetchQueries: true,
  });
  return { toggle: (id: string) => mutate({ variables: { id } }), loading };
};

export const useSetAllToursVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { setAllToursVisibility: SearchTour[] },
    { visible: boolean }
  >(SET_ALL_TOURS_VISIBILITY_MUTATION, {
    refetchQueries: [
      { query: ALL_TOURS_QUERY, variables: { filter: 'ALL', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'VISIBLE', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'HIDDEN', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'ALL', first: 1000 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'VISIBLE', first: 1000 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'HIDDEN', first: 1000 } },
    ],
    awaitRefetchQueries: true,
  });
  return { setVisibility: (visible: boolean) => mutate({ variables: { visible } }), loading };
};

export const useSetAllCruisesVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { setAllCruisesVisibility: SearchCruise[] },
    { visible: boolean }
  >(SET_ALL_CRUISES_VISIBILITY_MUTATION, {
    refetchQueries: [
      { query: ALL_CRUISES_QUERY, variables: { filter: 'ALL', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'VISIBLE', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'HIDDEN', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'ALL', first: 1000 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'VISIBLE', first: 1000 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'HIDDEN', first: 1000 } },
    ],
    awaitRefetchQueries: true,
  });
  return { setVisibility: (visible: boolean) => mutate({ variables: { visible } }), loading };
};

export const useCreateTourMutation = () => {
  const [mutate, { loading }] = useMutation<
    { createTour: SearchTour },
    {
      input: {
        title: string;
        duration: number;
        price: number;
        description: string;
        itinerary?: string;
        featuredTour?: boolean;
        onSale?: boolean;
        saleDiscountPercentage?: number | null;
        cityIds?: string[];
        categoryIds?: string[];
        newCities?: Array<{ name: string; regionId: string }>;
        newCategories?: Array<{ label: string }>;
      };
    }
  >(CREATE_TOUR_MUTATION, {
    refetchQueries: [
      { query: ALL_TOURS_QUERY, variables: { filter: 'ALL', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'VISIBLE', first: 7 } },
      { query: ALL_TOURS_QUERY, variables: { filter: 'HIDDEN', first: 7 } },
    ],
  });
  return {
    createTour: (input: {
      title: string;
      duration: number;
      price: number;
      description: string;
      itinerary?: string;
      featuredTour?: boolean;
      onSale?: boolean;
      saleDiscountPercentage?: number | null;
      cityIds?: string[];
      categoryIds?: string[];
      newCities?: Array<{ name: string; regionId: string }>;
      newCategories?: Array<{ label: string }>;
    }) => mutate({ variables: { input } }),
    loading,
  };
};

export const useCreateCruiseMutation = () => {
  const [mutate, { loading }] = useMutation<
    { createCruise: SearchCruise },
    {
      input: {
        title: string;
        duration: number;
        price: number;
        description: string;
        itinerary?: string;
        onSale?: boolean;
        saleDiscountPercentage?: number | null;
      };
    }
  >(CREATE_CRUISE_MUTATION, {
    refetchQueries: [
      { query: ALL_CRUISES_QUERY, variables: { filter: 'ALL', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'VISIBLE', first: 7 } },
      { query: ALL_CRUISES_QUERY, variables: { filter: 'HIDDEN', first: 7 } },
    ],
  });
  return {
    createCruise: (input: {
      title: string;
      duration: number;
      price: number;
      description: string;
      itinerary?: string;
      onSale?: boolean;
      saleDiscountPercentage?: number | null;
    }) => mutate({ variables: { input } }),
    loading,
  };
};

export const useAddTourImageMutation = () => {
  const [mutate, { loading }] = useMutation<
    { addTourImage: { id: string; url: string; isPrimary: boolean } },
    { tourId: string; url: string }
  >(ADD_TOUR_IMAGE_MUTATION);
  return {
    addTourImage: (tourId: string, url: string) => mutate({ variables: { tourId, url } }),
    loading,
  };
};

export const useDeleteTourImageMutation = () => {
  const [mutate, { loading }] = useMutation<{ deleteTourImage: boolean }, { imageId: string }>(
    DELETE_TOUR_IMAGE_MUTATION
  );
  return {
    deleteTourImage: (imageId: string) => mutate({ variables: { imageId } }),
    loading,
  };
};

export const useSetPrimaryTourImageMutation = () => {
  const [mutate, { loading }] = useMutation<
    { setPrimaryTourImage: { id: string; isPrimary: boolean } },
    { imageId: string }
  >(SET_PRIMARY_TOUR_IMAGE_MUTATION);
  return {
    setPrimaryTourImage: (imageId: string) => mutate({ variables: { imageId } }),
    loading,
  };
};

export const useAddCruiseImageMutation = () => {
  const [mutate, { loading }] = useMutation<
    { addCruiseImage: { id: string; url: string; isPrimary: boolean } },
    { cruiseId: string; url: string }
  >(ADD_CRUISE_IMAGE_MUTATION);
  return {
    addCruiseImage: (cruiseId: string, url: string) => mutate({ variables: { cruiseId, url } }),
    loading,
  };
};

export const useDeleteCruiseImageMutation = () => {
  const [mutate, { loading }] = useMutation<{ deleteCruiseImage: boolean }, { imageId: string }>(
    DELETE_CRUISE_IMAGE_MUTATION
  );
  return {
    deleteCruiseImage: (imageId: string) => mutate({ variables: { imageId } }),
    loading,
  };
};

export const useSetPrimaryCruiseImageMutation = () => {
  const [mutate, { loading }] = useMutation<
    { setPrimaryCruiseImage: { id: string; isPrimary: boolean } },
    { imageId: string }
  >(SET_PRIMARY_CRUISE_IMAGE_MUTATION);
  return {
    setPrimaryCruiseImage: (imageId: string) => mutate({ variables: { imageId } }),
    loading,
  };
};

export const useSetFeaturedTourMutation = () => {
  const [mutate, { loading }] = useMutation<
    { setFeaturedTour: { id: string; featuredTour: boolean } },
    { tourId: string }
  >(SET_FEATURED_TOUR_MUTATION, {
    refetchQueries: [
      { query: FEATURED_TOUR_QUERY },
    ],
    awaitRefetchQueries: true,
  });
  return {
    setFeaturedTour: (tourId: string) => mutate({ variables: { tourId } }),
    loading,
  };
};
