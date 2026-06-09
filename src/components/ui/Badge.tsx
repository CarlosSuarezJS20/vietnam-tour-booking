interface BadgeProps {
  label: string;
  variant?: "difficulty" | "duration" | "default";
}

const variantClasses: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  moderate: "bg-yellow-100 text-yellow-700",
  challenging: "bg-red-100 text-red-700",
  duration: "bg-blue-100 text-blue-700",
  default: "bg-gray-100 text-gray-700",
};

export default function Badge({ label, variant = "default" }: BadgeProps) {
  const cls =
    variant === "difficulty"
      ? variantClasses[label.toLowerCase()] ?? variantClasses.default
      : variantClasses[variant];

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${cls}`}>
      {label}
    </span>
  );
}
