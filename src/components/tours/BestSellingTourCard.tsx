"use client";

import Link from "next/link";
import { FiUsers, FiArrowRight, FiMapPin } from "react-icons/fi";
import type { FeaturedTour } from "@/types/graphql";
import PillTag from "@/components/ui/PillTag";

interface Props {
  tour: FeaturedTour;
}

const BestSellingTourCard = ({ tour }: Props) => {
  const areas = [...new Set(tour.cities.map((c) => c.region.label))];

  return (
    <div className="bg-gray-900/50 p-6">

      <PillTag variant="outline-white" size="md"><FiUsers className="w-3.5 h-3.5" /> Best Seller</PillTag>

      <hr className="border-white/20 my-3" />

      <p className="text-white/75 text-sm font-sans mb-1">
        {tour.title}
      </p>

      <hr className="border-white/20 my-3" />

      <div className="flex flex-wrap gap-2">
        {tour.categories.map((cat) => (
          <PillTag key={cat.id} variant="outline-white">{cat.label}</PillTag>
        ))}
      </div>

      <hr className="border-white/20 my-3" />

      <div className="flex items-center gap-2 text-white/60 text-xs mb-3 font-sans">
        <FiMapPin className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{areas.join(" · ")}</span>
      </div>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {tour.cities.map((c) => (
          <PillTag key={c.id} variant="outline-white">{c.name}</PillTag>
        ))}
      </div>

      <hr className="border-white/20 my-3 lg:my-4" />

      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-white/50 text-xs uppercase tracking-wider font-sans">From</span>
            <span className="text-white text-3xl font-bold leading-none font-sans">
              ${tour.price.toLocaleString()}
            </span>
          </div>
          <p className="text-white/40 text-xs font-sans">per person · double occupancy</p>
        </div>

        <Link href={`/tours/${tour.id}`} className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-6 py-3.5 transition-colors font-sans">
          Find more <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}

export default BestSellingTourCard;
