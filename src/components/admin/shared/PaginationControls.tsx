import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}: PaginationControlsProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-between border-t border-[#17171724] px-4 py-3">
      <div className="text-sm text-[#17171799]">
        {itemsPerPage && totalItems ? `Showing ${((currentPage - 1) * itemsPerPage) + 1}–${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems}` : ''}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex items-center gap-1 rounded px-3 py-2 text-sm transition-colors disabled:opacity-40 hover:bg-[#f7f5f0]"
        >
          <FiChevronLeft className="h-4 w-4" />
          Prev
        </button>

        <span className="text-sm text-[#171717]">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 rounded px-3 py-2 text-sm transition-colors disabled:opacity-40 hover:bg-[#f7f5f0]"
        >
          Next
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
