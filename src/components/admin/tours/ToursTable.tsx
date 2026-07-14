import { TableRow } from '../shared/TableRow';
import { VisibilityToggle } from '../shared/VisibilityToggle';
import { Tour } from '@/hooks/useAdminTourSearch';

interface ToursTableProps {
  tours: Tour[];
  onToggleVisibility?: (id: string) => Promise<any>;
  onSetFeatured?: (id: string) => Promise<any>;
  loadingIds?: Set<string>;
  featuredLoadingIds?: Set<string>;
  onRowClick?: (tour: Tour) => void;
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

export const ToursTable = ({ tours, onToggleVisibility, onSetFeatured, loadingIds = new Set(), featuredLoadingIds = new Set(), onRowClick }: ToursTableProps) => (
  <table className="w-full border-collapse">
    <thead>
      <tr className="border-b border-[#17171724] bg-white">
        <th className="w-12 px-3 py-3" />
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Thumb</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Title</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Duration</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Price</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Date</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Featured</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Status</th>
      </tr>
    </thead>
    <tbody>
      {tours.map((tour) => (
        <TableRow
          key={tour.id}
          onClick={() => onRowClick?.(tour)}
          className="cursor-pointer"
        >
          <td className="px-4 py-3">
            <img src={tour.images?.[0]?.url || '/placeholder-image.jpg'} alt={tour.title} className="h-10 w-10 rounded object-cover" />
          </td>
          <td className="px-4 py-3 text-sm">{tour.title}</td>
          <td className="px-4 py-3 text-sm">{tour.duration}</td>
          <td className="px-4 py-3 text-sm font-medium">${tour.price.toFixed(2)}</td>
          <td className="px-4 py-3 text-sm text-[#17171799]">{formatDate(tour.createdAt)}</td>
          <td className="px-4 py-3">
            {onSetFeatured ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSetFeatured(tour.id);
                }}
                disabled={featuredLoadingIds.has(tour.id) || tour.featuredTour}
                className={`rounded px-3 py-1 text-sm font-medium ${
                  tour.featuredTour
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
                } hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {featuredLoadingIds.has(tour.id) ? '...' : tour.featuredTour ? 'Yes' : 'No'}
              </button>
            ) : (
              <span className="text-sm">{tour.featuredTour ? 'Yes' : 'No'}</span>
            )}
          </td>
          <td className="px-4 py-3">
            {onToggleVisibility && (
              <VisibilityToggle
                isVisible={tour.isVisible}
                onToggle={() => onToggleVisibility(tour.id)}
                loading={loadingIds.has(tour.id)}
              />
            )}
          </td>
        </TableRow>
      ))}
    </tbody>
  </table>
);
