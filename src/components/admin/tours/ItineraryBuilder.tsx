"use client";

import { useState, useCallback, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { ItineraryDayCard } from "./ItineraryDayCard";
import type { ItineraryDay } from "@/types/itinerary";

interface ItineraryBuilderProps {
  value?: ItineraryDay[];
  onChange?: (days: ItineraryDay[]) => void;
}

export const ItineraryBuilder = ({
  value = [],
  onChange,
}: ItineraryBuilderProps) => {
  const [days, setDays] = useState<ItineraryDay[]>(
    value.length > 0
      ? value
      : [
          {
            id: "1",
            day: 1,
            activity: "",
            description: "",
            duration: "",
          },
        ]
  );

  const [expandedDays, setExpandedDays] = useState<Set<string>>(
    new Set(["1"])
  );

  const handleAddDay = useCallback(() => {
    const newId = Math.random().toString(36).slice(2, 11);
    const nextDay = days.length + 1;
    const newDay: ItineraryDay = {
      id: newId,
      day: nextDay,
      activity: "",
      description: "",
      duration: "",
    };
    const updated = [...days, newDay];
    setDays(updated);
    setExpandedDays((prev) => new Set([...prev, newId]));
    onChange?.(updated);
  }, [days, onChange]);

  const handleDeleteDay = useCallback(
    (id: string) => {
      const updated = days.filter((d) => d.id !== id).map((d, i) => ({
        ...d,
        day: i + 1,
      }));
      setDays(updated);
      setExpandedDays((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      onChange?.(updated);
    },
    [days, onChange]
  );

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const isLastDayValid = useCallback(() => {
    if (days.length === 0) return true;
    const lastDay = days[days.length - 1];
    return lastDay.activity.trim() !== '' && lastDay.description.trim() !== '';
  }, [days]);

  const handleUpdateDay = useCallback(
    (id: string, field: keyof ItineraryDay, value: string) => {
      const updated = days.map((d) =>
        d.id === id ? { ...d, [field]: value } : d
      );
      setDays(updated);
      onChange?.(updated);
    },
    [days, onChange]
  );

  return (
    <div className="space-y-4">
      {/* Label */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Daily Itinerary
        </label>

        {/* Day Cards */}
        <div className="space-y-3">
          {days.map((day) => (
            <ItineraryDayCard
              key={day.id}
              day={day}
              dayNumber={day.day}
              isExpanded={expandedDays.has(day.id)}
              onToggleExpand={() => handleToggleExpand(day.id)}
              onDelete={() => handleDeleteDay(day.id)}
              onUpdate={(field, value) =>
                handleUpdateDay(day.id, field, value)
              }
            />
          ))}
        </div>

        {/* Add Day Button */}
        <button
          onClick={handleAddDay}
          disabled={!isLastDayValid()}
          className={`mt-4 w-full flex items-center justify-center gap-2 rounded border-2 border-dashed px-4 py-3 text-sm font-medium transition-colors ${
            isLastDayValid()
              ? 'border-[#17171724] text-gray-600 hover:border-[#DC143C] hover:text-[#DC143C] hover:bg-red-50'
              : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
          }`}
          title={!isLastDayValid() ? 'Please fill in activity and description for the current day' : ''}
        >
          <FiPlus className="w-4 h-4" />
          <span>Add Day</span>
        </button>
      </div>
    </div>
  );
};
