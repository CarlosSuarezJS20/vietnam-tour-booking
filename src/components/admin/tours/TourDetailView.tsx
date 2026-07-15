import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Tour } from '@/hooks/useAdminTourSearch';
import type { ItineraryDay } from '@/types/itinerary';
import { getPrimaryImage } from '@/lib/imageHelpers';

interface TourDetailViewProps {
  tour: Tour;
}

const formatDate = (dateStr: string) => {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return dateStr;
  }
};

const parseItinerary = (itineraryStr: string): ItineraryDay[] => {
  try {
    if (!itineraryStr || itineraryStr === '[]') return [];
    const parsed = JSON.parse(itineraryStr);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const TourDetailView = ({ tour }: TourDetailViewProps) => (
  <div className="max-w-4xl">
    <Link
      href="/admin/tours"
      className="mb-6 flex items-center gap-2 text-sm text-[#DC143C] hover:text-[#b01030] transition-colors"
    >
      <FiArrowLeft className="h-4 w-4" />
      Back to Tours
    </Link>

    <div className="mb-6 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-[#171717]">{tour.title}</h1>
        <p className="mt-1 text-sm text-[#17171799]">Created {formatDate(tour.createdAt)}</p>
      </div>
      {/* Edit button placeholder for CRUD plan */}
      <button
        disabled
        className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-500 cursor-not-allowed opacity-50"
      >
        Edit (coming soon)
      </button>
    </div>

    <div className="mb-8 rounded border border-[#17171724] overflow-hidden">
      <img src={getPrimaryImage(tour.images) || '/placeholder-image.jpg'} alt={tour.title} className="h-96 w-full object-cover" />
    </div>

    <div className="mb-8 grid grid-cols-2 gap-4 rounded border border-[#17171724] p-6 md:grid-cols-4">
      <div>
        <p className="text-xs uppercase text-[#17171799] tracking-wide mb-1">Duration</p>
        <p className="font-medium text-[#171717]">{tour.duration}</p>
      </div>
      <div>
        <p className="text-xs uppercase text-[#17171799] tracking-wide mb-1">Price</p>
        <p className="font-medium text-[#171717]">${tour.price.toFixed(2)}</p>
      </div>
      <div>
        <p className="text-xs uppercase text-[#17171799] tracking-wide mb-1">Featured</p>
        <p className="font-medium text-[#171717]">{tour.featuredTour ? 'Yes' : 'No'}</p>
      </div>
      <div>
        <p className="text-xs uppercase text-[#17171799] tracking-wide mb-1">On Sale</p>
        <p className="font-medium text-[#171717]">{tour.onSale ? `Yes (${tour.saleDiscountPercentage}% off)` : 'No'}</p>
      </div>
    </div>

    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-[#171717]">Description</h2>
      <p className="text-sm text-[#171717] leading-relaxed">{tour.description}</p>
    </div>

    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-[#171717]">Itinerary</h2>
      <div className="rounded border border-[#17171724] bg-[#f7f5f0] p-6">
        {tour.itinerary && tour.itinerary !== '[]' ? (
          <div className="space-y-3">
            {parseItinerary(tour.itinerary).map((day) => (
              <div key={day.id} className="rounded border border-[#17171724] bg-white p-4">
                <h3 className="font-semibold text-[#171717] mb-2">Day {day.day}{day.activity ? `: ${day.activity}` : ''}</h3>
                {day.description && (
                  <p className="text-sm text-[#171717] whitespace-pre-wrap mb-2">{day.description}</p>
                )}
                {day.duration && (
                  <p className="text-xs text-[#17171799]">Duration: {day.duration}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#17171799]">No itinerary details</p>
        )}
      </div>
    </div>

    {tour.categories && tour.categories.length > 0 && (
      <div className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-[#171717]">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {tour.categories.map((cat) => (
            <span key={cat.id} className="rounded-full bg-[#f7f5f0] px-3 py-1 text-sm text-[#171717]">
              {cat.label}
            </span>
          ))}
        </div>
      </div>
    )}

    {tour.cities && tour.cities.length > 0 && (
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[#171717]">Cities</h2>
        <div className="flex flex-wrap gap-2">
          {tour.cities.map((city) => (
            <span key={city.id} className="rounded-full bg-[#f7f5f0] px-3 py-1 text-sm text-[#171717]">
              {city.name}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);
