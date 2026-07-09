'use client';

import { useState, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { Tour } from '@/hooks/useAdminTourSearch';

interface ToursSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  searchResults: Tour[];
  onTourClick: (tour: Tour) => void;
}

export const ToursSearchBar = ({ value, onChange, searchResults, onTourClick }: ToursSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTourClick = (tour: Tour) => {
    onTourClick(tour);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#17171799]" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder="Search tours..."
          className="w-full rounded border border-[#17171724] bg-white px-3 py-2 pl-10 text-sm focus:border-[#DC143C] focus:outline-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#17171799] hover:text-[#171717]"
          >
            <FiX className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && value && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 max-h-48 overflow-auto rounded border border-[#17171724] bg-white shadow-lg">
          {searchResults.length > 0 ? (
            searchResults.slice(0, 10).map((tour) => (
              <button
                key={tour.id}
                onClick={() => handleTourClick(tour)}
                className="w-full border-b border-[#17171724] px-4 py-2 text-left text-sm hover:bg-[#f7f5f0] last:border-b-0"
              >
                <div className="font-medium text-[#171717]">{tour.title}</div>
                <div className="text-xs text-[#17171799]">${tour.price.toFixed(2)} • {tour.duration}</div>
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-[#17171799]">No tours found</div>
          )}
        </div>
      )}
    </div>
  );
};
