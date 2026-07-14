"use client";

import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import type { ItineraryDay } from "@/lib/parseItinerary";

interface Props {
  itinerary: string;
}

const ItineraryAccordion = ({ itinerary }: Props) => {
  let days: ItineraryDay[] = [];
  try {
    days = JSON.parse(itinerary);
  } catch {
    days = [];
  }
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  if (days.length === 0) return null;

  const toggle = (i: number) => {
    setOpen(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 pb-14">
      <h2 className="text-2xl font-bold text-brand font-sans mb-8">Itinerary</h2>

      <div className="relative">
        {/* Vertical dotted line */}
        <div className="absolute left-[7px] top-3 bottom-3 border-l-2 border-dotted border-gray-300" />

        <div className="space-y-0">
          {days.map((day, i) => (
            <div key={i} className="relative pl-10">
              {/* Circle bullet */}
              <div className="absolute left-0 top-[14px] w-4 h-4 rounded-full border-2 border-gray-400 bg-white flex-shrink-0" />

              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className="text-sm font-semibold text-gray-900 font-sans pr-4">
                    Day {day.day}: {day.title}
                  </span>
                  <FiChevronUp
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open.has(i) ? "" : "rotate-180"}`}
                  />
                </button>

                {open.has(i) && day.body && (
                  <div className="pb-5">
                    {day.body.split(/\n\n+/).filter(Boolean).map((para, j) => (
                      <p key={j} className="text-sm text-gray-600 font-sans leading-relaxed mb-3 last:mb-0">
                        {para.trim()}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryAccordion;
