"use client";

import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useGetRegionsQuery } from "@/graphql/hooks";

interface Props {
  selectedRegions: string[];
  selectedCities:  string[];
  onToggleRegion:  (key: string) => void;
  onToggleCity:    (id: string) => void;
}

const DestinationsFilter = ({
  selectedRegions,
  selectedCities,
  onToggleRegion,
  onToggleCity,
}: Props) => {
  const { data: regions = [], loading } = useGetRegionsQuery();
  const [expandedRegions, setExpandedRegions] = useState<Set<string>>(new Set());

  const toggleExpand = (key: string) => {
    setExpandedRegions(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  if (loading) {
    return (
      <div className="space-y-2">
        {[1, 2, 3].map(n => (
          <div key={n} className="h-5 bg-gray-100 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      {regions.map(region => {
        const isRegionSelected  = selectedRegions.includes(region.key);
        const expanded          = expandedRegions.has(region.key);
        const activeCityCount   = region.cities.filter(c => selectedCities.includes(c.id)).length;

        return (
          <div key={region.key}>
            <div className="flex items-center gap-2 py-1.5">
              <input
                type="checkbox"
                id={`region-${region.key}`}
                checked={isRegionSelected}
                onChange={() => onToggleRegion(region.key)}
                className="w-3.5 h-3.5 accent-brand flex-shrink-0 cursor-pointer"
              />
              <label
                htmlFor={`region-${region.key}`}
                className="flex-1 text-xs text-gray-700 font-sans cursor-pointer select-none"
              >
                {region.label}
                {activeCityCount > 0 && (
                  <span className="ml-1 text-brand font-semibold">({activeCityCount})</span>
                )}
              </label>
              <button
                onClick={() => toggleExpand(region.key)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-0.5"
                aria-label={expanded ? "Collapse" : "Expand"}
              >
                <FiChevronRight className={`w-3 h-3 transition-transform duration-150 ${expanded ? "rotate-90" : ""}`} />
              </button>
            </div>

            {expanded && (
              <div className="ml-5 mb-1 space-y-0.5">
                {region.cities.map(city => (
                  <div key={city.id} className="flex items-center gap-2 py-1">
                    <input
                      type="checkbox"
                      id={`city-${city.id}`}
                      checked={selectedCities.includes(city.id)}
                      onChange={() => onToggleCity(city.id)}
                      className="w-3 h-3 accent-brand flex-shrink-0 cursor-pointer"
                    />
                    <label
                      htmlFor={`city-${city.id}`}
                      className="text-xs text-gray-600 font-sans cursor-pointer select-none"
                    >
                      {city.name}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DestinationsFilter;
