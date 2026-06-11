import { ReactNode } from "react";

interface PillTagProps {
  children: ReactNode;
  variant?: "brand" | "outline-white";
  size?: "sm" | "md";
  className?: string;
}

export default function PillTag({ children, variant = "brand", size = "sm", className = "" }: PillTagProps) {
  const base = "inline-flex items-center gap-1.5 font-semibold rounded-full font-sans whitespace-nowrap";
  const sizes = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-[11px] tracking-[0.15em] uppercase px-3 py-1.5",
  };
  const variants = {
    brand: "bg-brand text-white",
    "outline-white": "border border-white/40 text-white",
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
