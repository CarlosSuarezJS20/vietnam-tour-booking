"use client";

import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useTourSearch, DEFAULT_FILTERS } from "@/hooks/useTourSearch";
import SearchFiltersBar from "./SearchFilters";
import SearchResultSection from "./SearchResultSection";
import type { SearchFilters } from "@/types/graphql";

interface Props {
  query:   string;
  onClose: () => void;
}

function SkeletonRow() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 animate-pulse">
      <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-gray-100 rounded w-3/4" />
        <div className="h-2.5 bg-gray-100 rounded w-1/3" />
        <div className="h-2.5 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
  );
}

export default function SearchDropdown({ query, onClose }: Props) {
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const { tours, cruises, total, loading } = useTourSearch(query, filters);
  const panelRef = useRef<HTMLDivElement>(null);

  const updateFilters = (partial: Partial<SearchFilters>) =>
    setFilters(prev => ({ ...prev, ...partial }));

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  const hasQuery   = query.trim().length >= 2;
  const hasResults = tours.length > 0 || cruises.length > 0;

  return (
    <div
      ref={panelRef}
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60]"
      style={{ maxHeight: 520 }}
    >
      <div className="overflow-y-auto" style={{ maxHeight: 520 }}>
        <SearchFiltersBar filters={filters} onChange={updateFilters} />

        {loading && (
          <div className="divide-y divide-gray-50">
            {[1, 2, 3].map(n => <SkeletonRow key={n} />)}
          </div>
        )}

        {!loading && !hasQuery && (
          <div className="flex flex-col items-center justify-center py-10 text-center px-6">
            <FiSearch className="w-8 h-8 text-gray-200 mb-3" />
            <p className="text-sm text-gray-400 font-sans">
              Start typing to search {" "}
              <span className="font-semibold text-gray-600">tours and cruises</span>
            </p>
          </div>
        )}

        {!loading && hasQuery && !hasResults && (
          <div className="flex flex-col items-center justify-center py-10 text-center px-6">
            <p className="text-sm text-gray-500 font-sans">
              No results for <span className="font-semibold text-gray-700">&ldquo;{query}&rdquo;</span>
            </p>
            <button
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="mt-3 text-xs text-brand hover:underline font-sans"
            >
              Clear filters
            </button>
          </div>
        )}

        {!loading && hasResults && (
          <div className="divide-y divide-gray-50">
            {filters.type !== "cruise" && (
              <SearchResultSection label="Tours" items={tours} onClose={onClose} />
            )}
            {filters.type !== "tour" && (
              <SearchResultSection label="Cruises" items={cruises} onClose={onClose} />
            )}
          </div>
        )}

        {!loading && hasResults && hasQuery && (
          <div className="border-t border-gray-100 px-4 py-3 text-center">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-brand hover:underline font-sans"
            >
              See all {total} result{total !== 1 ? "s" : ""} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
