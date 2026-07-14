export const LoadingTableSkeleton = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex gap-4 p-4 bg-[#f7f5f0] rounded border border-[#17171724]">
        <div className="w-10 h-10 rounded bg-[#17171724] animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-[#17171724] rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-[#17171724] rounded w-1/2 animate-pulse" />
        </div>
        <div className="w-16 h-4 bg-[#17171724] rounded animate-pulse" />
      </div>
    ))}
  </div>
);
