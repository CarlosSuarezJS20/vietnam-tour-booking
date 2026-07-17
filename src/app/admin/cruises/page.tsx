'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import { useVisibilityFilter } from '@/contexts/VisibilityFilterContext';
import { useGetAllCruisesQuery, useToggleCruiseVisibilityMutation, useSetAllCruisesVisibilityMutation } from '@/graphql/hooks';
import { useAdminCruiseSearch } from '@/hooks/useAdminCruiseSearch';
import { useAllCruisesForSearch } from '@/hooks/useAllCruisesForSearch';
import { CruisesTable } from '@/components/admin/cruises/CruisesTable';
import { CruisesSearchBar } from '@/components/admin/cruises/CruisesSearchBar';
import { CruiseCreateDrawer } from '@/components/admin/cruises/CruiseCreateDrawer';
import { CruiseEditDrawer } from '@/components/admin/cruises/CruiseEditDrawer';
import { VisibilityFilter } from '@/components/admin/shared/VisibilityFilter';
import { BulkVisibilityButton } from '@/components/admin/shared/BulkVisibilityButton';
import { EditDrawer } from '@/components/admin/shared/EditDrawer';
import { CRUISES_PER_PAGE } from '@/lib/pagination';
import { LoadingTableSkeleton } from '@/components/loading';
import { ErrorPage, ErrorAlert } from '@/components/error';
import { isNewProduct } from '@/lib/newProductHelpers';
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
  createDrawerOpen: boolean;
  editDrawerOpen: boolean;
  editCruiseId?: string;
  error?: string;
}

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
    createDrawerOpen: false,
    editDrawerOpen: false,
  });

  const { data: cruisesConnection, loading, error } = useGetAllCruisesQuery(cruiseFilter, CRUISES_PER_PAGE, state.currentCursor);
  const cruises = cruisesConnection.edges.map(e => e.node) as Cruise[];
  const { cruises: allCruisesForSearch } = useAllCruisesForSearch(cruiseFilter);
  const { toggle: toggleCruiseVisibility } = useToggleCruiseVisibilityMutation();
  const { setVisibility: setAllCruisesVisibility } = useSetAllCruisesVisibilityMutation();

  const { filteredCruises: searchResults } = useAdminCruiseSearch(allCruisesForSearch, state.searchQuery);

  const unsortedDisplayCruises = state.selectedCruiseId
    ? allCruisesForSearch.filter((c: Cruise) => c.id === state.selectedCruiseId)
    : cruises;

  const displayCruises = useMemo(() => {
    const newCruises = unsortedDisplayCruises.filter(c => isNewProduct(c.createdAt));
    const regularCruises = unsortedDisplayCruises.filter(c => !isNewProduct(c.createdAt));
    return [...newCruises, ...regularCruises];
  }, [unsortedDisplayCruises]);

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

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      currentCursor: undefined,
      cursorStack: [],
      selectedCruiseId: undefined,
      visibleCountCache: 0,
      hiddenCountCache: 0,
    }));
  }, [cruiseFilter]);

  useEffect(() => {
    if (state.visibleCountCache === 0 && state.hiddenCountCache === 0) {
      setState(prev => ({
        ...prev,
        visibleCountCache: cruisesConnection.visibleCount,
        hiddenCountCache: cruisesConnection.hiddenCount,
      }));
    }
  }, [cruisesConnection.visibleCount, cruisesConnection.hiddenCount]);

  const handleToggleVisibility = async (id: string) => {
    setState((prev) => ({
      ...prev,
      loadingIds: new Set([...prev.loadingIds, id]),
      visibleCountCache: 0,
      hiddenCountCache: 0,
    }));

    try {
      await toggleCruiseVisibility(id);
      setState((prev) => ({ ...prev, error: undefined }));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update visibility';
      setState((prev) => ({ ...prev, error: message }));
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
      setState((prev) => ({ ...prev, error: undefined }));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update visibility';
      setState((prev) => ({ ...prev, error: message }));
    }
  };

  const handleOpenCreateDrawer = () => {
    setState((prev) => ({
      ...prev,
      createDrawerOpen: true,
    }));
  };

  const handleCloseCreateDrawer = () => {
    setState((prev) => ({
      ...prev,
      createDrawerOpen: false,
    }));
  };

  const handleCloseEditDrawer = () => {
    setState((prev) => ({
      ...prev,
      editDrawerOpen: false,
      editCruiseId: undefined,
    }));
  };

  const handleCruiseCreated = () => {
    setState((prev) => ({
      ...prev,
      currentCursor: undefined,
      cursorStack: [],
    }));
  };

  const handleEdit = (cruiseId: string) => {
    setState((prev) => ({
      ...prev,
      editDrawerOpen: true,
      editCruiseId: cruiseId,
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

  const visibleCount = state.visibleCountCache !== 0 ? state.visibleCountCache : cruisesConnection.visibleCount;
  const hiddenCount = state.hiddenCountCache || cruisesConnection.hiddenCount;

  const pageNumber = state.cursorStack.length + 1;
  const startItem = (pageNumber - 1) * CRUISES_PER_PAGE + 1;
  const endItem = Math.min(startItem + cruises.length - 1, cruisesConnection.total);

  if (error) return <ErrorPage title="Failed to load cruises" message="Could not fetch the cruises list. Please try again." />;

  return (
    <div className="space-y-6">
      {state.error && (
        <ErrorAlert
          title="Error"
          message={state.error}
          isDismissible
        />
      )}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#171717]">Cruises</h1>
          <p className="mt-1 text-sm text-[#17171799]">
            {state.selectedCruiseId ? 'Selected cruise' : `All (${cruisesConnection.total})`}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleOpenCreateDrawer}
            className="rounded bg-[#DC143C] text-white px-4 py-2 hover:bg-[#b81132] transition-colors flex-shrink-0 flex items-center gap-2"
            aria-label="Create new cruise"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm font-medium">Create Cruise</span>
          </button>
          {state.selectedCruiseId && (
            <button
              onClick={handleClearSelection}
              className="rounded px-4 py-2 text-sm text-[#DC143C] hover:bg-[#f7f5f0] transition-colors"
            >
              Clear selection
            </button>
          )}
        </div>
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
          onFilterChange={setCruiseFilter}
          visibleCount={visibleCount}
          hiddenCount={hiddenCount}
          currentItemCount={displayCruises.length}
        />
        {cruiseFilter !== 'ALL' && ((cruiseFilter === 'VISIBLE' && visibleCount > 1) || (cruiseFilter === 'HIDDEN' && hiddenCount > 1)) && !state.drawerOpen && (
          <BulkVisibilityButton
            filter={cruiseFilter}
            onToggleBulk={handleBulkVisibility}
          />
        )}
      </div>

      <div className="rounded border border-[#17171724] overflow-hidden">
        {loading ? (
          <div className="p-4">
            <LoadingTableSkeleton />
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
              onEdit={handleEdit}
            />
          </>
        ) : (
          <div className="px-4 py-8 text-center text-sm text-[#17171799]">
            No cruises found
          </div>
        )}
      </div>

      <CruiseCreateDrawer
        isOpen={state.createDrawerOpen}
        onClose={handleCloseCreateDrawer}
        onCruiseCreated={handleCruiseCreated}
      />

      {state.editCruiseId && (
        <CruiseEditDrawer
          cruiseId={state.editCruiseId}
          isOpen={state.editDrawerOpen}
          onClose={handleCloseEditDrawer}
        />
      )}

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
