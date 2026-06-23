import { FiAnchor, FiX } from "react-icons/fi";
import type { FormData } from "../BookingForm";

const OPTIONS = [
  {
    id: true,
    Icon: FiAnchor,
    label: "Yes, add a cruise",
    description: "Include a Ha Long Bay cruise — overnight or multi-day through iconic limestone karsts.",
  },
  {
    id: false,
    Icon: FiX,
    label: "No thanks, tours only",
    description: "Skip the cruise and focus on land-based tours and experiences.",
  },
] as const;

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void }

const StepCruise = ({ formData, onChange }: Props) => {
  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">Would you like to add a cruise?</h3>
      <p className="text-gray-400 text-sm font-sans mb-6">Ha Long Bay is one of Vietnam's most iconic experiences.</p>
      <div className="flex flex-col gap-3">
        {OPTIONS.map(({ id, Icon, label, description }) => {
          const active = formData.includeCruise === id;
          return (
            <button
              key={String(id)}
              onClick={() => onChange({ includeCruise: id })}
              className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-colors ${
                active ? "border-brand bg-brand/5" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                active ? "bg-brand text-white" : "bg-gray-100 text-gray-400"
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className={`text-sm font-semibold font-sans ${active ? "text-brand" : "text-gray-700"}`}>{label}</p>
                <p className="text-gray-400 text-xs font-sans mt-0.5 leading-relaxed">{description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepCruise;
