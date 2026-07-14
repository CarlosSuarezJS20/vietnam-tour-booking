"use client";

import { use } from "react";
import Link from "next/link";
import { useGetTourByIdQuery, useGetCruiseByIdQuery } from "@/graphql/hooks";
import ProductHero from "@/components/product/ProductHero";
import ProductDescription from "@/components/product/ProductDescription";
import ItineraryAccordion from "@/components/product/ItineraryAccordion";
import PriceInclusions from "@/components/product/PriceInclusions";
import BookingBar from "@/components/product/BookingBar";
import { ProductDetailSkeleton } from "@/components/loading/ProductDetailSkeleton";

interface Props {
  params:      Promise<{ id: string }>;
  searchParams: Promise<{ type?: string }>;
}

const ProductDetailPage = ({ params, searchParams }: Props) => {
  const { id } = use(params);
  const { type } = use(searchParams);

  const isCruise = type === "cruise";

  const tourResult   = useGetTourByIdQuery(id, isCruise);
  const cruiseResult = useGetCruiseByIdQuery(id, !isCruise);

  const product = isCruise ? cruiseResult.data : tourResult.data;
  const loading = isCruise ? cruiseResult.loading : tourResult.loading;
  const error   = isCruise ? cruiseResult.error : tourResult.error;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center gap-4">
        <p className="text-lg font-semibold text-gray-900 font-sans">Something went wrong. Please try again.</p>
        <Link href="/tours" className="text-brand text-sm font-sans hover:underline">
          ← Back to all tours
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center gap-4">
        <p className="text-lg font-semibold text-gray-900 font-sans">Tour not found</p>
        <Link href="/tours" className="text-brand text-sm font-sans hover:underline">
          ← Back to all tours
        </Link>
      </div>
    );
  }

  return (
    <>
      <ProductHero product={product} />
      <div className="pb-28">
        <ProductDescription text={product.description} />
        {product.itinerary && <ItineraryAccordion itinerary={product.itinerary} />}
        <PriceInclusions productType={isCruise ? "cruise" : "tour"} />
      </div>
      <BookingBar product={product} productType={isCruise ? "cruise" : "tour"} />
    </>
  );
};

export default ProductDetailPage;
