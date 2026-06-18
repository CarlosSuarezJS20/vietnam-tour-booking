"use client";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import type { ListingProduct } from "@/types/graphql";

interface Props {
  items:      ListingProduct[];
  total:      number;
  totalPages: number;
  page:       number;
  loading:    boolean;
  onPage:     (p: number) => void;
  onClear:    () => void;
}

const ResultsGrid = ({
  items,
  total,
  totalPages,
  page,
  loading,
  onPage,
  onClear,
}: Props) => {
  return (
    <div className="flex-1 px-6 py-8">
      {/* Count */}
      <p className="text-sm text-gray-500 font-sans mb-6">
        {loading ? (
          <span className="inline-block h-4 w-32 bg-gray-200 rounded animate-pulse" />
        ) : (
          <>
            <span className="font-semibold text-gray-900">{total.toLocaleString()}</span>{" "}
            {total === 1 ? "product" : "products"} found
          </>
        )}
      </p>

      {/* Grid */}
      {!loading && items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-sm text-gray-500 font-sans mb-4">No products match your filters.</p>
          <button
            onClick={onClear}
            className="text-sm font-semibold text-brand hover:underline font-sans"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <ProductCard.Skeleton key={i} />)
            : items.map(product => (
                <ProductCard key={`${product.__typename}-${product.id}`} product={product} />
              ))
          }
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onPage={onPage} />
      )}
    </div>
  );
}

export default ResultsGrid;
