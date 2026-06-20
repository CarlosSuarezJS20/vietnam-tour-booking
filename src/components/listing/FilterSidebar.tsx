"use client";

import { FiX } from "react-icons/fi";
import FilterGroup from "./FilterGroup";
import DestinationsFilter from "./DestinationsFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import { useGetTourCategoriesQuery } from "@/graphql/hooks";
import type { ListingFilters } from "@/types/graphql";

const PRODUCT_TYPES = [
  { value: "tour",   label: "Tours" },
  { value: "cruise", label: "Cruises" },
];

interface Props {
  filters:           ListingFilters;
  activeCount:       number;
  toggleArrayFilter: (key: string, value: string) => void;
  setFilter:         (key: string, value: string | null) => void;
  clearAll:          () => void;
  isOpen:            boolean;
  onClose:           () => void;
}

const FilterSidebar = ({
  filters,
  activeCount,
  toggleArrayFilter,
  setFilter,
  clearAll,
  isOpen,
  onClose,
}: Props) => {
  const { data: categories = [] } = useGetTourCategoriesQuery();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[280px] bg-white overflow-y-auto transition-transform duration-300
        md:static md:translate-x-0 md:z-auto md:w-[260px] md:flex-shrink-0 md:sticky md:top-[65px] md:self-start md:h-[calc(100vh-65px)] md:border-r md:border-gray-100
        ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <span className="text-sm font-bold text-gray-900 font-sans">
            Filters
            {activeCount > 0 && (
              <span className="ml-2 text-[10px] font-bold bg-brand text-white rounded-full px-1.5 py-0.5">
                {activeCount}
              </span>
            )}
          </span>
          <div className="flex items-center gap-3">
            {activeCount > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-brand hover:underline active:opacity-60 transition-opacity font-sans"
              >
                Reset all
              </button>
            )}
            <button onClick={onClose} className="md:hidden text-gray-400 hover:text-gray-600">
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Type */}
        <FilterGroup title="Product Type" defaultOpen badge={filters.types.length || undefined}>
          <div className="space-y-2">
            {PRODUCT_TYPES.map(t => (
              <label key={t.value} className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.types.includes(t.value)}
                  onChange={() => toggleArrayFilter("types", t.value)}
                  className="w-3.5 h-3.5 accent-brand"
                />
                <span className="text-xs text-gray-700 font-sans">{t.label}</span>
              </label>
            ))}
          </div>
        </FilterGroup>

        {/* Tour Types / Categories */}
        <FilterGroup
          title="Tour Types"
          defaultOpen={filters.categories.length > 0}
          badge={filters.categories.length || undefined}
        >
          <div className="space-y-2">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.slug)}
                  onChange={() => toggleArrayFilter("categories", cat.slug)}
                  className="w-3.5 h-3.5 accent-brand"
                />
                <span className="text-xs text-gray-700 font-sans">{cat.label}</span>
              </label>
            ))}
          </div>
        </FilterGroup>

        {/* Destinations */}
        <FilterGroup
          title="Destinations"
          defaultOpen
          badge={(filters.regions.length + filters.cities.length) || undefined}
        >
          <DestinationsFilter
            selectedRegions={filters.regions}
            selectedCities={filters.cities}
            onToggleRegion={key => toggleArrayFilter("regions", key)}
            onToggleCity={id => toggleArrayFilter("cities", id)}
          />
        </FilterGroup>

        {/* Price Range */}
        <FilterGroup
          title="Price Range"
          badge={(filters.minPrice != null || filters.maxPrice != null) ? 1 : undefined}
        >
          <PriceRangeSlider
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onChange={(min, max) => {
              setFilter("minPrice", min != null ? String(min) : null);
              setFilter("maxPrice", max != null ? String(max) : null);
            }}
          />
        </FilterGroup>

        {/* Deals */}
        <FilterGroup title="Deals" badge={filters.deals ? 1 : undefined}>
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.deals}
              onChange={() => setFilter("deals", filters.deals ? null : "true")}
              className="w-3.5 h-3.5 accent-brand"
            />
            <span className="text-xs text-gray-700 font-sans">Deals only</span>
          </label>
          <p className="text-[10px] text-gray-400 mt-1.5 font-sans">Deal filtering coming soon.</p>
        </FilterGroup>
      </aside>
    </>
  );
}

export default FilterSidebar;
