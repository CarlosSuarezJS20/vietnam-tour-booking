'use client';

import { useState } from 'react';
import { useGetAllToursQuery, useToggleTourVisibilityMutation, useSetAllToursVisibilityMutation } from '@/graphql/hooks';
import { useAdminTourSearch } from '@/hooks/useAdminTourSearch';
import { ToursTable } from '@/components/admin/tours/ToursTable';
import { ToursSearchBar } from '@/components/admin/tours/ToursSearchBar';
import { VisibilityFilter } from '@/components/admin/shared/VisibilityFilter';
import { BulkVisibilityButton } from '@/components/admin/shared/BulkVisibilityButton';
import { PaginationControls } from '@/components/admin/shared/PaginationControls';
import type { Tour } from '@/hooks/useAdminTourSearch';

interface ToursListState {
  searchQuery: string;
  visibilityFilter: 'ALL' | 'VISIBLE' | 'HIDDEN';
  currentPage: number;
  selectedTourId?: string;
  loadingIds: Set<string>;
}

const TOURS_PER_PAGE = 7;

const ToursPage = () => {
  const [state, setState] = useState<ToursListState>({
    searchQuery: '',
    visibilityFilter: 'ALL',
    currentPage: 1,
    loadingIds: new Set(),
  });

  // Always fetch ALL for accurate counts
  const { data: allTours } = useGetAllToursQuery('ALL');
  // Fetch filtered data for display
  const { data: tours, loading, error } = useGetAllToursQuery(state.visibilityFilter);
  const { toggle: toggleTourVisibility } = useToggleTourVisibilityMutation(state.visibilityFilter);
  const { setVisibility: setAllToursVisibility } = useSetAllToursVisibilityMutation(state.visibilityFilter);

  const { filteredTours: searchResults } = useAdminTourSearch(tours as Tour[], state.searchQuery);

  // If tour is selected via search, show only that tour
  const displayTours = state.selectedTourId
    ? tours.filter((t: Tour) => t.id === state.selectedTourId)
    : tours;

  // Calculate pagination for display tours
  const totalPages = Math.ceil(displayTours.length / TOURS_PER_PAGE);
  const startIdx = (state.currentPage - 1) * TOURS_PER_PAGE;
  const endIdx = startIdx + TOURS_PER_PAGE;
  const currentPageTours = displayTours.slice(startIdx, endIdx);

  const handleSearch = (query: string) => {
    setState((prev) => ({
      ...prev,
      searchQuery: query,
    }));
  };

  const handleTourClick = (tour: Tour) => {
    setState((prev) => ({
      ...prev,
      searchQuery: '',
      currentPage: 1,
      selectedTourId: tour.id,
    }));
  };

  const handleClearSelection = () => {
    setState((prev) => ({
      ...prev,
      selectedTourId: undefined,
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
    setState((prev) => ({
      ...prev,
      visibilityFilter: filter,
      currentPage: 1,
      selectedTourId: undefined,
    }));
  };

  const handleToggleVisibility = async (id: string) => {
    setState((prev) => ({
      ...prev,
      loadingIds: new Set([...prev.loadingIds, id]),
    }));
    try {
      await toggleTourVisibility(id);
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
      await setAllToursVisibility(visible);
    } catch (err) {
      console.error('Failed to set visibility:', err);
    }
  };

  // Count visible/hidden from ALL tours (regardless of current filter)
  const visibleCount = allTours.filter((t: Tour) => t.isVisible).length;
  const hiddenCount = allTours.filter((t: Tour) => !t.isVisible).length;

  if (loading) return <div className="text-sm text-[#17171799]">Loading tours...</div>;
  if (error) return <div className="text-sm text-red-600">Error loading tours</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#171717]">Tours</h1>
          <p className="mt-1 text-sm text-[#17171799]">
            {state.selectedTourId ? 'Selected tour' : `All (${tours.length})`}
          </p>
        </div>
        {state.selectedTourId && (
          <button
            onClick={handleClearSelection}
            className="rounded px-4 py-2 text-sm text-[#DC143C] hover:bg-[#f7f5f0] transition-colors"
          >
            Clear selection
          </button>
        )}
      </div>

      <ToursSearchBar
        value={state.searchQuery}
        onChange={handleSearch}
        searchResults={searchResults}
        onTourClick={handleTourClick}
      />

      <div className="flex items-center justify-between gap-4">
        <VisibilityFilter
          activeFilter={state.visibilityFilter}
          onFilterChange={handleFilterChange}
          visibleCount={visibleCount}
          hiddenCount={hiddenCount}
        />
        <BulkVisibilityButton
          filter={state.visibilityFilter}
          onToggleBulk={handleBulkVisibility}
        />
      </div>

      <div className="rounded border border-[#17171724] overflow-hidden">
        {currentPageTours.length > 0 ? (
          <>
            <ToursTable
              tours={currentPageTours}
              onToggleVisibility={handleToggleVisibility}
              loadingIds={state.loadingIds}
            />
            {totalPages > 1 && (
              <PaginationControls
                currentPage={state.currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={TOURS_PER_PAGE}
                totalItems={displayTours.length}
              />
            )}
          </>
        ) : (
          <div className="px-4 py-8 text-center text-sm text-[#17171799]">
            No tours found
          </div>
        )}
      </div>
    </div>
  );
};

export default ToursPage;
