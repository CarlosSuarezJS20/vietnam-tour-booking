"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useGetTourCategoriesQuery, useGetRegionsQuery } from "@/graphql/hooks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const [toursOpen, setToursOpen]     = useState(false);
  const [destOpen, setDestOpen]       = useState(false);
  const [openRegions, setOpenRegions] = useState<Record<string, boolean>>({});

  const { data: categories = [], loading: catsLoading, error: catsError } = useGetTourCategoriesQuery();
  const { data: regions = [],    loading: regsLoading, error: regsError } = useGetRegionsQuery();

  const loading = catsLoading || regsLoading;
  const error   = catsError   || regsError;

  const toggleRegion = (key: string) =>
    setOpenRegions((prev) => ({ ...prev, [key]: !prev[key] }));

  const linkClass = "block text-white text-3xl font-semibold py-4 border-b border-white/10 font-display";

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, #1e3a5f 0%, #0f1e3a 70%, #060d1f 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-7">
        <Link href="/" onClick={onClose}>
          <Image
            src="/travel-vietnam-logo-white.svg"
            alt="Travel Vietnam"
            width={140}
            height={42}
          />
        </Link>
        <button
          onClick={onClose}
          className="bg-white text-gray-800 w-9 h-9 rounded-full flex items-center justify-center"
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable nav */}
      <div className="overflow-y-auto h-[calc(100vh-88px)] px-8 py-6">
        <Link href="/" onClick={onClose} className={linkClass}>
          Home
        </Link>

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4 py-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-8 bg-white/10 rounded animate-pulse" />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <p className="py-4 text-white/60 text-sm font-sans">
            Failed to load navigation. Please refresh.
          </p>
        )}

        {/* Tours accordion */}
        {!loading && !error && (
          <div className="border-b border-white/10">
            <button
              className="w-full flex items-center justify-between text-white text-3xl font-semibold py-4 font-display"
              onClick={() => setToursOpen((o) => !o)}
            >
              Tours
              <FiChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  toursOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                toursOpen ? "max-h-[600px] mb-4" : "max-h-0"
              }`}
            >
              <Link
                href="/tours"
                onClick={onClose}
                className="block pl-4 py-2.5 text-white/70 hover:text-white text-base transition-colors font-sans"
              >
                All Tours
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/tours?categories=${cat.slug}`}
                  onClick={onClose}
                  className="block pl-4 py-2.5 text-white/70 hover:text-white text-base transition-colors font-sans"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Destinations accordion */}
        {!loading && !error && (
          <div className="border-b border-white/10">
            <button
              className="w-full flex items-center justify-between text-white text-3xl font-semibold py-4 font-display"
              onClick={() => setDestOpen((o) => !o)}
            >
              Destinations
              <FiChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  destOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                destOpen ? "max-h-[800px] mb-4" : "max-h-0"
              }`}
            >
              {regions.map((r) => (
                <div key={r.key}>
                  <button
                    className="w-full flex items-center justify-between pl-4 py-2.5 text-white/80 hover:text-white text-lg font-medium transition-colors font-sans"
                    onClick={() => toggleRegion(r.key)}
                  >
                    {r.label}
                    <FiChevronDown
                      className={`w-4 h-4 mr-1 transition-transform duration-300 ${
                        openRegions[r.key] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openRegions[r.key] ? "max-h-64" : "max-h-0"
                    }`}
                  >
                    {r.cities.map((city) => (
                      <Link
                        key={city.id}
                        href={`/tours?cities=${city.id}`}
                        onClick={onClose}
                        className="block pl-8 py-2 text-white/50 hover:text-white text-sm transition-colors font-sans"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pl-4 pt-3 pb-2 flex flex-col gap-2">
                <Link
                  href="/tours"
                  onClick={onClose}
                  className="text-white/60 text-sm underline underline-offset-2 hover:text-white transition-colors font-sans"
                >
                  View all destinations
                </Link>
              </div>
            </div>
          </div>
        )}

        <Link href="/tours?deals=true" onClick={onClose} className={linkClass}>
          Deals
        </Link>
        <a href="/#about-section" onClick={onClose} className={linkClass}>
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
