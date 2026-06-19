"use client";

import { Suspense, useState } from "react";
import { FiSliders } from "react-icons/fi";
import FilterSidebar from "@/components/listing/FilterSidebar";
import ResultsGrid from "@/components/listing/ResultsGrid";
import PillButton from "@/components/ui/PillButton";
import { useListingFilter } from "@/hooks/useListingFilter";
import { useProductSearch } from "@/hooks/useProductSearch";

const ToursListing = () => {
  const [filterOpen, setFilterOpen] = useState(false);
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
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      />

      <div className="flex-1 min-w-0">
        {/* Mobile filter bar */}
        <div className="md:hidden sticky top-[65px] z-30 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 font-sans border border-gray-200 px-3 py-2"
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
