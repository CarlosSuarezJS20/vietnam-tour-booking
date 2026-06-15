import { FiCheck } from "react-icons/fi";
import type { FormData } from "../BookingForm";

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void; onRestart: () => void }

const CONTACT_LABELS = { phone: "Phone Call", email: "Email", whatsapp: "WhatsApp", "": "—" };

export default function StepConfirmed({ formData, onRestart }: Props) {
  const rows = [
    { label: "Tour type",     value: formData.tourType || "—" },
    { label: "Region",        value: formData.region || "—" },
    { label: "Cities",        value: formData.cities.length ? formData.cities.join(", ") : "Any" },
    { label: "Departure",     value: formData.departureDate || "—" },
    { label: "Duration",      value: `${formData.nights} nights` },
    { label: "Travellers",    value: `${formData.travellers} ${formData.travellers === 1 ? "person" : "people"}` },
    { label: "Name",          value: formData.name || "—" },
    { label: "Email",         value: formData.email || "—" },
    { label: "Phone",         value: formData.phone || "—" },
    { label: "Contact via",   value: CONTACT_LABELS[formData.contactPreference] },
  ];

  return (
    <div>
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center mb-4">
          <FiCheck className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">You're all set!</h3>
        <p className="text-gray-400 text-sm font-sans max-w-sm">
          Thanks {formData.name ? formData.name.split(" ")[0] : "for reaching out"}. Our team will be in touch shortly to start planning your perfect Vietnam trip.
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between py-3">
            <span className="text-gray-400 text-xs uppercase tracking-wider font-sans">{label}</span>
            <span className="text-gray-900 text-sm font-sans capitalize">{value}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="mt-8 w-full text-center text-gray-400 hover:text-gray-700 text-sm font-sans transition-colors underline underline-offset-4"
      >
        Start over
      </button>
    </div>
  );
}
