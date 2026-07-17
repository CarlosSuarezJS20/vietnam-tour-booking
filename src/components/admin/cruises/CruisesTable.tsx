import { TableRow } from '../shared/TableRow';
import { VisibilityToggle } from '../shared/VisibilityToggle';
import { Cruise } from '@/hooks/useAdminCruiseSearch';
import { getPrimaryImage } from '@/lib/imageHelpers';
import { isNewProduct } from '@/lib/newProductHelpers';

interface CruisesTableProps {
  cruises: Cruise[];
  onToggleVisibility?: (id: string) => Promise<any>;
  onEdit?: (id: string) => void;
  loadingIds?: Set<string>;
}

export const CruisesTable = ({ cruises, onToggleVisibility, onEdit, loadingIds = new Set() }: CruisesTableProps) => (
  <table className="w-full border-collapse">
    <thead>
      <tr className="border-b border-[#17171724] bg-white">
        <th className="w-12 px-3 py-3" />
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Thumb</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Title</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Duration</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Price</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Status</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Actions</th>
      </tr>
    </thead>
    <tbody>
      {cruises.map((cruise) => (
        <TableRow
          key={cruise.id}
        >
          <td className="px-4 py-3">
            <img src={getPrimaryImage(cruise.images) || '/placeholder-image.jpg'} alt={cruise.title} className="h-10 w-10 rounded object-cover" />
          </td>
          <td className="px-4 py-3 text-sm">
            {cruise.title}
            {isNewProduct(cruise.createdAt) && (
              <span className="ml-2 text-green-600 font-medium text-xs">(New Listing)</span>
            )}
          </td>
          <td className="px-4 py-3 text-sm">{cruise.duration}</td>
          <td className="px-4 py-3 text-sm font-medium">${cruise.price.toFixed(2)}</td>
          <td className="px-4 py-3">
            {onToggleVisibility && (
              <VisibilityToggle
                isVisible={cruise.isVisible}
                onToggle={() => onToggleVisibility(cruise.id)}
                loading={loadingIds.has(cruise.id)}
              />
            )}
          </td>
          <td className="px-4 py-3">
            {onEdit && (
              <button
                onClick={() => onEdit(cruise.id)}
                className="rounded px-3 py-1.5 text-sm font-medium bg-[#DC143C] text-white hover:bg-[#b81132] transition-colors"
              >
                Edit
              </button>
            )}
          </td>
        </TableRow>
      ))}
    </tbody>
  </table>
);
