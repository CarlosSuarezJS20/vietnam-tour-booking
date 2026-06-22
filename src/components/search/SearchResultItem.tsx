import Image from "next/image";
import Link from "next/link";
import { FiClock, FiAnchor } from "react-icons/fi";
import PillTag from "@/components/ui/PillTag";
import type { SearchItem } from "@/types/graphql";

interface Props {
  item: SearchItem;
  onClick?: () => void;
}

const SearchResultItem = ({ item, onClick }: Props) => {
  const href = item._type === "cruise"
    ? `/tours/${item.id}?type=cruise`
    : `/tours/${item.id}`;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface transition-colors text-left group"
    >
      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="64px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate leading-snug mb-0.5">
          {item.title}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1.5">
          <FiClock className="w-3 h-3 flex-shrink-0" />
          <span>{item.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {item._type === "cruise" ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand bg-red-50 px-2 py-0.5 rounded-full">
              <FiAnchor className="w-2.5 h-2.5" /> Cruise
            </span>
          ) : (
            item.categories.slice(0, 2).map(cat => (
              <PillTag key={cat.id} size="sm">{cat.label}</PillTag>
            ))
          )}
        </div>
      </div>

      <span className="text-xs font-semibold text-gray-700 flex-shrink-0 hidden sm:block">
        {item.price.replace("From: ", "")}
      </span>
    </Link>
  );
}

export default SearchResultItem;
