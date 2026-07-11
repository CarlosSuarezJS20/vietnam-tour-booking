'use client';

import { useState, useMemo } from 'react';
import { useVisibilityFilter } from '@/contexts/VisibilityFilterContext';
import { useGetAllCruisesQuery, useToggleCruiseVisibilityMutation, useSetAllCruisesVisibilityMutation } from '@/graphql/hooks';
import { useAdminCruiseSearch } from '@/hooks/useAdminCruiseSearch';
import { CruisesTable } from '@/components/admin/cruises/CruisesTable';
import { CruisesSearchBar } from '@/components/admin/cruises/CruisesSearchBar';
import { VisibilityFilter } from '@/components/admin/shared/VisibilityFilter';
import { BulkVisibilityButton } from '@/components/admin/shared/BulkVisibilityButton';
import type { Cruise } from '@/hooks/useAdminCruiseSearch';

interface CruisesListState {
  searchQuery: string;
  currentCursor?: string;
  selectedCruiseId?: string;
  loadingIds: Set<string>;
  cursorStack: string[];
}

const CRUISES_PER_PAGE = 7;

const CruisesPage = () => {
  const { cruiseFilter, setCruiseFilter } = useVisibilityFilter();
  const [state, setState] = useState<CruisesListState>({
    searchQuery: '',
    loadingIds: new Set(),
    cursorStack: [],
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

  const { visibleCount, hiddenCount } = useMemo(() => {
    const allCruises = cruisesConnection.edges.map(e => e.node);
    return {
      visibleCount: allCruises.filter(c => c.isVisible).length,
      hiddenCount: allCruises.filter(c => !c.isVisible).length,
    };
  }, [cruiseFilter, cruisesConnection.total]);

  const startItem = state.currentCursor || cruisesConnection.total === 0 ? (state.cursorStack.length * CRUISES_PER_PAGE) + 1 : 1;
  const endItem = startItem + displayCruises.length - 1;

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
            />
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
