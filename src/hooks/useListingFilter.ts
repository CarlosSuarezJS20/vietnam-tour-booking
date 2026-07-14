"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { ListingFilters } from "@/types/graphql";

function parseCommaList(param: string | null): string[] {
  if (!param) return [];
  return param.split(",").map(s => s.trim()).filter(Boolean);
}

export function useListingFilter() {
  const params  = useSearchParams();
  const router  = useRouter();

  const filters: ListingFilters = useMemo(() => ({
    types:      parseCommaList(params.get("types")),
    categories: parseCommaList(params.get("categories")),
    regions:    parseCommaList(params.get("regions")),
    cities:     parseCommaList(params.get("cities")),
    minPrice:   params.get("minPrice") ? Number(params.get("minPrice")) : null,
    maxPrice:   params.get("maxPrice") ? Number(params.get("maxPrice")) : null,
    deals:      params.get("deals") === "true",
    search:     params.get("search") || "",
  }), [params]);

  const page = useMemo(() => {
    const p = Number(params.get("page"));
    return p > 0 ? p : 1;
  }, [params]);

  const activeCount = useMemo(() =>
    filters.types.length +
    filters.categories.length +
    filters.regions.length +
    filters.cities.length +
    (filters.minPrice != null ? 1 : 0) +
    (filters.maxPrice != null ? 1 : 0) +
    (filters.deals ? 1 : 0),
  [filters]);

  const setFilter = useCallback((key: string, value: string | null) => {
    const next = new URLSearchParams(params.toString());
    next.delete("page");
    if (value === null || value === "") next.delete(key);
    else next.set(key, value);
    router.push(`/tours?${next.toString()}`);
  }, [params, router]);

  const toggleArrayFilter = useCallback((key: string, value: string) => {
    const current = parseCommaList(params.get(key));
    const next    = new URLSearchParams(params.toString());
    next.delete("page");
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    if (updated.length === 0) next.delete(key);
    else next.set(key, updated.join(","));
    router.push(`/tours?${next.toString()}`);
  }, [params, router]);

  const setPage = useCallback((p: number) => {
    const next = new URLSearchParams(params.toString());
    if (p <= 1) next.delete("page");
    else next.set("page", String(p));
    router.push(`/tours?${next.toString()}`);
  }, [params, router]);

  const clearAll = useCallback(() => {
    router.push("/tours");
  }, [router]);

  return { filters, page, activeCount, setFilter, toggleArrayFilter, setPage, clearAll };
}
