"use client";

import { useState, useEffect, useRef } from "react";
import { useApolloClient, useQuery } from "@apollo/client/react";
import { SEARCH_PRODUCTS_QUERY } from "@/graphql/queries";
import type { ListingFilters, ListingProduct, ProductConnection, GqlProductFilters } from "@/types/graphql";

const PAGE_SIZE = 12;

function toGqlFilters(f: ListingFilters): GqlProductFilters {
  const out: GqlProductFilters = {};
  if (f.types.length)      out.types      = f.types;
  if (f.categories.length) out.categories = f.categories;
  if (f.regions.length)    out.regions    = f.regions;
  if (f.cities.length)     out.cities     = f.cities;
  if (f.minPrice != null)  out.minPrice   = f.minPrice;
  if (f.maxPrice != null)  out.maxPrice   = f.maxPrice;
  if (f.deals)             out.deals      = true;
  return out;
}

export function useProductSearch(filters: ListingFilters, page: number) {
  const client = useApolloClient();

  const cursorMapRef      = useRef<Record<number, string | undefined>>({ 1: undefined });
  const computedPagesRef  = useRef<Set<number>>(new Set([1]));
  const filtersKeyRef     = useRef(JSON.stringify(filters));

  const [cursorState, setCursorState] = useState<{
    cursor: string | undefined;
    ready:  boolean;
  }>({ cursor: undefined, ready: true });

  // Reset cursor map when filters change
  useEffect(() => {
    const key = JSON.stringify(filters);
    if (key !== filtersKeyRef.current) {
      filtersKeyRef.current      = key;
      cursorMapRef.current       = { 1: undefined };
      computedPagesRef.current   = new Set([1]);
    }
  }, [filters]);

  // Resolve cursor for the requested page
  useEffect(() => {
    if (computedPagesRef.current.has(page)) {
      setCursorState({ cursor: cursorMapRef.current[page], ready: true });
      return;
    }

    setCursorState(s => ({ ...s, ready: false }));
    const gqlFilters = toGqlFilters(filters);
    let cancelled = false;

    async function build() {
      for (let p = 1; p < page; p++) {
        if (computedPagesRef.current.has(p + 1)) continue;
        try {
          const result = await client.query<{ searchProducts: ProductConnection }>({
            query:     SEARCH_PRODUCTS_QUERY,
            variables: { filters: gqlFilters, first: PAGE_SIZE, after: cursorMapRef.current[p] ?? null },
          });
          if (cancelled) return;
          const end = result.data?.searchProducts?.pageInfo?.endCursor ?? undefined;
          cursorMapRef.current[p + 1] = end;
          computedPagesRef.current.add(p + 1);
        } catch {
          if (cancelled) return;
          break;
        }
      }
      if (!cancelled) {
        setCursorState({ cursor: cursorMapRef.current[page], ready: true });
      }
    }

    build();
    return () => { cancelled = true; };
  }, [page, filters, client]);

  const gqlFilters = toGqlFilters(filters);

  const { data, loading, error } = useQuery<{ searchProducts: ProductConnection }>(
    SEARCH_PRODUCTS_QUERY,
    {
      variables: { filters: gqlFilters, first: PAGE_SIZE, after: cursorState.cursor ?? null },
      skip:      !cursorState.ready,
    }
  );

  // Cache the next page cursor after a successful fetch
  useEffect(() => {
    if (!data) return;
    const end = data.searchProducts?.pageInfo?.endCursor ?? undefined;
    if (!computedPagesRef.current.has(page + 1)) {
      cursorMapRef.current[page + 1] = end;
      computedPagesRef.current.add(page + 1);
    }
  }, [data, page]);

  const items:      ListingProduct[] = data?.searchProducts?.edges?.map(e => e.node) ?? [];
  const total:      number           = data?.searchProducts?.total    ?? 0;
  const totalPages: number           = Math.ceil(total / PAGE_SIZE);

  return {
    items,
    total,
    totalPages,
    loading: loading || !cursorState.ready,
    error,
  };
}
