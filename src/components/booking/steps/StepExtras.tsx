import type { FormData } from "../BookingForm";

const MAX = 1000;

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void }

const StepExtras = ({ formData, onChange }: Props) => {
  const count = formData.extras.length;

  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">Any special requirements?</h3>
      <p className="text-gray-400 text-sm font-sans mb-6">Dietary needs, accessibility, special occasions — anything we should know. This is optional.</p>
      <div className="relative">
        <textarea
          value={formData.extras}
          onChange={(e) => onChange({ extras: e.target.value.slice(0, MAX) })}
          placeholder="e.g. vegetarian meals, wheelchair accessible transport, celebrating an anniversary…"
          rows={5}
          className="w-full resize-none rounded-xl border border-gray-200 p-4 text-sm font-sans text-gray-900 placeholder-gray-300 focus:outline-none focus:border-brand transition-colors"
        />
        <span className={`absolute bottom-3 right-4 text-xs font-sans ${count >= MAX ? "text-red-400" : "text-gray-300"}`}>
          {count} / {MAX}
        </span>
      </div>
    </div>
  );
};

export default StepExtras;
