"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGetCruisesQuery } from "@/store/api/graphqlApi";
import type { Cruise } from "@/types/graphql";

function CruiseCard({ cruise }: { cruise: Cruise }) {
  const [, priceValue] = cruise.price.split(": ");

  return (
    <div className="group cursor-pointer relative aspect-video overflow-hidden">
      <Image
        src={cruise.imageUrl}
        alt={cruise.title}
        fill
        sizes="560px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white text-base font-semibold line-clamp-2 leading-snug mb-2 font-sans">
          {cruise.title}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm font-sans">{cruise.duration}</span>
          <span className="text-white text-sm font-semibold font-sans">{priceValue ?? cruise.price}</span>
        </div>
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="flex-none w-[560px] mr-4 aspect-video bg-gray-200 animate-pulse" />
  );
}

export default function CruisesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const { data: cruises = [], isLoading, isError } = useGetCruisesQuery();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10 md:px-20">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 font-display">
            Halong Bay Cruises
          </h2>
          <p className="text-base text-gray-500 leading-relaxed font-sans max-w-xl mx-auto">
            Every vessel in our fleet is owned and operated by us — traditional wooden junks and boutique cruises built for the waters of Halong Bay. Day trips and multi-night stays across Lan Ha Bay and Halong Bay.
          </p>
        </div>

        {isError ? (
          <div className="flex items-center justify-center h-48 text-sm text-gray-400 font-sans">
            Failed to load cruises. Please refresh.
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>

            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {isLoading
                  ? [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                  : cruises.map((cruise) => (
                      <div key={cruise.id} className="flex-none w-[560px] mr-4">
                        <CruiseCard cruise={cruise} />
                      </div>
                    ))
                }
              </div>
            </div>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-9 h-9 flex items-center justify-center bg-white border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
