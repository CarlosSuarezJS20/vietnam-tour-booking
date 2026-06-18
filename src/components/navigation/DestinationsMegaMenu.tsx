"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { useGetRegionsQuery } from "@/graphql/hooks";

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DestinationsMegaMenu = ({ onMouseEnter, onMouseLeave }: Props) => {
  const { data: regions = [], loading, error } = useGetRegionsQuery();
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const current = regions.find((r) => r.key === activeKey) ?? regions[0];

  return (
    <div className="flex h-[420px]" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* Left — regions */}
      <div className="w-72 bg-surface flex flex-col justify-center px-10 py-10 flex-shrink-0">
        <h2 className="text-2xl font-semibold leading-tight mb-8 text-gray-900 font-display">
          Where are you<br />traveling?
        </h2>

        {error && (
          <p className="text-sm text-red-500 font-sans">Failed to load destinations.</p>
        )}

        {loading && (
          <ul className="flex flex-col gap-1">
            {[1, 2, 3].map((n) => (
              <li key={n} className="h-9 bg-gray-100 rounded animate-pulse" />
            ))}
          </ul>
        )}

        {!loading && !error && (
          <ul className="flex flex-col gap-1">
            {regions.map((r) => (
              <li key={r.key}>
                <button
                  onClick={() => setActiveKey(r.key)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors border-l-2 font-sans ${
                    current?.key === r.key
                      ? "border-brand text-brand bg-white"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-white/60"
                  }`}
                >
                  {r.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Middle — cities */}
      <div className="w-[600px] bg-white px-8 py-10 flex flex-col justify-between flex-shrink-0">
        {loading && (
          <div className="space-y-3">
            <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-4 bg-gray-100 rounded animate-pulse" />
              ))}
            </div>
          </div>
        )}

        {current && (
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-5 font-sans">
              Popular Cities
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {current.cities.map((city) => (
                <Link
                  key={city.id}
                  href={`/tours?cities=${city.id}`}
                  className="text-sm text-gray-700 hover:text-brand font-medium flex items-center gap-2 transition-colors font-sans"
                >
                  <FiMapPin className="w-3.5 h-3.5 text-gray-400" />
                  {city.name}
                </Link>
              ))}
            </div>
            <Link
              href={`/tours?regions=${current.key}`}
              className="text-sm text-gray-500 hover:text-brand underline underline-offset-2 transition-colors font-sans"
            >
              Discover all {current.label} tours
            </Link>
          </div>
        )}
      </div>

      {/* Right — image */}
      <div className="flex-1 relative overflow-hidden bg-gray-100">
        {loading && <div className="absolute inset-0 animate-pulse bg-gray-200" />}

        {regions.map((r) => (
          <div
            key={r.key}
            className={`absolute inset-0 transition-opacity duration-500 ${
              current?.key === r.key ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={r.image} alt={r.label} fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-3 leading-tight font-display">
                {r.label}
              </h3>
              <Link
                href={`/tours?regions=${r.key}`}
                className="flex items-center gap-1.5 text-white text-xs font-medium border border-white/60 px-3 py-1.5 hover:bg-white/10 transition-colors font-sans"
              >
                Explore all regions <FiArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationsMegaMenu;
