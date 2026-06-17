"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  title:        string;
  children:     React.ReactNode;
  defaultOpen?: boolean;
  badge?:       number;
}

export default function FilterGroup({ title, children, defaultOpen = false, badge }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-800 font-sans">{title}</span>
          {!!badge && (
            <span className="text-[10px] font-bold bg-brand text-white rounded-full px-1.5 py-0.5 leading-none">
              {badge}
            </span>
          )}
        </span>
        <FiChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[500px]" : "max-h-0"}`}
      >
        <div className="px-4 pb-4">{children}</div>
      </div>
    </div>
  );
}
