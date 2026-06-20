"use client";

import { useState } from "react";

export type ContactData = {
  firstName:  string;
  lastName:   string;
  email:      string;
  isTraveler: boolean;
};

type Props = {
  initialData?: ContactData;
  onComplete:   (data: ContactData) => void;
};

const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-900 focus:outline-none focus:border-gray-400 transition-colors";
const labelClass = "block text-xs font-sans text-gray-500 mb-1";

const StepContact = ({ initialData, onComplete }: Props) => {
  const [data, setData] = useState<ContactData>(
    initialData ?? { firstName: "", lastName: "", email: "", isTraveler: false }
  );

  const isValid = data.firstName.trim() && data.lastName.trim() && data.email.trim();

  const set = (field: keyof ContactData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First name</label>
          <input type="text" value={data.firstName} onChange={set("firstName")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Last name</label>
          <input type="text" value={data.lastName} onChange={set("lastName")} className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Email</label>
        <input type="email" value={data.email} onChange={set("email")} className={inputClass} />
      </div>
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={data.isTraveler}
          onChange={(e) => setData((prev) => ({ ...prev, isTraveler: e.target.checked }))}
          className="w-4 h-4 rounded border-gray-300 accent-brand cursor-pointer"
        />
        <span className="text-sm font-sans text-gray-700">I am also travelling</span>
      </label>
      <button
        onClick={() => isValid && onComplete(data)}
        disabled={!isValid}
        className="w-full bg-gray-900 text-white text-sm font-bold font-sans py-4 rounded-xl mt-2 hover:bg-gray-700 active:scale-95 active:brightness-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
};

export default StepContact;
