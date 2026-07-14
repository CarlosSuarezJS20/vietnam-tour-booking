export const ProductDetailSkeleton = () => (
  <div className="space-y-6">
    {/* Image skeleton */}
    <div className="w-full h-96 bg-[#17171724] rounded animate-pulse" />

    {/* Title and price */}
    <div className="space-y-4">
      <div className="h-8 bg-[#17171724] rounded w-3/4 animate-pulse" />
      <div className="h-6 bg-[#17171724] rounded w-1/4 animate-pulse" />
    </div>

    {/* Description */}
    <div className="space-y-3">
      <div className="h-4 bg-[#17171724] rounded w-full animate-pulse" />
      <div className="h-4 bg-[#17171724] rounded w-full animate-pulse" />
      <div className="h-4 bg-[#17171724] rounded w-2/3 animate-pulse" />
    </div>

    {/* Info sections */}
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="h-4 bg-[#17171724] rounded w-1/2 animate-pulse" />
        <div className="h-3 bg-[#17171724] rounded animate-pulse" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-[#17171724] rounded w-1/2 animate-pulse" />
        <div className="h-3 bg-[#17171724] rounded animate-pulse" />
      </div>
    </div>

    {/* Button skeleton */}
    <div className="h-12 bg-[#17171724] rounded animate-pulse" />
  </div>
);
