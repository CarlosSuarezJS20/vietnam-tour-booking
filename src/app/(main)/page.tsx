"use client";

import HeroSection from "@/components/hero/HeroSection";
import BestSellingTourCard from "@/components/tours/BestSellingTourCard";
import CruisesCarousel from "@/components/tours/CruisesCarousel";
import CategoriesCarousel from "@/components/tours/CategoriesCarousel";
import Credentials from "@/components/sections/Credentials";
import AboutSection from "@/components/about/AboutSection";
import BookingForm from "@/components/booking/BookingForm";
import { useGetFeaturedTourQuery } from "@/graphql/hooks";

const FeaturedTourSection = () => {
  const { data: tour, loading, error } = useGetFeaturedTourQuery();

  if (loading) {
    return (
      <div className="h-72 rounded-2xl bg-gray-100 animate-pulse" />
    );
  }

  if (error || !tour) {
    return (
      <p className="text-sm text-gray-400 font-sans">Failed to load featured tour.</p>
    );
  }

  return <BestSellingTourCard tour={tour} />;
}

const Home = () => {
  return (
    <main>
      <div className="relative min-h-screen lg:h-screen w-full overflow-hidden">
        <HeroSection>
          <FeaturedTourSection />
        </HeroSection>
      </div>
      <AboutSection />
      <div className="flex justify-center">
        <div className="w-24 h-px bg-gray-900" />
      </div>
      <CategoriesCarousel />
      <div className="flex justify-center">
        <div className="w-24 h-px bg-gray-900" />
      </div>
      <CruisesCarousel />
      <div className="flex justify-center">
        <div className="w-24 h-px bg-gray-900" />
      </div>
      <BookingForm />
      <div className="flex justify-center">
        <div className="w-24 h-px bg-gray-900" />
      </div>
      <Credentials />

    </main>
  );
}

export default Home;
