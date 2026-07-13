'use client';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-white border border-[#DC143C] text-[#171717] text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-md">
        {text}
      </div>
    </div>
  );
};
