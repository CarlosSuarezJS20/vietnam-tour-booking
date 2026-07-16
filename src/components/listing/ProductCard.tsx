"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import type { ListingProduct } from "@/types/graphql";
import { getPrimaryImage } from "@/lib/imageHelpers";
import { isNewProduct } from "@/lib/newProductHelpers";
import { NewBadge } from "@/components/ui/NewBadge";

interface Props {
  product: ListingProduct;
}

const formatDuration = (days: number | string): string => {
  if (!days) return '';
  const numDays = typeof days === 'string' ? parseInt(days, 10) : days;
  if (numDays === 0) return '';
  return `${numDays} day${numDays !== 1 ? 's' : ''}`;
};

const SkeletonCard = () => {
  return (
    <div className="bg-white border border-gray-200 overflow-hidden animate-pulse">
      <div className="aspect-video bg-gray-200" />
      <div className="p-4 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/3 mt-4" />
      </div>
    </div>
  );
}

const ProductCard = ({ product }: Props) => {
  const isTour = product.__typename === "Tour";

  const regionLabel = isTour && product.cities[0]
    ? product.cities[0].region.label
    : "Cruise";

  const locationStr = isTour
    ? product.cities.slice(0, 3).map(c => c.name).join(" · ")
    : null;

  return (
    <div className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col">
      {/* Image */}
      <Link href={`/tours/${product.id}?type=${product.__typename.toLowerCase()}`} className="relative aspect-video overflow-hidden flex-shrink-0 block">
        <Image
          src={getPrimaryImage(product.images) || '/placeholder-image.jpg'}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 md:top-3 left-2 md:left-3">
          {product.onSale ? (
            <div className="w-11 md:w-12 h-11 md:h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-[7px] md:text-[8px] shadow-lg">
              % Deal
            </div>
          ) : (
            <span className="bg-black/55 text-white text-[9px] md:text-[10px] font-medium px-2 py-1 font-sans">
              {regionLabel}
            </span>
          )}
        </div>
        {/* Just In badge */}
        {isNewProduct(product.createdAt) && (
          <div className="absolute top-3 -right-1 md:-right-2">
            <NewBadge />
          </div>
        )}

        {/* Duration at bottom-right */}
        <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3">
          <span className="bg-black/55 text-white text-[8px] md:text-[10px] font-medium px-2 py-1 font-sans">
            {formatDuration(product.duration)}
          </span>
        </div>
        {!isTour && (
          <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3">
            <span className="bg-brand text-white text-[8px] md:text-[10px] font-semibold px-2 py-1 font-sans uppercase tracking-tight md:tracking-wide">
              Cruise
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 lg:p-5 flex flex-col flex-1">
        {locationStr && (
          <p className="text-[11px] lg:text-[12px] text-gray-400 mb-1.5 lg:mb-2 font-sans flex items-center gap-1 line-clamp-1">
            <FiMapPin className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
            {locationStr}
          </p>
        )}

        <h3 className="text-sm lg:text-base font-semibold text-gray-900 line-clamp-2 leading-snug mb-3 lg:mb-4 font-sans flex-1">
          {product.title}
        </h3>

        {isTour && product.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 lg:gap-1.5 mb-3 lg:mb-4">
            {product.categories.slice(0, 2).map(cat => (
              <span
                key={cat.id}
                className="text-[10px] lg:text-[11px] px-1.5 lg:px-2 py-0.5 lg:py-1 border border-gray-200 text-gray-500 font-sans"
              >
                {cat.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-end justify-between mt-auto pt-3 lg:pt-4 border-t border-gray-50">
          <div>
            <span className="text-[10px] lg:text-[11px] text-gray-400 uppercase tracking-wide font-sans">From</span>
            <p className="text-lg lg:text-xl font-bold text-gray-900 font-sans leading-tight">
              ${product.price.toLocaleString()}
            </p>
            {product.onSale && product.saleDiscountPercentage != null && (
              <p className="text-[11px] lg:text-[12px] font-semibold text-brand font-sans mt-0.5 lg:mt-1">
                Save {product.saleDiscountPercentage}% today!
              </p>
            )}
          </div>
          <Link
            href={`/tours/${product.id}?type=${product.__typename.toLowerCase()}`}
            className="bg-gray-900 text-white text-xs lg:text-sm font-semibold px-4 lg:px-5 py-2.5 lg:py-3 hover:bg-brand transition-colors font-sans"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.Skeleton = SkeletonCard;

export default ProductCard;
