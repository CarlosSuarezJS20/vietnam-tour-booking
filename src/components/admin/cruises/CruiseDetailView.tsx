import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Cruise } from '@/hooks/useAdminCruiseSearch';

interface CruiseDetailViewProps {
  cruise: Cruise;
}

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
      <div className="rounded border border-[#17171724] bg-[#f7f5f0] p-6">
        <p className="whitespace-pre-wrap text-sm text-[#171717]">{cruise.itinerary}</p>
      </div>
    </div>

    {cruise.sourceUrl && (
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[#171717]">Source</h2>
        <a
          href={cruise.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#DC143C] hover:underline"
        >
          View source →
        </a>
      </div>
    )}
  </div>
);
