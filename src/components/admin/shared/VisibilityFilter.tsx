'use client';

interface VisibilityFilterProps {
  activeFilter: 'ALL' | 'VISIBLE' | 'HIDDEN';
  onFilterChange: (filter: 'ALL' | 'VISIBLE' | 'HIDDEN') => void;
  visibleCount: number;
  hiddenCount: number;
  currentItemCount: number;
}

export const VisibilityFilter = ({ activeFilter, onFilterChange, visibleCount, hiddenCount, currentItemCount }: VisibilityFilterProps) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onFilterChange('ALL')}
        className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
          activeFilter === 'ALL'
            ? 'bg-[#DC143C] text-white'
            : 'bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd]'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('VISIBLE')}
        className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
          activeFilter === 'VISIBLE'
            ? 'bg-[#DC143C] text-white'
            : 'bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd]'
        }`}
      >
        Visible ({visibleCount})
      </button>
      <button
        onClick={() => onFilterChange('HIDDEN')}
        className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
          activeFilter === 'HIDDEN'
            ? 'bg-[#DC143C] text-white'
            : 'bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd]'
        }`}
      >
        Hidden ({hiddenCount})
      </button>
    </div>
  );
};
