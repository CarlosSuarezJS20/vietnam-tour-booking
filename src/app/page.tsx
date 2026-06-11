"use client";

import HeroSection from "@/components/hero/HeroSection";
import BestSellingTourCard from "@/components/tours/BestSellingTourCard";
import CruisesCarousel from "@/components/tours/CruisesCarousel";
import CategoriesCarousel from "@/components/tours/CategoriesCarousel";
import { useGetFeaturedTourQuery } from "@/store/api/graphqlApi";

function FeaturedTourSection() {
  const { data: tour, isLoading, isError } = useGetFeaturedTourQuery();

  if (isLoading) {
    return (
      <div className="h-72 rounded-2xl bg-gray-100 animate-pulse" />
    );
  }

  if (isError || !tour) {
    return (
      <p className="text-sm text-gray-400 font-sans">Failed to load featured tour.</p>
    );
  }

  return <BestSellingTourCard tour={tour} />;
}

export default function Home() {
  return (
    <main>
      <div className="relative h-screen w-full overflow-hidden">
        <HeroSection>
          <FeaturedTourSection />
        </HeroSection>
      </div>
      <CategoriesCarousel />
      <div className="flex justify-center">
        <div className="w-24 h-px bg-gray-900" />
      </div>
      <CruisesCarousel />
    </main>
  );
}
