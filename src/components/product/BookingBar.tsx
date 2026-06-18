"use client";

import { useState } from "react";
import { FiCalendar, FiUser, FiCheck } from "react-icons/fi";
import BookingModal from "./BookingModal";
import type { ProductDetail } from "@/types/graphql";

interface Props {
  product:     ProductDetail;
  productType: "tour" | "cruise";
}

const BookingBar = ({ product, productType }: Props) => {
  const [open, setOpen] = useState(false);

  const today = new Date();
  const dateLabel = today.toLocaleDateString("en-GB", {
    weekday: "short",
    day:     "numeric",
    month:   "short",
  });

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex items-stretch">

          {/* When — hidden on mobile */}
          <button
            onClick={() => setOpen(true)}
            className="hidden md:flex items-center gap-3 px-8 py-5 border-r border-gray-200 min-w-[220px] hover:bg-gray-50 transition-colors text-left"
          >
            <FiCalendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-sans">When</p>
              <p className="text-sm font-semibold text-gray-900 font-sans">{dateLabel}</p>
            </div>
          </button>

          {/* Guests — hidden on mobile */}
          <button
            onClick={() => setOpen(true)}
            className="hidden md:flex items-center gap-3 px-8 py-5 border-r border-gray-200 min-w-[160px] hover:bg-gray-50 transition-colors text-left"
          >
            <FiUser className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-sans">Guests</p>
              <p className="text-sm font-semibold text-gray-900 font-sans">1 Guest</p>
            </div>
          </button>

          {/* Trust marks — hidden on mobile */}
          <div className="hidden md:flex flex-col gap-1 px-8 py-5">
            <div className="flex items-center gap-2">
              <FiCheck className="w-4 h-4 text-brand flex-shrink-0" />
              <span className="text-sm text-gray-600 font-sans">Free Cancellation*</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="w-4 h-4 text-brand flex-shrink-0" />
              <span className="text-sm text-gray-600 font-sans">No Booking Fees</span>
            </div>
          </div>

          {/* Mobile compact summary */}
          <button
            onClick={() => setOpen(true)}
            className="flex md:hidden items-center gap-3 flex-1 px-4 py-4 text-left"
          >
            <FiCalendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-sans">{dateLabel} · 1 Guest</p>
              <p className="text-[10px] text-gray-400 font-sans">Tap to select date & guests</p>
            </div>
          </button>

          {/* Book Now */}
          <button
            onClick={() => setOpen(true)}
            className="ml-auto bg-brand text-white font-bold text-sm md:text-base font-sans px-6 md:px-14 py-4 md:py-5 hover:bg-brand/90 transition-colors whitespace-nowrap"
          >
            Book Now
          </button>
        </div>
      </div>

      <BookingModal isOpen={open} onClose={() => setOpen(false)} product={product} productType={productType} />
    </>
  );
};

export default BookingBar;
