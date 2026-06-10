"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMapPin, FiArrowUpRight } from "react-icons/fi";

interface City {
  id: string;
  name: string;
}

interface Region {
  id: string;
  key: string;
  label: string;
  image: string;
  cities: City[];
}

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const QUERY = `
  query {
    regions {
      id
      key
      label
      image
      cities {
        id
        name
      }
    }
  }
`;

export default function DestinationsMegaMenu({ onMouseEnter, onMouseLeave }: Props) {
  const [regions, setRegions] = useState<Region[]>([]);
  const [activeKey, setActiveKey] = useState<string>("north");

  useEffect(() => {
    fetch("/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
    })
      .then((res) => res.json())
      .then((data) => {
        const fetched: Region[] = data.data.regions;
        setRegions(fetched);
        if (fetched.length > 0) setActiveKey(fetched[0].key);
      });
  }, []);

  const current = regions.find((r) => r.key === activeKey);

  if (!current) return null;

  return (
    <div className="flex h-[420px]" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* Left — regions */}
      <div className="w-72 bg-surface flex flex-col justify-center px-10 py-10 flex-shrink-0">
        <h2 className="text-2xl font-semibold leading-tight mb-8 text-gray-900 font-display">
          Where are you<br />traveling?
        </h2>
        <ul className="flex flex-col gap-1">
          {regions.map((r) => (
            <li key={r.key}>
              <button
                onClick={() => setActiveKey(r.key)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors border-l-2 font-sans ${
                  activeKey === r.key
                    ? "border-brand text-brand bg-white"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle — cities */}
      <div className="w-[600px] bg-white px-8 py-10 flex flex-col justify-between flex-shrink-0">
        <div>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-5 font-sans">Popular Cities</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
            {current.cities.map((city) => (
              <a
                key={city.id}
                href="#"
                className="text-sm text-gray-700 hover:text-brand font-medium flex items-center gap-2 transition-colors font-sans"
              >
                <FiMapPin className="w-3.5 h-3.5 text-gray-400" />
                {city.name}
              </a>
            ))}
          </div>
        </div>
        <a href="#" className="text-sm text-gray-500 hover:text-brand underline underline-offset-2 transition-colors font-sans">
          Discover all {current.label} tours
        </a>
      </div>

      {/* Right — image */}
      <div className="flex-1 relative overflow-hidden">
        {regions.map((r) => (
          <div
            key={r.key}
            className={`absolute inset-0 transition-opacity duration-500 ${activeKey === r.key ? "opacity-100" : "opacity-0"}`}
          >
            <Image src={r.image} alt={r.label} fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-3 leading-tight font-display">{r.label}</h3>
              <button className="flex items-center gap-1.5 text-white text-xs font-medium border border-white/60 px-3 py-1.5 hover:bg-white/10 transition-colors font-sans">
                Explore all regions <FiArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
