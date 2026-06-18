"use client";

import { Suspense } from "react";
import FilterSidebar from "@/components/listing/FilterSidebar";
import ResultsGrid from "@/components/listing/ResultsGrid";
import { useListingFilter } from "@/hooks/useListingFilter";
import { useProductSearch } from "@/hooks/useProductSearch";

const ToursListing = () => {
  const { filters, page, activeCount, setFilter, toggleArrayFilter, setPage, clearAll } =
    useListingFilter();

  const { items, total, totalPages, loading, error } = useProductSearch(filters, page);

  return (
    <div className="flex min-h-screen">
      <FilterSidebar
        filters={filters}
        activeCount={activeCount}
        toggleArrayFilter={toggleArrayFilter}
        setFilter={setFilter}
        clearAll={clearAll}
      />

      {error ? (
        <div className="flex-1 flex items-center justify-center">
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
