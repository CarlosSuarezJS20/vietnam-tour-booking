'use client';

interface VisibilityToggleProps {
  isVisible: boolean;
  onToggle: () => Promise<any>;
  loading?: boolean;
}

export const VisibilityToggle = ({ isVisible, onToggle, loading }: VisibilityToggleProps) => {
  const buttonText = isVisible ? 'Remove' : 'Show';
  const buttonColor = isVisible ? 'text-[#DC143C]' : 'text-green-600';
  const hoverBg = 'hover:bg-[#f7f5f0]';

  return (
    <button
      onClick={onToggle}
      disabled={loading}
      className={`rounded px-3 py-1 text-sm font-medium ${buttonColor} ${hoverBg} transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? '...' : buttonText}
    </button>
  );
};
