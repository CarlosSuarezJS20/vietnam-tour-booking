import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import type { FormData } from "../BookingForm";

const OPTIONS = [
  { id: "phone",    label: "Phone Call",  description: "We'll call you at a time that suits you.", Icon: FiPhone },
  { id: "email",    label: "Email",       description: "We'll send a detailed itinerary to your inbox.", Icon: FiMail },
  { id: "whatsapp", label: "WhatsApp",    description: "Chat with our team directly, with photos and maps.", Icon: FiMessageSquare },
] as const;

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void }

const StepContact = ({ formData, onChange }: Props) => {
  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">How would you like to discuss your trip?</h3>
      <p className="text-gray-400 text-sm font-sans mb-6">Choose how our team gets back to you.</p>
      <div className="flex flex-col gap-3">
        {OPTIONS.map(({ id, label, description, Icon }) => {
          const active = formData.contactPreference === id;
          return (
            <button
              key={id}
              onClick={() => onChange({ contactPreference: id })}
              className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-colors ${
                active ? "border-brand bg-brand/5" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                active ? "bg-brand text-white" : "bg-gray-100 text-gray-400"
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-sm font-semibold font-sans ${active ? "text-brand" : "text-gray-700"}`}>{label}</p>
                <p className="text-gray-400 text-xs font-sans mt-0.5">{description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StepContact;
