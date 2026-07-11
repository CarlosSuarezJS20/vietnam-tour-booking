'use client';

import { useState } from 'react';
import { useVisibilityFilter } from '@/contexts/VisibilityFilterContext';
import { useGetAllCruisesQuery, useToggleCruiseVisibilityMutation, useSetAllCruisesVisibilityMutation } from '@/graphql/hooks';
import { useAdminCruiseSearch } from '@/hooks/useAdminCruiseSearch';
import { CruisesTable } from '@/components/admin/cruises/CruisesTable';
import { CruisesSearchBar } from '@/components/admin/cruises/CruisesSearchBar';
import { VisibilityFilter } from '@/components/admin/shared/VisibilityFilter';
import { BulkVisibilityButton } from '@/components/admin/shared/BulkVisibilityButton';
import { EditDrawer } from '@/components/admin/shared/EditDrawer';
import type { Cruise } from '@/hooks/useAdminCruiseSearch';

interface CruisesListState {
  searchQuery: string;
  currentCursor?: string;
  selectedCruiseId?: string;
  loadingIds: Set<string>;
  cursorStack: string[];
  visibleCountCache: number;
  hiddenCountCache: number;
  drawerOpen: boolean;
  drawerCruise?: Cruise;
}

const CRUISES_PER_PAGE = 7;

const CruisesPage = () => {
  const { cruiseFilter, setCruiseFilter } = useVisibilityFilter();
  const [state, setState] = useState<CruisesListState>({
    searchQuery: '',
    loadingIds: new Set(),
    cursorStack: [],
    visibleCountCache: 0,
    hiddenCountCache: 0,
    drawerOpen: false,
    drawerCruise: undefined,
  });

  const { data: cruisesConnection, loading, error } = useGetAllCruisesQuery(cruiseFilter, CRUISES_PER_PAGE, state.currentCursor);
  const cruises = cruisesConnection.edges.map(e => e.node) as Cruise[];
  const { toggle: toggleCruiseVisibility } = useToggleCruiseVisibilityMutation();
  const { setVisibility: setAllCruisesVisibility } = useSetAllCruisesVisibilityMutation();

  const { filteredCruises: searchResults } = useAdminCruiseSearch(cruises, state.searchQuery);

  const displayCruises = state.selectedCruiseId
    ? cruises.filter((c: Cruise) => c.id === state.selectedCruiseId)
    : cruises;

  const handleSearch = (query: string) => {
    setState((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleCruiseClick = (cruise: Cruise) => {
    setState((prev) => ({
      ...prev,
      searchQuery: '',
      currentCursor: undefined,
      cursorStack: [],
      selectedCruiseId: cruise.id,
    }));
  };

  const handleClearSelection = () => {
    setState((prev) => ({
      ...prev,
      selectedCruiseId: undefined,
    }));
  };

  const handleFilterChange = (filter: 'ALL' | 'VISIBLE' | 'HIDDEN') => {
    setCruiseFilter(filter);
    setState((prev) => ({
      ...prev,
      currentCursor: undefined,
      cursorStack: [],
      selectedCruiseId: undefined,
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

  const handleRowClick = (cruise: Cruise) => {
    setState((prev) => ({
      ...prev,
      drawerOpen: true,
      drawerCruise: cruise,
    }));
  };

  const handleCloseDrawer = () => {
    setState((prev) => ({
      ...prev,
      drawerOpen: false,
      drawerCruise: undefined,
    }));
  };

  const handleNextPage = () => {
    if (cruisesConnection.pageInfo.hasNextPage && cruisesConnection.pageInfo.endCursor) {
      setState((prev) => ({
        ...prev,
        cursorStack: [...prev.cursorStack, prev.currentCursor || ''],
        currentCursor: cruisesConnection.pageInfo.endCursor || undefined,
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
    (cruisesConnection.visibleCount > 0 || cruisesConnection.hiddenCount > 0) &&
    (state.visibleCountCache !== cruisesConnection.visibleCount ||
      state.hiddenCountCache !== cruisesConnection.hiddenCount)
  ) {
    setState(prev => ({
      ...prev,
      visibleCountCache: cruisesConnection.visibleCount,
      hiddenCountCache: cruisesConnection.hiddenCount,
    }));
  }

  const visibleCount = state.visibleCountCache || cruisesConnection.visibleCount;
  const hiddenCount = state.hiddenCountCache || cruisesConnection.hiddenCount;

  const pageNumber = state.cursorStack.length + 1;
  const startItem = (pageNumber - 1) * CRUISES_PER_PAGE + 1;
  const endItem = Math.min(startItem + cruises.length - 1, cruisesConnection.total);

  if (error) return <div className="text-sm text-red-600">Error loading cruises</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#171717]">Cruises</h1>
          <p className="mt-1 text-sm text-[#17171799]">
            {state.selectedCruiseId ? 'Selected cruise' : `All (${cruisesConnection.total})`}
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
        ) : displayCruises.length > 0 ? (
          <>
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#17171724] bg-[#f7f5f0]">
              <span className="text-sm text-[#17171799]">
                {state.selectedCruiseId ? 'Selected cruise' : `Showing ${startItem}-${endItem} of ${cruisesConnection.total}`}
              </span>
              {!state.selectedCruiseId && (
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevPage}
                    disabled={!cruisesConnection.pageInfo.hasPreviousPage}
                    className="text-[#171717] disabled:text-[#17171799] disabled:cursor-not-allowed hover:text-[#DC143C] transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={!cruisesConnection.pageInfo.hasNextPage}
                    className="text-[#171717] disabled:text-[#17171799] disabled:cursor-not-allowed hover:text-[#DC143C] transition-colors"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
            <CruisesTable
              cruises={displayCruises}
              onToggleVisibility={handleToggleVisibility}
              loadingIds={state.loadingIds}
              onRowClick={handleRowClick}
            />
          </>
        ) : (
          <div className="px-4 py-8 text-center text-sm text-[#17171799]">
            No cruises found
          </div>
        )}
      </div>

      <EditDrawer
        isOpen={state.drawerOpen}
        item={state.drawerCruise}
        title={state.drawerCruise?.title || 'Edit Cruise'}
        onClose={handleCloseDrawer}
      />
    </div>
  );
};

export default CruisesPage;
