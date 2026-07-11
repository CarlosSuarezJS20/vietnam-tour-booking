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
    { variables }
  );
  return { data: data?.toursByCategory ?? [], loading, error };
}

export function useGetCruisesQuery() {
  const { data, loading, error } = useQuery<{ cruises: Cruise[] }>(CRUISES_QUERY);
  return { data: data?.cruises ?? [], loading, error };
}

export function useGetToursByCityQuery(variables: { cityId: string; limit?: number }) {
  const { data, loading, error } = useQuery<{ toursByCity: CarouselTour[] }>(
    TOURS_BY_CITY_QUERY,
    { variables }
  );
  return { data: data?.toursByCity ?? [], loading, error };
}

export function useGetAllToursQuery(filter?: 'ALL' | 'VISIBLE' | 'HIDDEN', first: number = 7, after?: string) {
  const { data, loading, error } = useQuery<{ allTours: { edges: Array<{ node: Omit<SearchTour, "_type" | "cityNames">; cursor: string }>; pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; endCursor: string | null }; total: number } }>(
    ALL_TOURS_QUERY,
    { variables: { filter: filter || 'ALL', first, after }, fetchPolicy: 'cache-and-network' }
  );
  return {
    data: data?.allTours ?? { edges: [], pageInfo: { hasNextPage: false, hasPreviousPage: false, endCursor: null }, total: 0 },
    loading,
    error,
  };
}

export function useGetAllCruisesQuery(filter?: 'ALL' | 'VISIBLE' | 'HIDDEN', first: number = 7, after?: string) {
  const { data, loading, error } = useQuery<{ allCruises: { edges: Array<{ node: Omit<SearchCruise, "_type">; cursor: string }>; pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; endCursor: string | null }; total: number } }>(
    ALL_CRUISES_QUERY,
    { variables: { filter: filter || 'ALL', first, after }, fetchPolicy: 'cache-and-network' }
  );
  return {
    data: data?.allCruises ?? { edges: [], pageInfo: { hasNextPage: false, hasPreviousPage: false, endCursor: null }, total: 0 },
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
    { variables: { id }, skip: skip || !id }
  );
  return { data: data?.tour ?? null, loading, error };
};

export const useGetCruiseByIdQuery = (id: string, skip = false) => {
  const { data, loading, error } = useQuery<{ cruise: ProductDetailCruise }>(
    GET_CRUISE_BY_ID_QUERY,
    { variables: { id }, skip: skip || !id }
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
    { variables }
  );
  return { data: data?.searchProducts, loading, error };
}

export const useToggleTourVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { toggleTourVisibility: SearchTour },
    { id: string }
  >(TOGGLE_TOUR_VISIBILITY_MUTATION, {
    update(cache, { data }) {
      if (!data?.toggleTourVisibility) return;
      const updated = data.toggleTourVisibility;

      // Update all three filter caches
      (['ALL', 'VISIBLE', 'HIDDEN'] as const).forEach(f => {
        const cacheKey = { query: ALL_TOURS_QUERY, variables: { filter: f } };
        const existing = cache.readQuery<{ allTours: SearchTour[] }>(cacheKey);

        if (existing) {
          let newTours = existing.allTours.map(t => t.id === updated.id ? updated : t);
          // Filter to only include items that match this filter
          if (f === 'VISIBLE') {
            newTours = newTours.filter(t => t.isVisible);
          } else if (f === 'HIDDEN') {
            newTours = newTours.filter(t => !t.isVisible);
          }
          cache.writeQuery({ ...cacheKey, data: { allTours: newTours } });
        }
      });
    }
  });
  return { toggle: (id: string) => mutate({ variables: { id } }), loading };
};

export const useToggleCruiseVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { toggleCruiseVisibility: SearchCruise },
    { id: string }
  >(TOGGLE_CRUISE_VISIBILITY_MUTATION, {
    update(cache, { data }) {
      if (!data?.toggleCruiseVisibility) return;
      const updated = data.toggleCruiseVisibility;

      // Update all three filter caches
      (['ALL', 'VISIBLE', 'HIDDEN'] as const).forEach(f => {
        const cacheKey = { query: ALL_CRUISES_QUERY, variables: { filter: f } };
        const existing = cache.readQuery<{ allCruises: SearchCruise[] }>(cacheKey);

        if (existing) {
          let newCruises = existing.allCruises.map(c => c.id === updated.id ? updated : c);
          // Filter to only include items that match this filter
          if (f === 'VISIBLE') {
            newCruises = newCruises.filter(c => c.isVisible);
          } else if (f === 'HIDDEN') {
            newCruises = newCruises.filter(c => !c.isVisible);
          }
          cache.writeQuery({ ...cacheKey, data: { allCruises: newCruises } });
        }
      });
    }
  });
  return { toggle: (id: string) => mutate({ variables: { id } }), loading };
};

export const useSetAllToursVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { setAllToursVisibility: SearchTour[] },
    { visible: boolean }
  >(SET_ALL_TOURS_VISIBILITY_MUTATION, {
    update(cache, { data }) {
      if (!data?.setAllToursVisibility) return;
      const updated = data.setAllToursVisibility;

      // Update all three filter caches
      (['ALL', 'VISIBLE', 'HIDDEN'] as const).forEach(f => {
        const cacheKey = { query: ALL_TOURS_QUERY, variables: { filter: f } };
        let newTours = updated;
        if (f === 'VISIBLE') {
          newTours = updated.filter(t => t.isVisible);
        } else if (f === 'HIDDEN') {
          newTours = updated.filter(t => !t.isVisible);
        }
        cache.writeQuery({ ...cacheKey, data: { allTours: newTours } });
      });
    }
  });
  return { setVisibility: (visible: boolean) => mutate({ variables: { visible } }), loading };
};

export const useSetAllCruisesVisibilityMutation = () => {
  const [mutate, { loading }] = useMutation<
    { setAllCruisesVisibility: SearchCruise[] },
    { visible: boolean }
  >(SET_ALL_CRUISES_VISIBILITY_MUTATION, {
    update(cache, { data }) {
      if (!data?.setAllCruisesVisibility) return;
      const updated = data.setAllCruisesVisibility;

      // Update all three filter caches
      (['ALL', 'VISIBLE', 'HIDDEN'] as const).forEach(f => {
        const cacheKey = { query: ALL_CRUISES_QUERY, variables: { filter: f } };
        let newCruises = updated;
        if (f === 'VISIBLE') {
          newCruises = updated.filter(c => c.isVisible);
        } else if (f === 'HIDDEN') {
          newCruises = updated.filter(c => !c.isVisible);
        }
        cache.writeQuery({ ...cacheKey, data: { allCruises: newCruises } });
      });
    }
  });
  return { setVisibility: (visible: boolean) => mutate({ variables: { visible } }), loading };
};
