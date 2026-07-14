'use client';

import { ButtonSpinner } from '@/components/loading';

interface VisibilityToggleProps {
  isVisible: boolean;
  onToggle: () => Promise<any>;
  loading?: boolean;
}

export const VisibilityToggle = ({ isVisible, onToggle, loading }: VisibilityToggleProps) => {
  const buttonText = isVisible ? 'Visible' : 'Hidden';
  const bgColor = isVisible ? 'bg-green-100' : 'bg-red-100';
  const textColor = isVisible ? 'text-green-700' : 'text-red-700';

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      disabled={loading}
      className={`rounded px-3 py-1 text-sm font-medium ${bgColor} ${textColor} hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? <ButtonSpinner /> : buttonText}
    </button>
  );
};
