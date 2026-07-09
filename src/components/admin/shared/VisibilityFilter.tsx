'use client';

interface VisibilityFilterProps {
  activeFilter: 'ALL' | 'VISIBLE' | 'HIDDEN';
  onFilterChange: (filter: 'ALL' | 'VISIBLE' | 'HIDDEN') => void;
  visibleCount: number;
  hiddenCount: number;
}

export const VisibilityFilter = ({ activeFilter, onFilterChange, visibleCount, hiddenCount }: VisibilityFilterProps) => {
  const filters = [
    { label: 'All', value: 'ALL' as const },
    { label: `Visible (${visibleCount})`, value: 'VISIBLE' as const },
    { label: `Hidden (${hiddenCount})`, value: 'HIDDEN' as const },
  ];

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
            activeFilter === filter.value
              ? 'bg-[#DC143C] text-white'
              : 'bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd]'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
