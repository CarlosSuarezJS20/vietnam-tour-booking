export const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 rounded-full border-2 border-[#17171724]" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#DC143C] animate-spin" />
    </div>
  </div>
);
