"use client";

import { FiChevronUp, FiTrash2 } from "react-icons/fi";
import type { ItineraryDay } from "@/types/itinerary";

interface ItineraryDayCardProps {
  day: ItineraryDay;
  dayNumber: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onDelete: () => void;
  onUpdate: (field: keyof ItineraryDay, value: string) => void;
}

export const ItineraryDayCard = ({
  day,
  dayNumber,
  isExpanded,
  onToggleExpand,
  onDelete,
  onUpdate,
}: ItineraryDayCardProps) => {
  const displayActivity = day.activity || `Day ${dayNumber}`;

  return (
    <div className="border border-[#17171724] rounded-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggleExpand}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-[#f7f5f0] transition-colors text-left"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <FiChevronUp
            className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
              isExpanded ? "" : "rotate-180"
            }`}
          />
          <span className="text-sm font-semibold text-gray-900">
            Day {dayNumber}: {displayActivity}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors flex-shrink-0"
          aria-label="Delete day"
        >
          <FiTrash2 className="w-4 h-4" />
        </button>
      </button>

      {/* Body */}
      {isExpanded && (
        <div className="px-4 py-4 bg-white border-t border-[#17171724] space-y-4">
          {/* Time */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Time
            </label>
            <input
              type="text"
              value={day.time}
              onChange={(e) => onUpdate("time", e.target.value)}
              placeholder="09:00 AM"
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
            />
          </div>

          {/* Activity */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Activity
            </label>
            <input
              type="text"
              value={day.activity}
              onChange={(e) => onUpdate("activity", e.target.value)}
              placeholder="e.g., Hiking to peak"
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Location
            </label>
            <input
              type="text"
              value={day.location}
              onChange={(e) => onUpdate("location", e.target.value)}
              placeholder="e.g., Mountain Peak"
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Duration
            </label>
            <input
              type="text"
              value={day.duration}
              onChange={(e) => onUpdate("duration", e.target.value)}
              placeholder="e.g., 2 hours"
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Description
            </label>
            <textarea
              value={day.description}
              onChange={(e) => onUpdate("description", e.target.value)}
              placeholder="Enter detailed description for this day..."
              rows={4}
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none resize-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};
