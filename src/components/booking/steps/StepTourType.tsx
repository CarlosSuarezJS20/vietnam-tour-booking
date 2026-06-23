import { FiGlobe, FiCompass, FiMap, FiEdit2 } from "react-icons/fi";
import type { FormData } from "../BookingForm";

const TYPES = [
  { id: "cultural",  label: "Cultural Tours",        description: "Ancient temples, historic sites and local traditions.", Icon: FiGlobe },
  { id: "adventure", label: "Adventure Tours",        description: "Trekking, motorbike trails and off-the-beaten-track experiences.", Icon: FiCompass },
  { id: "city",      label: "City Day Tours",         description: "Guided half or full-day tours of Hanoi, Hoi An and more.", Icon: FiMap },
  { id: "custom",    label: "Custom / Tailor-made",   description: "Tell us your dream trip and we'll design it from scratch.", Icon: FiEdit2 },
];

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void }

const StepTourType = ({ formData, onChange }: Props) => {
  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">What kind of tour?</h3>
      <p className="text-gray-400 text-sm font-sans mb-6">Select the type that best fits your trip.</p>
      <div className="flex flex-col gap-3">
        {TYPES.map(({ id, label, description, Icon }) => {
          const active = formData.tourType === id;
          return (
            <button
              key={id}
              onClick={() => onChange({ tourType: id })}
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
}

export default StepTourType;
