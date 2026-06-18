import type { FormData } from "../BookingForm";

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void }

const inputCls = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm font-sans placeholder-gray-300 focus:outline-none focus:border-brand transition-colors";
const labelCls = "block text-gray-500 text-xs uppercase tracking-wider font-sans mb-2";

const StepDates = ({ formData, onChange }: Props) => {
  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">When are you travelling?</h3>
      <p className="text-gray-400 text-sm font-sans mb-6">Let us know your departure date and how long you'd like to stay.</p>

      <div className="flex flex-col gap-5">
        <div>
          <label className={labelCls}>Departure date</label>
          <input
            type="date"
            value={formData.departureDate}
            onChange={(e) => onChange({ departureDate: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Number of nights</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onChange({ nights: Math.max(1, formData.nights - 1) })}
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors text-lg font-sans"
            >
              −
            </button>
            <span className="text-gray-900 text-2xl font-bold font-sans w-12 text-center">{formData.nights}</span>
            <button
              onClick={() => onChange({ nights: formData.nights + 1 })}
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors text-lg font-sans"
            >
              +
            </button>
            <span className="text-gray-400 text-sm font-sans">nights</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepDates;
