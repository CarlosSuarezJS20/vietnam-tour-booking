interface NewBadgeProps {
  className?: string;
  size?: 'sm' | 'lg';
}

export const NewBadge = ({ className = '', size = 'sm' }: NewBadgeProps) => {
  const sizeClass = size === 'lg'
    ? 'text-[11px] md:text-[12px] px-4 md:px-5 2xl:px-7 pr-5 md:pr-6 2xl:pr-8 py-1.5 md:py-2'
    : 'text-[9px] px-2.5 pr-3.5 py-1';

  return (
    <span
      className={`bg-green-500 text-white font-bold font-sans uppercase tracking-wide shadow-md ${sizeClass} ${className}`}
      style={{
        clipPath: 'polygon(0 50%, 6px 0, 100% 0, 100% 100%, 6px 100%)',
      }}
    >
      Just In
    </span>
  );
};
