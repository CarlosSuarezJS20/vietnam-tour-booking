export const ProductDetailSkeleton = () => (
  <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-65px)]">
    {/* Image skeleton — full width on mobile, half on desktop */}
    <div className="relative w-full h-[56vw] md:h-auto md:w-1/2 md:sticky md:top-[65px] md:h-[calc(100vh-65px)] flex-shrink-0 bg-gray-200 animate-pulse" />

    {/* Details panel skeleton */}
    <div className="w-full md:w-1/2 px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20 2xl:px-24 2xl:py-24 bg-white space-y-6">
      {/* Categories skeleton */}
      <div className="flex gap-2">
        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
      </div>

      {/* Title skeleton */}
      <div className="space-y-3">
        <div className="h-8 bg-gray-200 rounded w-4/5 animate-pulse" />
        <div className="h-8 bg-gray-200 rounded w-3/5 animate-pulse" />
      </div>

      {/* Meta section skeleton */}
      <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-6 border-t border-b border-gray-100 py-6 lg:py-8">
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-32 animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-40 animate-pulse" />
        </div>
        <div className="col-span-2 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          <div className="flex gap-2">
            <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />
            <div className="h-8 bg-gray-200 rounded-full w-28 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Description skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
      </div>
    </div>
  </div>
);
