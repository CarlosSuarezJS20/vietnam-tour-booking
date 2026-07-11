'use client';

import { useState } from 'react';
import { useVisibilityFilter } from '@/contexts/VisibilityFilterContext';
import { useGetAllToursQuery, useToggleTourVisibilityMutation, useSetAllToursVisibilityMutation } from '@/graphql/hooks';
import { useAdminTourSearch } from '@/hooks/useAdminTourSearch';
import { ToursTable } from '@/components/admin/tours/ToursTable';
import { ToursSearchBar } from '@/components/admin/tours/ToursSearchBar';
import { VisibilityFilter } from '@/components/admin/shared/VisibilityFilter';
import { BulkVisibilityButton } from '@/components/admin/shared/BulkVisibilityButton';
import { EditDrawer } from '@/components/admin/shared/EditDrawer';
import type { Tour } from '@/hooks/useAdminTourSearch';

interface ToursListState {
  searchQuery: string;
  currentCursor?: string;
  selectedTourId?: string;
  loadingIds: Set<string>;
  cursorStack: string[];
  visibleCountCache: number;
  hiddenCountCache: number;
  drawerOpen: boolean;
  drawerTour?: Tour;
}

const TOURS_PER_PAGE = 7;

const ToursPage = () => {
  const { tourFilter, setTourFilter } = useVisibilityFilter();
  const [state, setState] = useState<ToursListState>({
    searchQuery: '',
    loadingIds: new Set(),
    cursorStack: [],
    visibleCountCache: 0,
    hiddenCountCache: 0,
    drawerOpen: false,
    drawerTour: undefined,
  });

  const { data: toursConnection, loading, error } = useGetAllToursQuery(tourFilter, TOURS_PER_PAGE, state.currentCursor);
  const tours = toursConnection.edges.map(e => e.node) as Tour[];
  const { toggle: toggleTourVisibility } = useToggleTourVisibilityMutation();
  const { setVisibility: setAllToursVisibility } = useSetAllToursVisibilityMutation();

  const { filteredTours: searchResults } = useAdminTourSearch(tours, state.searchQuery);

  const displayTours = state.selectedTourId
    ? tours.filter((t: Tour) => t.id === state.selectedTourId)
    : tours;

  const handleSearch = (query: string) => {
    setState((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleTourClick = (tour: Tour) => {
    setState((prev) => ({
      ...prev,
      searchQuery: '',
      currentCursor: undefined,
      cursorStack: [],
      selectedTourId: tour.id,
    }));
  };

  const handleClearSelection = () => {
    setState((prev) => ({
      ...prev,
      selectedTourId: undefined,
    }));
  };

  const handleFilterChange = (filter: 'ALL' | 'VISIBLE' | 'HIDDEN') => {
    setTourFilter(filter);
    setState((prev) => ({
      ...prev,
      currentCursor: undefined,
      cursorStack: [],
      selectedTourId: undefined,
      visibleCountCache: 0,
      hiddenCountCache: 0,
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

  const handleRowClick = (tour: Tour) => {
    setState((prev) => ({
      ...prev,
      drawerOpen: true,
      drawerTour: tour,
    }));
  };

  const handleCloseDrawer = () => {
    setState((prev) => ({
      ...prev,
      drawerOpen: false,
      drawerTour: undefined,
    }));
  };

  const handleNextPage = () => {
    if (toursConnection.pageInfo.hasNextPage && toursConnection.pageInfo.endCursor) {
      setState((prev) => ({
        ...prev,
        cursorStack: [...prev.cursorStack, prev.currentCursor || ''],
        currentCursor: toursConnection.pageInfo.endCursor || undefined,
      }));
    }
  };

  const handlePrevPage = () => {
    setState((prev) => {
      const newStack = [...prev.cursorStack];
      newStack.pop();
      const prevCursor = newStack.length > 0 ? newStack[newStack.length - 1] : undefined;
      return {
        ...prev,
        cursorStack: newStack,
        currentCursor: prevCursor,
      };
    });
  };

  // Keep last known counts to avoid a 0-0 flash while a new page/cursor is loading,
  // but always take fresh data when it arrives (e.g. after a visibility toggle).
  if (
    (toursConnection.visibleCount > 0 || toursConnection.hiddenCount > 0) &&
    (state.visibleCountCache !== toursConnection.visibleCount ||
      state.hiddenCountCache !== toursConnection.hiddenCount)
  ) {
    setState(prev => ({
      ...prev,
      visibleCountCache: toursConnection.visibleCount,
      hiddenCountCache: toursConnection.hiddenCount,
    }));
  }

  const visibleCount = state.visibleCountCache || toursConnection.visibleCount;
  const hiddenCount = state.hiddenCountCache || toursConnection.hiddenCount;

  const pageNumber = state.cursorStack.length + 1;
  const startItem = (pageNumber - 1) * TOURS_PER_PAGE + 1;
  const endItem = Math.min(startItem + tours.length - 1, toursConnection.total);

  if (error) return <div className="text-sm text-red-600">Error loading tours</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#171717]">Tours</h1>
          <p className="mt-1 text-sm text-[#17171799]">
            {state.selectedTourId ? 'Selected tour' : `All (${toursConnection.total})`}
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
          activeFilter={tourFilter}
          onFilterChange={handleFilterChange}
          visibleCount={visibleCount}
          hiddenCount={hiddenCount}
          currentItemCount={displayTours.length}
        />
        {displayTours.length > 1 && (
          <BulkVisibilityButton
            filter={tourFilter}
            onToggleBulk={handleBulkVisibility}
          />
        )}
      </div>

      <div className="rounded border border-[#17171724] overflow-hidden">
        {loading ? (
          <div className="px-4 py-8 text-center text-sm text-[#17171799]">
            Loading tours...
          </div>
        ) : displayTours.length > 0 ? (
          <>
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#17171724] bg-[#f7f5f0]">
              <span className="text-sm text-[#17171799]">
                {state.selectedTourId ? 'Selected tour' : `Showing ${startItem}-${endItem} of ${toursConnection.total}`}
              </span>
              {!state.selectedTourId && (
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevPage}
                    disabled={!toursConnection.pageInfo.hasPreviousPage}
                    className="text-[#171717] disabled:text-[#17171799] disabled:cursor-not-allowed hover:text-[#DC143C] transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={!toursConnection.pageInfo.hasNextPage}
                    className="text-[#171717] disabled:text-[#17171799] disabled:cursor-not-allowed hover:text-[#DC143C] transition-colors"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
            <ToursTable
              tours={displayTours}
              onToggleVisibility={handleToggleVisibility}
              loadingIds={state.loadingIds}
              onRowClick={handleRowClick}
            />
          </>
        ) : (
          <div className="px-4 py-8 text-center text-sm text-[#17171799]">
            No tours found
          </div>
        )}
      </div>

      <EditDrawer
        isOpen={state.drawerOpen}
        item={state.drawerTour}
        title={state.drawerTour?.title || 'Edit Tour'}
        onClose={handleCloseDrawer}
      />
    </div>
  );
};

export default ToursPage;
