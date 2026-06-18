"use client";

import { useGetTourCategoriesQuery, useGetRegionsQuery } from "@/graphql/hooks";
import type { SearchFilters } from "@/types/graphql";

interface Props {
  filters:   SearchFilters;
  onChange:  (f: Partial<SearchFilters>) => void;
}

const TYPE_TABS = [
  { value: "all",    label: "All"     },
  { value: "tour",   label: "Tours"   },
  { value: "cruise", label: "Cruises" },
] as const;

const DURATION_OPTIONS = [
  { value: "any",      label: "Any length" },
  { value: "half-day", label: "Half-day"   },
  { value: "1-7",      label: "1–7 days"   },
  { value: "8-14",     label: "8–14 days"  },
  { value: "15+",      label: "15+ days"   },
];

const SearchFiltersBar = ({ filters, onChange }: Props) => {
  const { data: categories } = useGetTourCategoriesQuery();
  const { data: regions }    = useGetRegionsQuery();

  const toggleCategory = (id: string) => {
    const next = filters.categories.includes(id)
      ? filters.categories.filter(c => c !== id)
      : [...filters.categories, id];
    onChange({ categories: next });
  };

  const showTourFilters = filters.type !== "cruise";

  return (
    <div className="border-b border-gray-100 bg-white">
      {/* Type tabs */}
      <div className="flex items-center gap-1 px-4 pt-3 pb-2">
        {TYPE_TABS.map(tab => (
          <button
            key={tab.value}
            onClick={() => onChange({ type: tab.value, categories: [], region: "" })}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors font-sans ${
              filters.type === tab.value
                ? "bg-brand text-white"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}

        {/* Duration picker — always visible */}
        <select
          value={filters.duration}
          onChange={e => onChange({ duration: e.target.value })}
          className="ml-auto text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 outline-none bg-white font-sans cursor-pointer"
        >
          {DURATION_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Tour-only filters: regions + categories */}
      {showTourFilters && (
        <div className="px-4 pb-3 flex flex-wrap gap-1.5">
          {regions.map(r => (
            <button
              key={r.key}
              onClick={() => onChange({ region: filters.region === r.key ? "" : r.key })}
              className={`px-3 py-1 text-[11px] font-medium rounded-full border transition-colors font-sans ${
                filters.region === r.key
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-gray-200 text-gray-500 hover:border-gray-400"
              }`}
            >
              {r.label}
            </button>
          ))}

          <div className="w-px h-5 bg-gray-200 self-center mx-0.5" />

          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`px-3 py-1 text-[11px] font-medium rounded-full border transition-colors font-sans ${
                filters.categories.includes(cat.id)
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-gray-200 text-gray-500 hover:border-gray-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchFiltersBar;
