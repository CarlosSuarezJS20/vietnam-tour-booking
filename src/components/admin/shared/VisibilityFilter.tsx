'use client';

interface VisibilityFilterProps {
  activeFilter: 'ALL' | 'VISIBLE' | 'HIDDEN';
  onFilterChange: (filter: 'ALL' | 'VISIBLE' | 'HIDDEN') => void;
  visibleCount: number;
  hiddenCount: number;
  currentItemCount: number;
  disabled?: boolean;
}

export const VisibilityFilter = ({ activeFilter, onFilterChange, visibleCount, hiddenCount, currentItemCount, disabled = false }: VisibilityFilterProps) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onFilterChange('ALL')}
        disabled={disabled}
        className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
          disabled
            ? 'bg-[#f7f5f0] text-[#17171799] cursor-not-allowed'
            : activeFilter === 'ALL'
            ? 'bg-[#DC143C] text-white'
            : 'bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd]'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('VISIBLE')}
        disabled={disabled}
        className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
          disabled
            ? 'bg-[#f7f5f0] text-[#17171799] cursor-not-allowed'
            : activeFilter === 'VISIBLE'
            ? 'bg-[#DC143C] text-white'
            : 'bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd]'
        }`}
      >
        Visible ({visibleCount})
      </button>
      <button
        onClick={() => onFilterChange('HIDDEN')}
        disabled={disabled}
        className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
          disabled
            ? 'bg-[#f7f5f0] text-[#17171799] cursor-not-allowed'
            : activeFilter === 'HIDDEN'
            ? 'bg-[#DC143C] text-white'
            : 'bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd]'
        }`}
      >
        Hidden ({hiddenCount})
      </button>
    </div>
  );
};
