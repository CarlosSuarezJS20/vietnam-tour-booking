"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiSearch, FiArrowUpRight, FiShoppingCart } from "react-icons/fi";
import { navItems } from "@/data/navigation";
import ToursDropdown from "@/components/navigation/ToursDropdown";
import DestinationsMegaMenu from "@/components/navigation/DestinationsMegaMenu";
import MobileMenu from "@/components/navigation/MobileMenu";
import IconButton from "@/components/ui/IconButton";
import PillButton from "@/components/ui/PillButton";

export default function Navbar() {
  const [toursOpen, setToursOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setToursOpen(false);
    setDestinationsOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-7">
        <Image src="/travel-vietnam-logo-white.svg" alt="Travel Vietnam" width={155} height={46} priority />

        {/* Desktop pill */}
        <div className="hidden md:flex items-center bg-white rounded-full shadow-lg px-1.5 py-1.5 relative">
          {navItems.map((item, i) => {
            const isTours = item.label === "Tours & Activities";
            const isDestinations = item.label === "Destinations";
            const isActive = (isTours && toursOpen) || (isDestinations && destinationsOpen);

            return (
              <div key={item.label} className="flex items-center relative">
                <button
                  className={`flex items-center gap-1 px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors font-sans ${
                    isActive ? "text-brand" : "text-gray-700 hover:text-black"
                  }`}
                  onMouseEnter={() => {
                    if (isTours) { setToursOpen(true); setDestinationsOpen(false); }
                    if (isDestinations) { setDestinationsOpen(true); setToursOpen(false); }
                  }}
                  onClick={() => {
                    if (isTours) { setToursOpen((o) => !o); setDestinationsOpen(false); }
                    if (isDestinations) { setDestinationsOpen((o) => !o); setToursOpen(false); }
                  }}
                >
                  {item.label}
                  {item.chevron && (
                    <FiChevronDown className={`w-3 h-3 opacity-50 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
                  )}
                </button>
                {i < navItems.length - 1 && <div className="w-px h-4 bg-gray-200" />}
                {isTours && <ToursDropdown open={toursOpen} onClose={() => setToursOpen(false)} />}
              </div>
            );
          })}
          <div className="w-px h-4 bg-gray-200 mx-1" />
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors">
            <FiSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-white text-sm font-medium transition-all group-hover:opacity-70 group-hover:tracking-wider font-sans">
              Contact Us
            </span>
            <IconButton className="group-hover:bg-white/20 group-hover:border-white">
              <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:scale-110" />
            </IconButton>
          </div>
          <IconButton>
            <FiShoppingCart className="w-5 h-5" />
          </IconButton>
          <PillButton variant="brand">My Bookings</PillButton>
        </div>

        {/* Mobile right actions */}
        <div className="md:hidden flex items-center gap-2">
          <IconButton hoverEffect={false}>
            <FiShoppingCart className="w-5 h-5" />
          </IconButton>
          <PillButton variant="brand">My Bookings</PillButton>
          <PillButton variant="white" onClick={() => setMobileOpen(true)}>Menu</PillButton>
        </div>
      </nav>

      <DestinationsMegaMenu open={destinationsOpen} onClose={() => setDestinationsOpen(false)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {(toursOpen || destinationsOpen) && (
        <div className="absolute inset-0 z-10" onClick={closeAll} />
      )}
    </>
  );
}
