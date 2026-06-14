"use client";

import { useMemo } from "react";
import Fuse from "fuse.js";
import { useGetAllToursQuery, useGetAllCruisesQuery } from "@/graphql/hooks";
import { parsePriceValue, durationBucket } from "@/lib/tourParsers";
import type { SearchItem, SearchFilters } from "@/types/graphql";

export const DEFAULT_FILTERS: SearchFilters = {
  type:       "all",
  categories: [],
  region:     "",
  minPrice:   0,
  maxPrice:   Infinity,
  duration:   "any",
};

export function useTourSearch(query: string, filters: SearchFilters = DEFAULT_FILTERS) {
  const { data: rawTours,   loading: toursLoading   } = useGetAllToursQuery();
  const { data: rawCruises, loading: cruisesLoading } = useGetAllCruisesQuery();

  const allItems = useMemo<SearchItem[]>(() => [
    ...rawTours.map(t => ({
      ...t,
      _type:     "tour" as const,
      cityNames: t.cities.map(c => c.name).join(" "),
    })),
    ...rawCruises.map(c => ({
      ...c,
      _type: "cruise" as const,
    })),
  ], [rawTours, rawCruises]);

  const fuse = useMemo(() => new Fuse(allItems, {
    keys: [
      { name: "title",       weight: 3.0 },
      { name: "cityNames",   weight: 2.0 },
      { name: "description", weight: 1.5 },
      { name: "itinerary",   weight: 0.8 },
    ],
    threshold:         0.35,
    includeScore:      true,
    minMatchCharLength: 2,
  }), [allItems]);

  const results = useMemo<SearchItem[]>(() => {
    let pool: SearchItem[] = query.trim()
      ? fuse.search(query).map(r => r.item)
      : [...allItems];

    if (filters.type !== "all") {
      pool = pool.filter(i => i._type === filters.type);
    }

    if (filters.categories.length) {
      pool = pool.filter(i =>
        i._type === "tour" && filters.categories.some(c => i.categories.some(tc => tc.id === c))
      );
    }

    if (filters.region) {
      pool = pool.filter(i =>
        i._type !== "tour" || i.cities.some(c => c.region.key === filters.region)
      );
    }

    pool = pool.filter(i => {
      const p = parsePriceValue(i.price);
      return p >= filters.minPrice && p <= filters.maxPrice;
    });

    if (filters.duration !== "any") {
      pool = pool.filter(i => durationBucket(i.duration) === filters.duration);
    }

    return pool;
  }, [fuse, allItems, query, filters]);

  const tours   = useMemo(() => results.filter((i): i is Extract<SearchItem, { _type: "tour" }>   => i._type === "tour"),   [results]);
  const cruises = useMemo(() => results.filter((i): i is Extract<SearchItem, { _type: "cruise" }> => i._type === "cruise"), [results]);

  return {
    tours,
    cruises,
    total:   results.length,
    loading: toursLoading || cruisesLoading,
  };
}
