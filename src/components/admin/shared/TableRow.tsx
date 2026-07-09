interface TableRowProps {
  selected?: boolean;
  onSelect?: (checked: boolean) => void;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const TableRow = ({ selected, onSelect, onClick, className = '', children }: TableRowProps) => (
  <tr
    onClick={onClick}
    className={`border-b border-[#17171724] transition-colors ${
      selected ? 'bg-[#f7f5f0] border-l-3 border-l-[#DC143C]' : 'hover:bg-[#f7f5f0]'
    } ${className}`}
  >
    <td className="w-12 px-3 py-3">
      {onSelect && (
        <input
          type="checkbox"
          checked={selected || false}
          onChange={(e) => onSelect(e.target.checked)}
          onClick={(e) => e.stopPropagation()}
          className="cursor-pointer"
        />
      )}
    </td>
    {children}
  </tr>
);
