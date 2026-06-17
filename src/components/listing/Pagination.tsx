"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  page:       number;
  totalPages: number;
  onPage:     (p: number) => void;
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end   = Math.min(total - 1, current + 1);
  for (let p = start; p <= end; p++) pages.push(p);

  if (current < total - 2) pages.push("...");
  pages.push(total);

  return pages;
}

export default function Pagination({ page, totalPages, onPage }: Props) {
  if (totalPages <= 1) return null;

  const numbers = getPageNumbers(page, totalPages);

  const btnBase  = "w-9 h-9 flex items-center justify-center text-sm font-sans transition-colors";
  const active   = "bg-gray-900 text-white font-semibold";
  const inactive = "text-gray-600 hover:bg-gray-100 border border-gray-200";
  const disabled = "text-gray-300 cursor-not-allowed border border-gray-100";

  return (
    <div className="flex items-center justify-center gap-1 mt-10">
      <button
        onClick={() => onPage(page - 1)}
        disabled={page <= 1}
        className={`${btnBase} ${page <= 1 ? disabled : inactive}`}
        aria-label="Previous page"
      >
        <FiChevronLeft className="w-4 h-4" />
      </button>

      {numbers.map((n, i) =>
        n === "..." ? (
          <span key={`ellipsis-${i}`} className={`${btnBase} text-gray-400`}>
            …
          </span>
        ) : (
          <button
            key={n}
            onClick={() => onPage(n)}
            className={`${btnBase} ${n === page ? active : inactive}`}
            aria-label={`Page ${n}`}
          >
            {n}
          </button>
        )
      )}

      <button
        onClick={() => onPage(page + 1)}
        disabled={page >= totalPages}
        className={`${btnBase} ${page >= totalPages ? disabled : inactive}`}
        aria-label="Next page"
      >
        <FiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
