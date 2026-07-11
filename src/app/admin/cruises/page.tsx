'use client';

import { useState } from 'react';
import { useVisibilityFilter } from '@/contexts/VisibilityFilterContext';
import { useGetAllCruisesQuery, useToggleCruiseVisibilityMutation, useSetAllCruisesVisibilityMutation } from '@/graphql/hooks';
import { useAdminCruiseSearch } from '@/hooks/useAdminCruiseSearch';
import { CruisesTable } from '@/components/admin/cruises/CruisesTable';
import { CruisesSearchBar } from '@/components/admin/cruises/CruisesSearchBar';
import { VisibilityFilter } from '@/components/admin/shared/VisibilityFilter';
import { BulkVisibilityButton } from '@/components/admin/shared/BulkVisibilityButton';
import { PaginationControls } from '@/components/admin/shared/PaginationControls';
import type { Cruise } from '@/hooks/useAdminCruiseSearch';

interface CruisesListState {
  searchQuery: string;
  currentPage: number;
  selectedCruiseId?: string;
  loadingIds: Set<string>;
}

const CRUISES_PER_PAGE = 7;

const CruisesPage = () => {
  const { cruiseFilter, setCruiseFilter } = useVisibilityFilter();
  const [state, setState] = useState<CruisesListState>({
    searchQuery: '',
    currentPage: 1,
    loadingIds: new Set(),
  });

  // Always fetch ALL for accurate counts
  const { data: allCruises } = useGetAllCruisesQuery('ALL');
  // Fetch filtered data for display
  const { data: cruises, loading, error } = useGetAllCruisesQuery(cruiseFilter);
  const { toggle: toggleCruiseVisibility } = useToggleCruiseVisibilityMutation();
  const { setVisibility: setAllCruisesVisibility } = useSetAllCruisesVisibilityMutation();

  const { filteredCruises: searchResults } = useAdminCruiseSearch(cruises as Cruise[], state.searchQuery);

  // If cruise is selected via search, show only that cruise
  const displayCruises = state.selectedCruiseId
    ? cruises.filter((c: Cruise) => c.id === state.selectedCruiseId)
    : cruises;

  // Calculate pagination for display cruises
  const totalPages = Math.ceil(displayCruises.length / CRUISES_PER_PAGE);
  const startIdx = (state.currentPage - 1) * CRUISES_PER_PAGE;
  const endIdx = startIdx + CRUISES_PER_PAGE;
  const currentPageCruises = displayCruises.slice(startIdx, endIdx);

  const handleSearch = (query: string) => {
    setState((prev) => ({
      ...prev,
      searchQuery: query,
    }));
  };

  const handleCruiseClick = (cruise: Cruise) => {
    setState((prev) => ({
      ...prev,
      searchQuery: '',
      currentPage: 1,
      selectedCruiseId: cruise.id,
    }));
  };

  const handleClearSelection = () => {
    setState((prev) => ({
      ...prev,
      selectedCruiseId: undefined,
      currentPage: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setState((prev) => ({
      ...prev,
      currentPage: page,
    }));
  };

  const handleFilterChange = (filter: 'ALL' | 'VISIBLE' | 'HIDDEN') => {
    setCruiseFilter(filter);
    setState((prev) => ({
      ...prev,
      currentPage: 1,
      selectedCruiseId: undefined,
    }));
  };

  const handleToggleVisibility = async (id: string) => {
    setState((prev) => ({
      ...prev,
      loadingIds: new Set([...prev.loadingIds, id]),
    }));
    try {
      await toggleCruiseVisibility(id);
    } finally {
      setState((prev) => {
        const newLoadingIds = new Set(prev.loadingIds);
        newLoadingIds.delete(id);
        return { ...prev, loadingIds: newLoadingIds };
      });
    }
  };

  const handleBulkVisibility = async (visible: boolean) => {
    try {
      await setAllCruisesVisibility(visible);
    } catch (err) {
      console.error('Failed to set visibility:', err);
    }
  };

  // Count visible/hidden from ALL cruises (regardless of current filter)
  const visibleCount = allCruises.filter((c: Cruise) => c.isVisible).length;
  const hiddenCount = allCruises.filter((c: Cruise) => !c.isVisible).length;

  if (error) return <div className="text-sm text-red-600">Error loading cruises</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#171717]">Cruises</h1>
          <p className="mt-1 text-sm text-[#17171799]">
            {state.selectedCruiseId ? 'Selected cruise' : `All (${allCruises.length})`}
          </p>
        </div>
        {state.selectedCruiseId && (
          <button
            onClick={handleClearSelection}
            className="rounded px-4 py-2 text-sm text-[#DC143C] hover:bg-[#f7f5f0] transition-colors"
          >
            Clear selection
          </button>
        )}
      </div>

      <CruisesSearchBar
        value={state.searchQuery}
        onChange={handleSearch}
        searchResults={searchResults}
        onCruiseClick={handleCruiseClick}
      />

      <div className="flex items-center justify-between gap-4">
        <VisibilityFilter
          activeFilter={cruiseFilter}
          onFilterChange={handleFilterChange}
          visibleCount={visibleCount}
          hiddenCount={hiddenCount}
          currentItemCount={displayCruises.length}
        />
        {displayCruises.length > 1 && (
          <BulkVisibilityButton
            filter={cruiseFilter}
            onToggleBulk={handleBulkVisibility}
          />
        )}
      </div>

      <div className="rounded border border-[#17171724] overflow-hidden">
        {loading ? (
          <div className="px-4 py-8 text-center text-sm text-[#17171799]">
            Loading cruises...
          </div>
        ) : currentPageCruises.length > 0 ? (
          <>
            <CruisesTable
              cruises={currentPageCruises}
              onToggleVisibility={handleToggleVisibility}
              loadingIds={state.loadingIds}
            />
            {totalPages > 1 && (
              <PaginationControls
                currentPage={state.currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={CRUISES_PER_PAGE}
                totalItems={displayCruises.length}
              />
            )}
          </>
        ) : (
          <div className="px-4 py-8 text-center text-sm text-[#17171799]">
            No cruises found
          </div>
        )}
      </div>
    </div>
  );
};

export default CruisesPage;
