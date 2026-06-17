"use client";

import { useState, useCallback, useRef } from "react";

const MIN_BOUND = 0;
const MAX_BOUND = 5000;

interface Props {
  minPrice: number | null;
  maxPrice: number | null;
  onChange: (min: number | null, max: number | null) => void;
}

function pct(value: number) {
  return ((value - MIN_BOUND) / (MAX_BOUND - MIN_BOUND)) * 100;
}

export default function PriceRangeSlider({ minPrice, maxPrice, onChange }: Props) {
  const localMin = minPrice ?? MIN_BOUND;
  const localMax = maxPrice ?? MAX_BOUND;

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fire = useCallback((min: number, max: number) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onChange(
        min === MIN_BOUND ? null : min,
        max === MAX_BOUND ? null : max,
      );
    }, 300);
  }, [onChange]);

  const [draft, setDraft] = useState<{ min: number; max: number } | null>(null);
  const displayMin = draft?.min ?? localMin;
  const displayMax = draft?.max ?? localMax;

  const handleMinChange = (v: number) => {
    const clamped = Math.min(v, displayMax - 100);
    setDraft({ min: clamped, max: displayMax });
    fire(clamped, displayMax);
  };

  const handleMaxChange = (v: number) => {
    const clamped = Math.max(v, displayMin + 100);
    setDraft({ min: displayMin, max: clamped });
    fire(displayMin, clamped);
  };

  const minPct = pct(displayMin);
  const maxPct = pct(displayMax);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-gray-500 font-sans">
        <span>${displayMin.toLocaleString()}</span>
        <span>${displayMax.toLocaleString()}</span>
      </div>

      <div className="relative h-5 flex items-center">
        {/* Track */}
        <div className="absolute w-full h-1.5 rounded-full bg-gray-200" />
        {/* Active range */}
        <div
          className="absolute h-1.5 bg-brand rounded-full"
          style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
        />

        {/* Min input */}
        <input
          type="range"
          min={MIN_BOUND}
          max={MAX_BOUND}
          step={50}
          value={displayMin}
          onChange={e => handleMinChange(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: displayMin > MAX_BOUND * 0.9 ? 5 : 3 }}
        />
        {/* Max input */}
        <input
          type="range"
          min={MIN_BOUND}
          max={MAX_BOUND}
          step={50}
          value={displayMax}
          onChange={e => handleMaxChange(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 4 }}
        />

        {/* Visual thumbs */}
        <div
          className="absolute w-4 h-4 bg-brand border-2 border-white rounded-full shadow pointer-events-none"
          style={{ left: `${minPct}%`, transform: "translateX(-50%)", zIndex: 6 }}
        />
        <div
          className="absolute w-4 h-4 bg-brand border-2 border-white rounded-full shadow pointer-events-none"
          style={{ left: `${maxPct}%`, transform: "translateX(-50%)", zIndex: 6 }}
        />
      </div>

      <div className="flex justify-between text-[10px] text-gray-400 font-sans">
        <span>${MIN_BOUND.toLocaleString()}</span>
        <span>${MAX_BOUND.toLocaleString()}</span>
      </div>
    </div>
  );
}
