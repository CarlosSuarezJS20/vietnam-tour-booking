import { tourLinks } from "@/data/navigation";

interface ToursDropdownProps {
  open: boolean;
  onClose: () => void;
}

export default function ToursDropdown({ open, onClose }: ToursDropdownProps) {
  return (
    <div
      className={`absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-xl border border-gray-100 border-t-0 py-2 z-40 transition-all duration-200 origin-top ${
        open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
      }`}
      onMouseLeave={onClose}
    >
      {tourLinks.map((link) => (
        <a
          key={link}
          href="#"
          className="block px-5 py-2 text-sm text-gray-600 hover:text-brand hover:bg-gray-50 transition-colors font-sans"
        >
          {link}
        </a>
      ))}
    </div>
  );
}
