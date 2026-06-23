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
  SUBMIT_ENQUIRY_MUTATION,
} from "./queries";
import { useReactiveVar } from "@apollo/client/react";
import { sessionIdVar } from "@/lib/sessionVar";
import type { TourCategory, Region, FeaturedTour, CarouselTour, Cruise, SearchTour, SearchCruise, ProductConnection, GqlProductFilters, ProductDetailTour, ProductDetailCruise, GqlCart, CartItemInput, EnquiryInput, EnquiryResult } from "@/types/graphql";

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

export function useGetAllToursQuery() {
  const { data, loading, error } = useQuery<{ allTours: Omit<SearchTour, "_type" | "cityNames">[] }>(
    ALL_TOURS_QUERY
  );
  return { data: data?.allTours ?? [], loading, error };
}

export function useGetAllCruisesQuery() {
  const { data, loading, error } = useQuery<{ allCruises: Omit<SearchCruise, "_type">[] }>(
    ALL_CRUISES_QUERY
  );
  return { data: data?.allCruises ?? [], loading, error };
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
