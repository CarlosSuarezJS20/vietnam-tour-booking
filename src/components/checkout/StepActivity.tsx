"use client";

import { useState } from "react";
import Image from "next/image";
import type { GqlCartItem } from "@/types/graphql";

export type TravelerName = { firstName: string; lastName: string };

type Props = {
  item:          GqlCartItem;
  initialNames?: TravelerName[];
  onComplete:    (names: TravelerName[]) => void;
};

const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-900 focus:outline-none focus:border-gray-400 transition-colors";
const labelClass = "block text-xs font-sans text-gray-500 mb-1";

const StepActivity = ({ item, initialNames, onComplete }: Props) => {
  const [names, setNames] = useState<TravelerName[]>(
    initialNames?.length
      ? initialNames
      : Array.from({ length: item.partySize }, () => ({ firstName: "", lastName: "" }))
  );

  const isValid = names.every((n) => n.firstName.trim() && n.lastName.trim());

  const updateName = (i: number, field: keyof TravelerName, value: string) =>
    setNames((prev) => prev.map((n, idx) => idx === i ? { ...n, [field]: value } : n));

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={item.product.imageUrl}
            alt={item.product.title}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold font-sans text-gray-900 mb-1 line-clamp-2">{item.product.title}</p>
          <p className="text-xs font-sans text-gray-500">
            {item.partySize} {item.partySize === 1 ? "Adult" : "Adults"}
          </p>
          <p className="text-xs font-sans text-gray-500">{item.date} • {item.time}</p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <span className="inline-block bg-red-50 text-brand text-xs font-sans font-medium px-3 py-1 rounded-full">
          Non-refundable
        </span>
      </div>

      <div className="space-y-6 border-t border-gray-100 pt-4">
        {names.map((name, i) => (
          <div key={i}>
            <p className="text-sm font-bold font-sans text-gray-900 mb-3">
              Traveler {i + 1} (Adult)
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First name</label>
                <input
                  type="text"
                  value={name.firstName}
                  onChange={(e) => updateName(i, "firstName", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last name</label>
                <input
                  type="text"
                  value={name.lastName}
                  onChange={(e) => updateName(i, "lastName", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            {i < names.length - 1 && <div className="border-t border-gray-100 mt-6" />}
          </div>
        ))}
      </div>

      <button
        onClick={() => isValid && onComplete(names)}
        disabled={!isValid}
        className="w-full bg-gray-900 text-white text-sm font-bold font-sans py-4 rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
};

export default StepActivity;
