"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import type { ListingProduct } from "@/types/graphql";

interface Props {
  product: ListingProduct;
}

const SkeletonCard = () => {
  return (
    <div className="bg-white border border-gray-100 overflow-hidden animate-pulse">
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
  const [, priceValue] = product.price.split(": ");

  const regionLabel = isTour && product.cities[0]
    ? product.cities[0].region.label
    : "Cruise";

  const locationStr = isTour
    ? product.cities.slice(0, 3).map(c => c.name).join(" · ")
    : null;

  return (
    <div className="group bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          {product.onSale ? (
            <span className="bg-brand text-white text-[10px] font-bold px-2 py-1 font-sans uppercase tracking-wide">
              % Deal
            </span>
          ) : (
            <span className="bg-black/55 text-white text-[10px] font-medium px-2 py-1 font-sans">
              {regionLabel}
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-black/55 text-white text-[10px] font-medium px-2 py-1 font-sans">
            {product.duration}
          </span>
        </div>
        {!isTour && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-brand text-white text-[10px] font-semibold px-2 py-1 font-sans uppercase tracking-wide">
              Cruise
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {locationStr && (
          <p className="text-[11px] text-gray-400 mb-1.5 font-sans flex items-center gap-1 line-clamp-1">
            <FiMapPin className="w-3 h-3 flex-shrink-0" />
            {locationStr}
          </p>
        )}

        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mb-3 font-sans flex-1">
          {product.title}
        </h3>

        {isTour && product.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.categories.slice(0, 2).map(cat => (
              <span
                key={cat.id}
                className="text-[10px] px-1.5 py-0.5 border border-gray-200 text-gray-500 font-sans"
              >
                {cat.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-end justify-between mt-auto pt-3 border-t border-gray-50">
          <div>
            <span className="text-[10px] text-gray-400 uppercase tracking-wide font-sans">From</span>
            <p className="text-lg font-bold text-gray-900 font-sans leading-tight">
              {priceValue ?? product.price}
            </p>
            {product.onSale && product.saleDiscountPercentage != null && (
              <p className="text-[11px] font-semibold text-brand font-sans mt-0.5">
                Save {product.saleDiscountPercentage}% today!
              </p>
            )}
          </div>
          <Link
            href={`/tours/${product.id}?type=${product.__typename.toLowerCase()}`}
            className="bg-gray-900 text-white text-xs font-semibold px-4 py-2.5 hover:bg-brand transition-colors font-sans"
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
