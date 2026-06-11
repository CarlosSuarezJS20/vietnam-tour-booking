"use client";

import { useGetTourCategoriesQuery } from "@/store/api/graphqlApi";

interface ToursDropdownProps {
  open: boolean;
  onClose: () => void;
}

export default function ToursDropdown({ open, onClose }: ToursDropdownProps) {
  const { data: categories = [], isLoading, isError } = useGetTourCategoriesQuery();

  const itemClass =
    "block px-5 py-2 text-sm font-sans transition-colors";

  return (
    <div
      className={`absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-xl border border-gray-100 border-t-0 py-2 z-40 transition-all duration-200 origin-top ${
        open
          ? "opacity-100 scale-y-100 pointer-events-auto"
          : "opacity-0 scale-y-95 pointer-events-none"
      }`}
      onMouseLeave={onClose}
    >
      {isLoading && (
        <div className="px-5 py-3 space-y-2">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="h-4 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      )}

      {isError && (
        <p className={`${itemClass} text-red-500`}>
          Failed to load tours.
        </p>
      )}

      {categories.map((cat) => (
        <a
          key={cat.id}
          href="#"
          className={`${itemClass} text-gray-600 hover:text-brand hover:bg-gray-50`}
        >
          {cat.label}
        </a>
      ))}
    </div>
  );
}
