"use client";

import { useEffect, useState } from "react";

interface TourCategory {
  id: string;
  slug: string;
  label: string;
}

interface ToursDropdownProps {
  open: boolean;
  onClose: () => void;
}

const QUERY = `
  query {
    tourCategories {
      id
      slug
      label
    }
  }
`;

export default function ToursDropdown({ open, onClose }: ToursDropdownProps) {
  const [categories, setCategories] = useState<TourCategory[]>([]);

  useEffect(() => {
    fetch("/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
    })
      .then((res) => res.json())
      .then((data) => setCategories(data.data.tourCategories));
  }, []);

  return (
    <div
      className={`absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-xl border border-gray-100 border-t-0 py-2 z-40 transition-all duration-200 origin-top ${
        open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
      }`}
      onMouseLeave={onClose}
    >
      {categories.map((cat) => (
        <a
          key={cat.id}
          href="#"
          className="block px-5 py-2 text-sm text-gray-600 hover:text-brand hover:bg-gray-50 transition-colors font-sans"
        >
          {cat.label}
        </a>
      ))}
    </div>
  );
}
