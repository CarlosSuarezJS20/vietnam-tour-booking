import { useState } from "react";
import { useGetRegionsQuery } from "@/graphql/hooks";
import type { FormData } from "../BookingForm";

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void }

const StepDestination = ({ formData, onChange }: Props) => {
  const { data: regions = [], loading } = useGetRegionsQuery();
  const [activeRegion, setActiveRegion] = useState(formData.region || regions[0]?.key || "");

  const current = regions.find((r) => r.key === activeRegion) ?? regions[0];

  const selectRegion = (key: string) => {
    setActiveRegion(key);
    onChange({ region: key, cities: [] });
  };

  const toggleCity = (id: string) => {
    const next = formData.cities.includes(id)
      ? formData.cities.filter((c) => c !== id)
      : [...formData.cities, id];
    onChange({ cities: next });
  };

  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">Where would you like to go?</h3>
      <p className="text-gray-400 text-sm font-sans mb-6">Pick a region then choose your cities.</p>

      {loading && <div className="h-20 bg-gray-100 rounded-xl animate-pulse" />}

      {!loading && (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => selectRegion(r.key)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-sans border transition-colors ${
                  activeRegion === r.key
                    ? "bg-brand border-brand text-white"
                    : "border-gray-300 text-gray-500 hover:border-gray-400"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {current && (
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-sans mb-3">Cities in {current.label}</p>
              <div className="flex flex-wrap gap-2">
                {current.cities.map((city) => {
                  const selected = formData.cities.includes(city.id);
                  return (
                    <button
                      key={city.id}
                      onClick={() => toggleCity(city.id)}
                      className={`px-4 py-1.5 rounded-full text-sm font-sans border transition-colors ${
                        selected
                          ? "bg-brand/10 border-brand text-brand"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {city.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default StepDestination;
