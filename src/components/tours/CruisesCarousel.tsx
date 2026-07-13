"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGetCruisesQuery } from "@/graphql/hooks";
import type { Cruise } from "@/types/graphql";

interface CruiseCardProps {
  cruise: Cruise;
  isActive: boolean;
}

interface CardSkeletonProps {
  isActive: boolean;
}

const CruiseCard = ({ cruise, isActive }: CruiseCardProps) => {

  return (
    <div
      className={`relative aspect-[4/3] md:aspect-[16/10] overflow-hidden cursor-pointer transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "scale-[0.72] brightness-[0.3] blur-[2px]"
      }`}
    >
      <Image
        src={cruise.images?.[0]?.url || '/placeholder-image.jpg'}
        alt={cruise.title}
        fill
        sizes="(max-width: 780px) 60vw, 780px"
        className="object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-t md:from-black/60 md:via-black/10 md:to-transparent" />

      <div className="absolute top-3 right-3 md:top-5 md:right-5">
        <span className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase text-white border border-white/40 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-sans">
          ✦ CRUISE
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:inset-auto md:bottom-0 md:left-0 md:right-0 md:items-start md:justify-end md:text-left md:p-8 lg:p-10">
        <p className="text-white/70 text-xs md:text-sm italic font-serif mb-1">Halong Bay</p>
        <h3 className="text-white font-display text-base md:text-2xl lg:text-4xl font-bold uppercase leading-tight tracking-wide line-clamp-2">
          {cruise.title}
        </h3>
        <div className="flex items-center gap-4 mt-2 md:mt-3">
          <span className="inline-block bg-brand text-white text-xs md:text-sm font-semibold font-sans px-2.5 py-0.5 rounded-full">{cruise.duration}</span>
          <span className="text-white font-sans"><span className="text-xs md:text-sm font-light opacity-70">From </span><span className="text-sm md:text-lg font-bold">${cruise.price.toLocaleString()}</span></span>
        </div>
      </div>
    </div>
  );
}

const CardSkeleton = ({ isActive }: CardSkeletonProps) => {
  return (
    <div
      className={`aspect-[4/3] md:aspect-[16/10] bg-gray-200 animate-pulse transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "scale-[0.72] brightness-[0.3] blur-[2px]"
      }`}
    />
  );
}

const CruisesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isDragging = useRef(false);
  const { data: cruises = [], loading, error } = useGetCruisesQuery();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const onPointerDown = () => { isDragging.current = false; };
    const onScroll = () => { isDragging.current = true; };
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("scroll", onScroll);
    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 mb-8 md:mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand mb-3 font-display">
            Halong Bay Cruises
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-sans max-w-xl mx-auto">
            Every vessel in our fleet is owned and operated by us — traditional wooden junks and boutique cruises built for the waters of Halong Bay. Day trips and multi-night stays across Lan Ha Bay and Halong Bay.
          </p>
        </div>
      </div>

      {error ? (
        <div className="max-w-7xl mx-auto px-10 md:px-20 flex items-center justify-center h-48 text-sm text-gray-400 font-sans">
          Failed to load cruises. Please refresh.
        </div>
      ) : (
        <div className="w-full overflow-hidden md:flex md:items-center md:gap-3 md:px-8">
          <button onClick={scrollPrev} className="hidden md:flex flex-none w-9 h-9 items-center justify-center border border-gray-300 text-gray-500 hover:border-brand hover:text-brand active:scale-90 active:bg-gray-100 transition-all">
            <FiChevronLeft className="w-4 h-4" />
          </button>

          <div ref={emblaRef} className="overflow-hidden flex-1">
            <div className="flex">
              {loading
                ? [...Array(4)].map((_: unknown, i: number) => (
                    <div key={i} className={`flex-none w-[85vw] md:w-[60vw] max-w-[780px] relative ${i === 0 ? "z-10" : "z-0"}`}>
                      <CardSkeleton isActive={i === 0} />
                    </div>
                  ))
                : cruises.map((cruise: Cruise, index: number) => (
                    <Link
                      key={cruise.id}
                      href={`/tours/${cruise.id}?type=cruise`}
                      onClick={(e) => { if (isDragging.current) e.preventDefault(); }}
                      className={`flex-none w-[85vw] md:w-[60vw] max-w-[780px] relative transition-all duration-500 ${
                        index === selectedIndex ? "z-10" : "z-0 pointer-events-none"
                      }`}
                    >
                      <CruiseCard cruise={cruise} isActive={index === selectedIndex} />
                    </Link>
                  ))
              }
            </div>
          </div>

          <button onClick={scrollNext} className="hidden md:flex flex-none w-9 h-9 items-center justify-center border border-gray-300 text-gray-500 hover:border-brand hover:text-brand active:scale-90 active:bg-gray-100 transition-all">
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
}

export default CruisesCarousel;
