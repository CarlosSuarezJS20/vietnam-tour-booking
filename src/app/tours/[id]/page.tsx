"use client";

import { use } from "react";
import Link from "next/link";
import { useGetTourByIdQuery, useGetCruiseByIdQuery } from "@/graphql/hooks";
import ProductHero from "@/components/product/ProductHero";
import ProductDescription from "@/components/product/ProductDescription";
import ItineraryAccordion from "@/components/product/ItineraryAccordion";
import PriceInclusions from "@/components/product/PriceInclusions";
import BookingBar from "@/components/product/BookingBar";

interface Props {
  params:      Promise<{ id: string }>;
  searchParams: Promise<{ type?: string }>;
}

const ProductDetailPage = ({ params, searchParams }: Props) => {
  const { id } = use(params);
  const { type } = use(searchParams);

  const isCruise = type === "cruise";

  const tourResult   = useGetTourByIdQuery(isCruise ? "" : id);
  const cruiseResult = useGetCruiseByIdQuery(isCruise ? id : "");

  const product = isCruise ? cruiseResult.data : tourResult.data;
  const loading = isCruise ? cruiseResult.loading : tourResult.loading;

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-65px)] items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin" />
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
        <PriceInclusions />
      </div>
      <BookingBar product={product} productType={isCruise ? "cruise" : "tour"} />
    </>
  );
};

export default ProductDetailPage;
