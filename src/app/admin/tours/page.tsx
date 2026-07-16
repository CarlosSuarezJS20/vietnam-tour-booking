'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import { useVisibilityFilter } from '@/contexts/VisibilityFilterContext';
import { useGetAllToursQuery, useGetFeaturedTourQuery, useToggleTourVisibilityMutation, useSetAllToursVisibilityMutation, useSetFeaturedTourMutation } from '@/graphql/hooks';
import { useAdminTourSearch } from '@/hooks/useAdminTourSearch';
import { useAllToursForSearch } from '@/hooks/useAllToursForSearch';
import { ToursTable } from '@/components/admin/tours/ToursTable';
import { ToursSearchBar } from '@/components/admin/tours/ToursSearchBar';
import { VisibilityFilter } from '@/components/admin/shared/VisibilityFilter';
import { BulkVisibilityButton } from '@/components/admin/shared/BulkVisibilityButton';
import { EditDrawer } from '@/components/admin/shared/EditDrawer';
import { TourCreateDrawer } from '@/components/admin/tours/TourCreateDrawer';
import { TOURS_PER_PAGE } from '@/lib/pagination';
import { LoadingTableSkeleton } from '@/components/loading';
import { ErrorPage, ErrorAlert } from '@/components/error';
import { isNewProduct } from '@/lib/newProductHelpers';
import type { Tour } from '@/hooks/useAdminTourSearch';

interface ToursListState {
  searchQuery: string;
  currentCursor?: string;
  selectedTourId?: string;
  loadingIds: Set<string>;
  featuredLoadingIds: Set<string>;
  cursorStack: string[];
  visibleCountCache: number;
  hiddenCountCache: number;
  drawerOpen: boolean;
  drawerTour?: Tour;
  createDrawerOpen: boolean;
  error?: string;
  showFeaturedOnly: boolean;
}

const ToursPage = () => {
  const { tourFilter, setTourFilter } = useVisibilityFilter();
  const [state, setState] = useState<ToursListState>({
    searchQuery: '',
    loadingIds: new Set(),
    featuredLoadingIds: new Set(),
    cursorStack: [],
    visibleCountCache: 0,
    hiddenCountCache: 0,
    drawerOpen: false,
    drawerTour: undefined,
    createDrawerOpen: false,
    showFeaturedOnly: false,
  });

  const { data: featuredTourData, loading: featuredLoading } = useGetFeaturedTourQuery();
  const { data: toursConnection, loading: toursLoading, error } = useGetAllToursQuery(tourFilter, TOURS_PER_PAGE, state.currentCursor);

  const loading = state.showFeaturedOnly ? featuredLoading : toursLoading;
  const tours = useMemo(() => {
    if (state.showFeaturedOnly && featuredTourData) {
      return [{
        ...featuredTourData,
        itinerary: '',
        createdAt: new Date().toISOString(),
        onSale: false,
        isVisible: true,
        saleDiscountPercentage: undefined,
      } as Tour];
    }
    return toursConnection.edges.map(e => e.node) as Tour[];
  }, [state.showFeaturedOnly, featuredTourData, toursConnection]);
  const { tours: allToursForSearch } = useAllToursForSearch(tourFilter);
  const { toggle: toggleTourVisibility } = useToggleTourVisibilityMutation();
  const { setVisibility: setAllToursVisibility } = useSetAllToursVisibilityMutation();
  const { setFeaturedTour } = useSetFeaturedTourMutation();

  const { filteredTours: searchResults } = useAdminTourSearch(allToursForSearch, state.searchQuery);

  const unsortedDisplayTours = state.selectedTourId
    ? allToursForSearch.filter((t: Tour) => t.id === state.selectedTourId)
    : tours;

  const displayTours = useMemo(() => {
    const newTours = unsortedDisplayTours.filter(t => isNewProduct(t.createdAt));
    const regularTours = unsortedDisplayTours.filter(t => !isNewProduct(t.createdAt));
    return [...newTours, ...regularTours];
  }, [unsortedDisplayTours]);

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

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      currentCursor: undefined,
      cursorStack: [],
      selectedTourId: undefined,
      visibleCountCache: 0,
      hiddenCountCache: 0,
    }));
  }, [tourFilter]);

  useEffect(() => {
    if (state.visibleCountCache === 0 && state.hiddenCountCache === 0) {
      setState(prev => ({
        ...prev,
        visibleCountCache: toursConnection.visibleCount,
        hiddenCountCache: toursConnection.hiddenCount,
      }));
    }
  }, [toursConnection.visibleCount, toursConnection.hiddenCount]);

  const handleToggleVisibility = async (id: string) => {
    setState((prev) => ({
      ...prev,
      loadingIds: new Set([...prev.loadingIds, id]),
      visibleCountCache: 0,
      hiddenCountCache: 0,
    }));

    try {
      await toggleTourVisibility(id);
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
      await setAllToursVisibility(visible);
      setState((prev) => ({ ...prev, error: undefined }));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update visibility';
      setState((prev) => ({ ...prev, error: message }));
    }
  };

  const handleSetFeatured = async (id: string) => {
    setState((prev) => ({
      ...prev,
      featuredLoadingIds: new Set([...prev.featuredLoadingIds, id]),
    }));
    try {
      await setFeaturedTour(id);
    } finally {
      setState((prev) => {
        const newFeaturedLoadingIds = new Set(prev.featuredLoadingIds);
        newFeaturedLoadingIds.delete(id);
        return { ...prev, featuredLoadingIds: newFeaturedLoadingIds };
      });
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

  const handleTourCreated = () => {
    setState((prev) => ({
      ...prev,
      currentCursor: undefined,
      cursorStack: [],
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

  const visibleCount = state.visibleCountCache !== 0 ? state.visibleCountCache : toursConnection.visibleCount;
  const hiddenCount = state.hiddenCountCache || toursConnection.hiddenCount;

  const pageNumber = state.cursorStack.length + 1;
  const startItem = (pageNumber - 1) * TOURS_PER_PAGE + 1;
  const endItem = Math.min(startItem + tours.length - 1, toursConnection.total);

  if (error) return <ErrorPage title="Failed to load tours" message="Could not fetch the tours list. Please try again." />;

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
          <h1 className="text-2xl font-semibold text-[#171717]">Tours</h1>
          <p className="mt-1 text-sm text-[#17171799]">
            {state.selectedTourId ? 'Selected tour' : state.showFeaturedOnly ? 'Featured tour' : `All (${toursConnection.total})`}
          </p>
        </div>
        <div className="flex items-center gap-4 pr-4">
          <button
            onClick={handleOpenCreateDrawer}
            className="rounded bg-[#DC143C] text-white px-4 py-2 hover:bg-[#b81132] transition-colors flex-shrink-0 flex items-center gap-2"
            aria-label="Create new tour"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm font-medium">Create Tour</span>
          </button>
          {state.selectedTourId && (
            <button
              onClick={handleClearSelection}
              className="rounded px-4 py-2 text-sm text-[#DC143C] hover:bg-[#f7f5f0] transition-colors"
            >
              Clear selection
            </button>
          )}
        </div>
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
          onFilterChange={setTourFilter}
          visibleCount={visibleCount}
          hiddenCount={hiddenCount}
          currentItemCount={displayTours.length}
          disabled={state.showFeaturedOnly}
        />
        {!state.showFeaturedOnly && tourFilter !== 'ALL' && ((tourFilter === 'VISIBLE' && visibleCount > 1) || (tourFilter === 'HIDDEN' && hiddenCount > 1)) && !state.drawerOpen && (
          <BulkVisibilityButton
            filter={tourFilter}
            onToggleBulk={handleBulkVisibility}
          />
        )}
      </div>

      <div className="rounded border border-[#17171724] overflow-hidden">
        {loading ? (
          <div className="p-4">
            <LoadingTableSkeleton />
          </div>
        ) : displayTours.length > 0 ? (
          <>
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#17171724] bg-[#f7f5f0]">
              <span className="text-sm text-[#17171799]">
                {state.selectedTourId ? 'Selected tour' : state.showFeaturedOnly ? 'Featured tour' : `Showing ${startItem}-${endItem} of ${toursConnection.total}`}
              </span>
              {!state.selectedTourId && (
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => setState((prev) => ({ ...prev, showFeaturedOnly: !prev.showFeaturedOnly }))}
                    className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                      state.showFeaturedOnly
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-white text-[#171717] hover:bg-[#f7f5f0]'
                    }`}
                  >
                    ★ Featured
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevPage}
                      disabled={!toursConnection.pageInfo.hasPreviousPage || state.showFeaturedOnly}
                      className="text-[#171717] disabled:text-[#17171799] disabled:cursor-not-allowed hover:text-[#DC143C] transition-colors"
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={handleNextPage}
                      disabled={!toursConnection.pageInfo.hasNextPage || state.showFeaturedOnly}
                      className="text-[#171717] disabled:text-[#17171799] disabled:cursor-not-allowed hover:text-[#DC143C] transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
            </div>
            <ToursTable
              tours={displayTours}
              onToggleVisibility={handleToggleVisibility}
              onSetFeatured={handleSetFeatured}
              loadingIds={state.loadingIds}
              featuredLoadingIds={state.featuredLoadingIds}
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

      <TourCreateDrawer
        isOpen={state.createDrawerOpen}
        onClose={handleCloseCreateDrawer}
        onTourCreated={handleTourCreated}
      />
    </div>
  );
};

export default ToursPage;
