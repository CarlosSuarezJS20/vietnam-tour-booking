import { ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "brand" | "white";
  className?: string;
}

const PillButton = ({ children, onClick, variant = "brand", className = "" }: PillButtonProps) => {
  const base = "text-sm font-semibold px-5 py-2 rounded-full whitespace-nowrap transition-colors";
  const variants = {
    brand: "bg-brand text-white hover:bg-brand-dark active:bg-brand-dark active:scale-95",
    white: "bg-white text-gray-800 shadow active:bg-gray-100 active:scale-95",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default PillButton;
