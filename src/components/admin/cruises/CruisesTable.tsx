import { TableRow } from '../shared/TableRow';
import { VisibilityToggle } from '../shared/VisibilityToggle';
import { Cruise } from '@/hooks/useAdminCruiseSearch';

interface CruisesTableProps {
  cruises: Cruise[];
  onToggleVisibility?: (id: string) => Promise<any>;
  loadingIds?: Set<string>;
  onRowClick?: (cruise: Cruise) => void;
}

export const CruisesTable = ({ cruises, onToggleVisibility, loadingIds = new Set(), onRowClick }: CruisesTableProps) => (
  <table className="w-full border-collapse">
    <thead>
      <tr className="border-b border-[#17171724] bg-white">
        <th className="w-12 px-3 py-3" />
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Thumb</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Title</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Duration</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Price</th>
        <th className="px-4 py-3 text-left text-xs uppercase text-[#17171799] tracking-wide">Status</th>
      </tr>
    </thead>
    <tbody>
      {cruises.map((cruise) => (
        <TableRow
          key={cruise.id}
          onClick={() => onRowClick?.(cruise)}
          className="cursor-pointer"
        >
          <td className="px-4 py-3">
            <img src={cruise.images?.[0]?.url || '/placeholder-image.jpg'} alt={cruise.title} className="h-10 w-10 rounded object-cover" />
          </td>
          <td className="px-4 py-3 text-sm">{cruise.title}</td>
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
        </TableRow>
      ))}
    </tbody>
  </table>
);
