import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  hoverEffect?: boolean;
}

export default function IconButton({ children, onClick, className = "", hoverEffect = true }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-11 h-11 rounded-full border border-white/70 flex items-center justify-center text-white transition-all ${
        hoverEffect ? "hover:bg-white/10" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
