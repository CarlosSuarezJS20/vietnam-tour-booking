import { ReactNode } from "react";

interface IconButtonProps {
  children:     ReactNode;
  onClick?:     () => void;
  className?:   string;
  hoverEffect?: boolean;
  dark?:        boolean;
}

const IconButton = ({ children, onClick, className = "", hoverEffect = true, dark = false }: IconButtonProps) => {
  const colors = dark
    ? `border-gray-300 text-gray-700 ${hoverEffect ? "hover:bg-gray-100" : ""}`
    : `border-white/70 text-white ${hoverEffect ? "hover:bg-white/10" : ""}`;

  return (
    <button
      onClick={onClick}
      className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${colors} ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
