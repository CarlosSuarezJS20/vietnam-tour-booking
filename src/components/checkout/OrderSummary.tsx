import Image from "next/image";
import type { GqlCartItem } from "@/types/graphql";
import { getPrimaryImage } from "@/lib/imageHelpers";

type Props = {
  items:      GqlCartItem[];
  totalPrice: number;
};

const OrderSummary = ({ items, totalPrice }: Props) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6 sticky top-[calc(var(--navbar-height)+24px)]">
    {items.map((item) => (
      <div key={item.uid} className="space-y-5">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src={getPrimaryImage(item.product.images) || '/placeholder-image.jpg'}
            alt={item.product.title}
            fill
            className="object-cover"
            sizes="400px"
          />
        </div>

        <p className="text-base font-bold font-sans text-gray-900 leading-snug">
          {item.product.title}
        </p>

        <div className="space-y-3 text-sm font-sans">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              {item.partySize} {item.partySize === 1 ? "Adult" : "Adults"}
            </span>
            <span className="font-semibold text-gray-900">${item.price.toLocaleString()}</span>
          </div>
          <p className="text-gray-500">{item.date} • {item.time}</p>
        </div>

        <span className="inline-block bg-red-50 text-brand text-xs font-sans font-medium px-3 py-1 rounded-full">
          Non-refundable
        </span>
      </div>
    ))}

    <div className="border-t border-gray-100 pt-5 flex justify-between items-center">
      <span className="text-base font-bold font-sans text-gray-900">Total price</span>
      <span className="text-base font-bold font-sans text-gray-900">${totalPrice.toLocaleString()}</span>
    </div>
  </div>
);

export default OrderSummary;
