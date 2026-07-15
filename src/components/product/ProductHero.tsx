"use client";

import Image from "next/image";
import { FiMapPin, FiClock, FiTag } from "react-icons/fi";
import type { ProductDetail } from "@/types/graphql";

interface Props {
  product: ProductDetail;
}

const formatDuration = (days: number | string): string => {
  if (!days) return '';
  const numDays = typeof days === 'string' ? parseInt(days, 10) : days;
  if (numDays === 0) return '';
  return `${numDays} day${numDays !== 1 ? 's' : ''}`;
};

const ProductHero = ({ product }: Props) => {
  const isTour = (product as { cities?: unknown }).cities !== undefined;
  const tour = isTour ? (product as import("@/types/graphql").ProductDetailTour) : null;

  return (
    <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-65px)]">
      {/* Image — full width on mobile, sticky half on desktop */}
      <div className="relative w-full h-[56vw] md:h-auto md:w-1/2 md:sticky md:top-[65px] md:h-[calc(100vh-65px)] flex-shrink-0">
        <Image
          src={product.images?.[0]?.url || '/placeholder-image.jpg'}
          alt={product.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Details panel */}
      <div className="w-full md:w-1/2 px-6 py-8 md:px-12 md:py-12 bg-white">
        {/* Categories / type */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tour
            ? tour.categories.map(cat => (
                <span key={cat.id} className="text-[11px] uppercase tracking-widest text-brand font-semibold font-sans">
                  {cat.label}
                </span>
              ))
            : <span className="text-[11px] uppercase tracking-widest text-brand font-semibold font-sans">Cruise</span>
          }
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans leading-tight mb-6">
          {product.title}
        </h1>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 border-t border-b border-gray-100 py-6">
          <div className="flex items-start gap-3">
            <FiClock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-sans">Duration</p>
              <p className="text-sm font-semibold text-gray-900 font-sans">{formatDuration(product.duration)}</p>
            </div>
          </div>

          {tour && tour.categories.length > 0 && (
            <div className="flex items-start gap-3">
              <FiTag className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400 font-sans">Category</p>
                <p className="text-sm font-semibold text-gray-900 font-sans">
                  {tour.categories.map(c => c.label).join(", ")}
                </p>
              </div>
            </div>
          )}

          {tour && tour.cities.length > 0 && (
            <div className="flex items-start gap-3 col-span-2">
              <FiMapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400 font-sans mb-2">Destinations</p>
                <div className="flex flex-wrap gap-1.5">
                  {tour.cities.map(c => (
                    <span key={c.id} className="text-xs text-gray-700 font-sans bg-gray-100 px-3 py-1 rounded-full">
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 font-sans mb-1">Price From</p>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 font-sans">
            ${product.price.toLocaleString()}
          </p>
          {product.onSale && product.saleDiscountPercentage != null && (
            <p className="text-sm font-semibold text-brand font-sans mt-1">
              Save {product.saleDiscountPercentage}% today!
            </p>
          )}
        </div>

        {/* Stars placeholder */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 font-sans italic">"Excellent tour"</p>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
