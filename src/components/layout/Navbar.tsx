"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiSearch, FiArrowUpRight, FiX } from "react-icons/fi";
import { navItems } from "@/data/navigation";
import ToursDropdown from "@/components/navigation/ToursDropdown";
import DestinationsMegaMenu from "@/components/navigation/DestinationsMegaMenu";
import MobileMenu from "@/components/navigation/MobileMenu";
import IconButton from "@/components/ui/IconButton";
import CartIconButton from "@/components/cart/CartIconButton";
import PillButton from "@/components/ui/PillButton";
import SearchDropdown from "@/components/search/SearchDropdown";
import { useStickyNav } from "@/hooks/useStickyNav";

const Navbar = () => {
  const [toursOpen, setToursOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const mobileSearchBarRef = useRef<HTMLDivElement>(null);
  const destCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pastHero, atAbout } = useStickyNav();

  const openDestinations = () => {
    if (destCloseTimer.current) clearTimeout(destCloseTimer.current);
    setDestinationsOpen(true);
    setToursOpen(false);
  };

  const scheduleCloseDestinations = () => {
    destCloseTimer.current = setTimeout(() => setDestinationsOpen(false), 120);
  };

  const closeAll = () => {
    setToursOpen(false);
    setDestinationsOpen(false);
  };

  const openSearch = () => {
    closeAll();
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchValue("");
  };

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
        setDestinationsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const handleMouseDown = (e: MouseEvent) => {
      const inPill = pillRef.current?.contains(e.target as Node);
      const inMobile = mobileSearchBarRef.current?.contains(e.target as Node);
      if (!inPill && !inMobile) closeSearch();
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [searchOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (toursOpen) setToursOpen(false);
      if (destinationsOpen) setDestinationsOpen(false);
      if (searchOpen) closeSearch();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toursOpen, destinationsOpen, searchOpen]);

  return (
    <>
      {/*
        Layer 3 — destinations panel.
        Outer container is fixed at top-0 with overflow-hidden — clips the panel
        while it's in the -translate-y-full (hidden) state so it never overlaps
        the navbar. The 102px spacer is transparent, so the logo always shows
        through. White background only starts below the navbar.
      */}
      {/* Backdrop — fades in behind the mega menu */}
      <div
        className={`fixed inset-0 z-[35] backdrop-blur-sm bg-black/30 transition-opacity duration-300 pointer-events-none ${
          destinationsOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="fixed top-0 left-0 right-0 z-[40] overflow-hidden pointer-events-none">
        <div
          className={`transition-transform duration-300 ease-out ${
            destinationsOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full"
          }`}
        >
          <div className="h-[102px] bg-gray-900" />
          <div className="bg-white">
            <DestinationsMegaMenu
              onMouseEnter={openDestinations}
              onMouseLeave={scheduleCloseDestinations}
            />
          </div>
        </div>
      </div>

      {/* Layer 4 — navbar, always above everything */}
      <nav className={`fixed top-0 left-0 right-0 z-[50] flex items-center justify-between px-6 md:px-10 py-7 transition-all duration-200 ${atAbout ? "-translate-y-full" : "translate-y-0"}`}>
        <Image src={pastHero ? "/travel-vietnam-logo-dark.svg" : "/travel-vietnam-logo-white.svg"} alt="Travel Vietnam" width={155} height={46} priority className="hidden md:block" />
        <Image src={pastHero ? "/travel-vietnam-icon-dark.svg" : "/travel-vietnam-icon-white.svg"} alt="Travel Vietnam" width={36} height={36} priority className="md:hidden" />

        {/* Desktop pill — pushed to the right */}
        <div ref={pillRef} className="hidden md:flex items-center bg-white rounded-full shadow-lg px-1.5 py-1.5 relative ml-auto mr-6" style={{ minWidth: 480 }}>
          {/* Search dropdown — slides down from below the pill */}
          {searchOpen && (
            <SearchDropdown query={searchValue} onClose={closeSearch} />
          )}

          {/* Original nav content */}
          <div className={`flex items-center w-full transition-all duration-200 ${searchOpen ? "opacity-0 -translate-x-2 pointer-events-none" : "opacity-100 translate-x-0"}`}>
            {navItems.map((item, i) => {
              const isTours        = item.label === "Tours & Activities";
              const isDestinations = item.label === "Destinations";
              const isDeals        = item.label === "Deals";
              const isActive = (isTours && toursOpen) || (isDestinations && destinationsOpen);

              return (
                <div key={item.label} className="flex items-center relative">
                  {isTours ? (
                    <Link
                      href="/tours"
                      className="flex items-center gap-1 px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors font-sans text-gray-700 hover:text-brand hover:bg-gray-50 rounded-full"
                      onMouseEnter={() => { setToursOpen(true); setDestinationsOpen(false); }}
                    >
                      {item.label}
                      <FiChevronDown className="w-3 h-3 opacity-50" />
                    </Link>
                  ) : isDeals ? (
                    <Link
                      href="/tours?deals=true"
                      className="flex items-center gap-1 px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors font-sans text-gray-700 hover:text-brand hover:bg-gray-50 rounded-full"
                    >
                      {item.label}
                    </Link>
                  ) : (
                  <button
                    className={`flex items-center gap-1 px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors font-sans ${
                      isActive ? "text-brand" : "text-gray-700 hover:text-brand hover:bg-gray-50 rounded-full"
                    }`}
                    onMouseEnter={() => {
                      if (isDestinations) openDestinations();
                    }}
                    onMouseLeave={() => {
                      if (isDestinations) scheduleCloseDestinations();
                    }}
                    onClick={() => {
                      if (isDestinations) { setDestinationsOpen((o) => !o); setToursOpen(false); }
                    }}
                  >
                    {item.label}
                    {item.chevron && (
                      <FiChevronDown className={`w-3 h-3 opacity-50 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
                    )}
                  </button>
                  )}
                  {i < navItems.length - 1 && <div className="w-px h-4 bg-gray-200" />}
                  {isTours && <ToursDropdown open={toursOpen} onClose={() => setToursOpen(false)} />}
                </div>
              );
            })}
            <div className="w-px h-4 bg-gray-200 mx-1" />
            <IconButton hoverEffect={false} onClick={openSearch} className="border-0 bg-gray-300 text-gray-600 w-9 h-9 hover:scale-110 transition-transform">
              <FiSearch className="w-5 h-5" />
            </IconButton>
          </div>

          {/* Search bar */}
          <div className={`absolute inset-0 flex items-center px-4 gap-3 transition-all duration-200 ${searchOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`}>
            <FiSearch className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search destinations, tours…"
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent font-sans"
            />
            <button onClick={closeSearch} className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-colors">
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className={`text-sm font-medium transition-all group-hover:opacity-70 group-hover:tracking-wider font-sans ${pastHero ? "text-gray-800" : "text-white"}`}>
              Contact Us
            </span>
            <IconButton dark={pastHero} className={!pastHero ? "group-hover:bg-white/20 group-hover:border-white" : ""}>
              <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:scale-110" />
            </IconButton>
          </div>
          <CartIconButton dark={pastHero} />
          <PillButton variant="brand">My Bookings</PillButton>
        </div>

        {/* Mobile right actions */}
        <div className="md:hidden flex items-center gap-2">
          <IconButton hoverEffect={false} dark={pastHero} onClick={openSearch}>
            <FiSearch className="w-5 h-5" />
          </IconButton>
          <CartIconButton dark={pastHero} hoverEffect={false} />
          <PillButton variant="brand">My Bookings</PillButton>
          <PillButton variant="white" onClick={() => setMobileOpen(true)}>Menu</PillButton>
        </div>
      </nav>

      {/* Mobile search overlay */}
      {searchOpen && (
        <div className="md:hidden fixed top-[92px] left-0 right-0 z-[45] px-4">
          <div ref={mobileSearchBarRef} className="relative">
            <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100">
              <FiSearch className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search destinations, tours…"
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent font-sans"
              />
              <button onClick={closeSearch} className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-colors">
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <SearchDropdown query={searchValue} onClose={closeSearch} />
          </div>
        </div>
      )}

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {toursOpen && (
        <div className="fixed inset-0 z-[25]" onClick={() => setToursOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
