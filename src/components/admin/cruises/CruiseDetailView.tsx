import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Cruise } from '@/hooks/useAdminCruiseSearch';
import type { ItineraryDay } from '@/types/itinerary';

interface CruiseDetailViewProps {
  cruise: Cruise;
}

const parseItinerary = (itineraryStr: string): ItineraryDay[] => {
  try {
    if (!itineraryStr || itineraryStr === '[]') return [];
    const parsed = JSON.parse(itineraryStr);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const CruiseDetailView = ({ cruise }: CruiseDetailViewProps) => (
  <div className="max-w-4xl">
    <Link
      href="/admin/cruises"
      className="mb-6 flex items-center gap-2 text-sm text-[#DC143C] hover:text-[#b01030] transition-colors"
    >
      <FiArrowLeft className="h-4 w-4" />
      Back to Cruises
    </Link>

    <div className="mb-6 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-[#171717]">{cruise.title}</h1>
      </div>
      <button
        disabled
        className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-500 cursor-not-allowed opacity-50"
      >
        Edit (coming soon)
      </button>
    </div>

    <div className="mb-8 rounded border border-[#17171724] overflow-hidden">
      <img src={cruise.images?.[0]?.url || '/placeholder-image.jpg'} alt={cruise.title} className="h-96 w-full object-cover" />
    </div>

    <div className="mb-8 grid grid-cols-2 gap-4 rounded border border-[#17171724] p-6 md:grid-cols-3">
      <div>
        <p className="text-xs uppercase text-[#17171799] tracking-wide mb-1">Duration</p>
        <p className="font-medium text-[#171717]">{cruise.duration}</p>
      </div>
      <div>
        <p className="text-xs uppercase text-[#17171799] tracking-wide mb-1">Price</p>
        <p className="font-medium text-[#171717]">${cruise.price.toFixed(2)}</p>
      </div>
      <div>
        <p className="text-xs uppercase text-[#17171799] tracking-wide mb-1">On Sale</p>
        <p className="font-medium text-[#171717]">{cruise.onSale ? `Yes (${cruise.saleDiscountPercentage}% off)` : 'No'}</p>
      </div>
    </div>

    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-[#171717]">Description</h2>
      <p className="text-sm text-[#171717] leading-relaxed">{cruise.description}</p>
    </div>

    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-[#171717]">Itinerary</h2>
      {(() => {
        const days = parseItinerary(cruise.itinerary);
        if (days.length === 0) {
          return (
            <div className="rounded border border-[#17171724] bg-[#f7f5f0] p-6">
              <p className="text-sm text-[#17171799]">No itinerary details</p>
            </div>
          );
        }
        return (
          <div className="space-y-3">
            {days.map((day) => (
              <div key={day.id} className="rounded border border-[#17171724] bg-white p-4">
                <h3 className="font-semibold text-[#171717] mb-2">Day {day.day}{day.activity && `: ${day.activity}`}</h3>
                {day.description && (
                  <p className="text-sm text-[#171717] whitespace-pre-wrap mb-2">{day.description}</p>
                )}
                {day.duration && (
                  <p className="text-xs text-[#17171799]">Duration: {day.duration}</p>
                )}
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  </div>
);
