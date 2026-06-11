"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGetToursByCategoryQuery } from "@/store/api/graphqlApi";
import type { CarouselTour } from "@/types/graphql";
import PillTag from "@/components/ui/PillTag";

const CATEGORIES = {
  "Luxury":           { categoryId: "3"  },
  "Beach Holidays":   { categoryId: "4"  },
  "Honeymoon":        { categoryId: "5"  },
  "Mature Travellers":{ categoryId: "2"  },
} as const;

type CategoryKey = keyof typeof CATEGORIES;

function TourCard({ tour }: { tour: CarouselTour }) {
  const [, priceValue] = tour.price.split(": ");

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-3">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          sizes="260px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-base font-medium text-gray-900 line-clamp-2 leading-snug mb-1 font-sans">
        {tour.title}
      </p>
      <p className="text-sm font-sans">
        <PillTag variant="brand">{tour.duration}</PillTag>
        <span className="text-gray-400 font-light"> · From </span><span className="text-gray-900 font-bold">{priceValue ?? tour.price}</span>
      </p>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="flex-none w-[260px] mr-5">
      <div className="aspect-[3/4] bg-gray-200 animate-pulse rounded" />
      <div className="h-3 bg-gray-200 animate-pulse mt-3 w-3/4 rounded" />
      <div className="h-3 bg-gray-200 animate-pulse mt-2 w-1/2 rounded" />
    </div>
  );
}

export default function CategoriesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const [activeKey, setActiveKey] = useState<CategoryKey>("Luxury");

  const { data: tours = [], isLoading, isError } = useGetToursByCategoryQuery({
    categoryId: CATEGORIES[activeKey].categoryId,
    limit: 8,
  });

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Left — copy + filter buttons */}
        <div className="md:w-[280px] flex-shrink-0 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand mb-4 font-display">
              Popular Categories
            </h2>
            <p className="text-base text-gray-500 leading-relaxed font-sans mb-8">
              From luxury escapes to romantic honeymoons — find the journey that suits you.
            </p>

            <div className="flex flex-col gap-2">
              {(Object.keys(CATEGORIES) as CategoryKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  className={`text-left text-sm font-semibold px-3 py-2 border transition-colors font-sans ${
                    activeKey === key
                      ? "bg-brand border-brand text-white"
                      : "border-gray-300 text-gray-600 hover:border-brand hover:text-brand"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — carousel + arrows */}
        <div className="flex-1 min-w-0">
          {isError ? (
            <div className="flex items-center justify-center h-64 text-sm text-gray-400 font-sans">
              Failed to load tours. Please refresh.
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <button onClick={scrollPrev} className="hidden md:flex flex-none w-9 h-9 items-center justify-center border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors">
                  <FiChevronLeft className="w-4 h-4" />
                </button>

                <div key={activeKey} ref={emblaRef} className="overflow-hidden flex-1">
                  <div className="flex">
                    {isLoading
                      ? [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                      : tours.map((tour) => (
                          <div key={tour.id} className="flex-none w-[260px] mr-5">
                            <TourCard tour={tour} />
                          </div>
                        ))
                    }
                  </div>
                </div>

                <button onClick={scrollNext} className="hidden md:flex flex-none w-9 h-9 items-center justify-center border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors">
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-end mt-6">
                <button className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-brand transition-colors font-sans">
                  Find more tours
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
