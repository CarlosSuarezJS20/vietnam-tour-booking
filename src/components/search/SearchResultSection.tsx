import SearchResultItem from "./SearchResultItem";
import type { SearchItem } from "@/types/graphql";

interface Props {
  label:   string;
  items:   SearchItem[];
  onClose: () => void;
}

const SearchResultSection = ({ label, items, onClose }: Props) => {
  if (items.length === 0) return null;

  return (
    <div>
      <div className="px-4 py-2 bg-surface border-b border-gray-100">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          {label}
        </span>
        <span className="ml-2 text-[10px] text-gray-300 font-medium">{items.length}</span>
      </div>
      {items.map(item => (
        <SearchResultItem key={`${item._type}-${item.id}`} item={item} onClick={onClose} />
      ))}
    </div>
  );
}

export default SearchResultSection;
