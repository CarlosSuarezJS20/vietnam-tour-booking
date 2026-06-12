"use client";

import { useQuery } from "@apollo/client/react";
import {
  TOUR_CATEGORIES_QUERY,
  REGIONS_QUERY,
  FEATURED_TOUR_QUERY,
  TOURS_BY_CATEGORY_QUERY,
  CRUISES_QUERY,
  TOURS_BY_CITY_QUERY,
} from "./queries";
import type { TourCategory, Region, FeaturedTour, CarouselTour, Cruise } from "@/types/graphql";

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
