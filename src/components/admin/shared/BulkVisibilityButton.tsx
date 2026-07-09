'use client';

interface BulkVisibilityButtonProps {
  filter: 'ALL' | 'VISIBLE' | 'HIDDEN';
  onToggleBulk: (visible: boolean) => Promise<any>;
  loading?: boolean;
}

export const BulkVisibilityButton = ({ filter, onToggleBulk, loading }: BulkVisibilityButtonProps) => {
  // When filter is VISIBLE → show "Remove All" button (hides all)
  // When filter is HIDDEN → show "All Visible" button (shows all)
  // When filter is ALL → disable button (mixed states)

  const isDisabled = filter === 'ALL';
  const shouldShowAll = filter === 'HIDDEN';
  const buttonText = shouldShowAll ? 'All Visible' : 'Remove All';
  const buttonColor = shouldShowAll ? 'text-green-600' : 'text-[#DC143C]';

  const handleClick = () => {
    onToggleBulk(shouldShowAll); // true for "All Visible", false for "Remove All"
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled || loading}
      className={`rounded px-4 py-2 text-sm font-medium ${buttonColor} hover:bg-[#f7f5f0] transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      {loading ? '...' : buttonText}
    </button>
  );
};
