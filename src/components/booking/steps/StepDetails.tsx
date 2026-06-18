import type { FormData } from "../BookingForm";

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void }

const inputCls = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm font-sans placeholder-gray-300 focus:outline-none focus:border-brand transition-colors";
const labelCls = "block text-gray-500 text-xs uppercase tracking-wider font-sans mb-2";

const StepDetails = ({ formData, onChange }: Props) => {
  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold font-sans mb-1">Your details</h3>
      <p className="text-gray-400 text-sm font-sans mb-6">We'll use these to get back to you.</p>

      <div className="flex flex-col gap-5">
        <div>
          <label className={labelCls}>Full name</label>
          <input
            type="text"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={(e) => onChange({ name: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Email address</label>
          <input
            type="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Phone number</label>
          <input
            type="tel"
            placeholder="+44 7700 900000"
            value={formData.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Number of travellers</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onChange({ travellers: Math.max(1, formData.travellers - 1) })}
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors text-lg font-sans"
            >
              −
            </button>
            <span className="text-gray-900 text-2xl font-bold font-sans w-12 text-center">{formData.travellers}</span>
            <button
              onClick={() => onChange({ travellers: formData.travellers + 1 })}
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:border-brand hover:text-brand transition-colors text-lg font-sans"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepDetails;
