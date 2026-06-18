"use client";

import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { FiX, FiCheck, FiInfo } from "react-icons/fi";
import { parsePriceValue } from "@/lib/tourParsers";
import { cartDrawerOpenVar } from "@/lib/cartDrawerVar";
import { useAddToCartMutation } from "@/graphql/hooks";
import type { ProductDetail } from "@/types/graphql";

interface Props {
  isOpen:       boolean;
  onClose:      () => void;
  product:      ProductDetail;
  productType:  "tour" | "cruise";
}

const TIME_SLOTS = ["08:00", "10:00", "12:00", "14:00", "15:30", "17:00"];

const BookingModal = ({ isOpen, onClose, product, productType }: Props) => {
  const today          = new Date();
  const basePrice      = parsePriceValue(product.price);
  const effectivePrice = product.onSale && product.saleDiscountPercentage
    ? Math.floor(basePrice * (1 - product.saleDiscountPercentage / 100))
    : basePrice;
  const reducedPrice   = Math.floor(effectivePrice * 0.8);

  const [selected,  setSelected]  = useState<Date>(today);
  const [selTime,   setSelTime]   = useState<string>("15:30");
  const [adults,    setAdults]    = useState(1);
  const [youth,     setYouth]     = useState(0);
  const [children,  setChildren]  = useState(0);
  const [pickUp,    setPickUp]    = useState<"Yes" | "No">("No");
  const { addToCart } = useAddToCartMutation();

  const total = effectivePrice * adults + reducedPrice * youth + reducedPrice * children;

  const changeAdults   = (n: number) => setAdults(a => Math.max(1, a + n));
  const changeYouth    = (n: number) => setYouth(y  => Math.max(0, Math.min(adults * 40, y + n)));
  const changeChildren = (n: number) => setChildren(c => Math.max(0, Math.min(adults * 2, c + n)));

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else        document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full md:max-w-3xl h-[92vh] md:h-auto md:max-h-[90vh] overflow-y-auto shadow-2xl rounded-t-2xl md:rounded-none">
        {/* Header */}
        <div className="flex items-center justify-between px-5 md:px-8 pt-6 md:pt-8 pb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 font-sans">{product.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row border-t border-gray-100">
          {/* Left panel */}
          <div className="flex-1 px-5 md:px-8 py-6 md:border-r border-gray-100 space-y-6">

            {/* Calendar */}
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(d) => d && setSelected(d)}
              disabled={{ before: today }}
            />

            {/* Pick a time */}
            <div>
              <p className="text-sm font-semibold text-gray-900 font-sans mb-2">Pick a time</p>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelTime(t)}
                    className={`text-xs font-semibold font-sans px-3 py-1.5 rounded transition-colors ${
                      t === selTime ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Pick your party */}
            <div>
              <p className="text-sm font-semibold text-gray-900 font-sans mb-3">Pick your party</p>
              <div className="space-y-3">
                {([
                  { label: "Adults",   sub: "16 - 99 years", val: adults,   change: changeAdults,   tooltip: null },
                  { label: "Youth",    sub: "6 - 15 years",  val: youth,    change: changeYouth,    tooltip: "Ages 6–15 receive 20% off the adult price. Max 40 per adult." },
                  { label: "Children", sub: "1 - 5 years",   val: children, change: changeChildren, tooltip: "Ages 1–5 receive 20% off the adult price. Max 2 per adult." },
                ] as const).map(({ label, sub, val, change, tooltip }) => (
                  <div key={label} className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm text-gray-900 font-sans">{label}</p>
                        {tooltip && (
                          <div className="relative group">
                            <FiInfo className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                            <div className="absolute left-5 top-0 z-20 hidden group-hover:block bg-gray-900 text-white text-xs font-sans px-2.5 py-2 rounded w-44 leading-snug">
                              {tooltip}
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 font-sans">{sub}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => change(-1)}
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                      >
                        ←
                      </button>
                      <span className="w-4 text-center text-sm font-semibold text-gray-900 font-sans">{val}</span>
                      <button
                        onClick={() => change(1)}
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                      >
                        →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pick Up */}
            <div>
              <p className="text-sm font-semibold text-gray-900 font-sans mb-1">Pick Up</p>
              <p className="text-xs text-gray-400 font-sans mb-2">Do you need a pick up?</p>
              <div className="flex gap-3">
                {(["Yes", "No"] as const).map(opt => (
                  <button
                    key={opt}
                    onClick={() => setPickUp(opt)}
                    className={`flex-1 py-2 text-sm font-semibold font-sans border transition-colors ${
                      pickUp === opt
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Meeting points */}
            <div>
              <p className="text-sm font-semibold text-gray-900 font-sans mb-1">Meeting points</p>
              <p className="text-xs text-gray-500 font-sans mb-2">Please meet us at any of these meeting points:</p>
              <p className="text-xs text-red-500 font-sans">■ Asia Eyes Travel Office – Hanoi Old Quarter</p>
            </div>
          </div>

          {/* Right panel — price breakdown */}
          <div className="w-full md:w-64 md:flex-shrink-0 px-5 md:px-6 py-6 border-t md:border-t-0 border-gray-100 flex flex-col">
            <p className="text-sm font-bold text-gray-900 font-sans mb-4">Price breakdown</p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm font-sans text-gray-700">
                <span>{adults} × Adults</span>
                <span>${(effectivePrice * adults).toLocaleString()}</span>
              </div>
              {youth > 0 && (
                <div className="flex justify-between text-sm font-sans text-gray-700">
                  <span>{youth} × Youth <span className="text-xs text-gray-400">(20% off)</span></span>
                  <span>${(reducedPrice * youth).toLocaleString()}</span>
                </div>
              )}
              {children > 0 && (
                <div className="flex justify-between text-sm font-sans text-gray-700">
                  <span>{children} × Children <span className="text-xs text-gray-400">(20% off)</span></span>
                  <span>${(reducedPrice * children).toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="border-t border-brand pt-3 mb-5">
              <div className="flex justify-between">
                <span className="text-sm font-bold text-gray-900 font-sans">Total price</span>
                <span className="text-sm font-bold text-gray-900 font-sans">${total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={async () => {
                const dateStr = selected.toLocaleDateString("en-US", {
                  month: "long", day: "numeric", year: "numeric",
                });
                await addToCart({
                  productId:   product.id,
                  productType,
                  date:        dateStr,
                  time:        selTime,
                  partySize:   adults + youth + children,
                  price:       total,
                });
                onClose();
                cartDrawerOpenVar(true);
              }}
              className="w-full bg-brand text-white font-bold text-sm font-sans py-3 hover:bg-brand/90 transition-colors mb-5"
            >
              Add to Cart
            </button>

            <div className="space-y-1.5 mb-4">
              <div className="flex items-center gap-2">
                <FiCheck className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                <span className="text-xs text-gray-600 font-sans">Free cancellation*</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                <span className="text-xs text-gray-600 font-sans">No booking fees</span>
              </div>
            </div>

            <p className="text-[10px] text-brand font-sans cursor-pointer hover:underline">
              *According to our cancellation policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
