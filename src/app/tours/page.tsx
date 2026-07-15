"use client";

import { Suspense, useState, useMemo } from "react";
import { FiSliders, FiX } from "react-icons/fi";
import FilterSidebar from "@/components/listing/FilterSidebar";
import ResultsGrid from "@/components/listing/ResultsGrid";
import PillButton from "@/components/ui/PillButton";
import { useListingFilter } from "@/hooks/useListingFilter";
import { useProductSearch } from "@/hooks/useProductSearch";
import { useTourSearch, DEFAULT_FILTERS } from "@/hooks/useTourSearch";

const ToursListing = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { filters, page, activeCount, setFilter, toggleArrayFilter, setPage, clearAll } =
    useListingFilter();

  const clearSearch = () => {
    setFilter("search", null);
  };

  const hasSearch = !!filters.search?.trim();
  const tourSearchResult = useTourSearch(filters.search || "", DEFAULT_FILTERS);
  const productSearchResult = useProductSearch(filters, page);

  const items: any[] = useMemo(() => {
    if (hasSearch) {
      return [
        ...tourSearchResult.tours,
        ...tourSearchResult.cruises,
      ];
    }
    return productSearchResult.items;
  }, [hasSearch, tourSearchResult.tours, tourSearchResult.cruises, productSearchResult.items]);

  const total = hasSearch ? tourSearchResult.total : productSearchResult.total;
  const totalPages = hasSearch ? 1 : productSearchResult.totalPages;
  const loading = hasSearch ? tourSearchResult.loading : productSearchResult.loading;
  const error = hasSearch ? undefined : productSearchResult.error;

  return (
    <div className="flex min-h-screen">
      <FilterSidebar
        filters={filters}
        activeCount={activeCount}
        toggleArrayFilter={toggleArrayFilter}
        setFilter={setFilter}
        clearAll={clearAll}
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      />

      <div className="flex-1 min-w-0">
        {/* Search term display */}
        {filters.search && (
          <div className="sticky top-[65px] z-20 bg-gray-50 border-b border-gray-100 px-4 py-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 font-sans">
                Results for: <span className="font-semibold text-gray-900">"{filters.search}"</span>
              </p>
              <button
                onClick={clearSearch}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline cursor-pointer transition-colors"
                title="Clear search"
              >
                Clear
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile filter bar */}
        <div className="md:hidden sticky top-[65px] z-30 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 font-sans border border-gray-200 px-4 py-3"
          >
            <FiSliders className="w-4 h-4" />
            Filters
            {activeCount > 0 && (
              <span className="text-[10px] font-bold bg-brand text-white rounded-full px-1.5 py-0.5">
                {activeCount}
              </span>
            )}
          </button>
          <PillButton variant="brand">My Bookings</PillButton>
        </div>

        {error ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <p className="text-sm text-gray-400 font-sans">Failed to load products. Please refresh.</p>
          </div>
        ) : (
          <ResultsGrid
            items={items}
            total={total}
            totalPages={totalPages}
            page={page}
            loading={loading}
            onPage={setPage}
            onClear={clearAll}
          />
        )}
      </div>
    </div>
  );
}

const ToursPage = () => {
  return (
    <Suspense>
      <ToursListing />
    </Suspense>
  );
}

export default ToursPage;
