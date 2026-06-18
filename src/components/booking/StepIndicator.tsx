import { FiCheck } from "react-icons/fi";

interface Step { label: string }
interface Props { step: number; steps: Step[] }

const StepIndicator = ({ step, steps }: Props) => {
  return (
    <div className="flex items-start">
      {steps.map((s, i) => {
        const num = i + 1;
        const isComplete = num < step;
        const isActive = num === step;
        const isUpcoming = num > step;

        return (
          <div key={s.label} className="flex items-start flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2 min-w-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold font-sans border-2 transition-colors flex-shrink-0 ${
                isComplete ? "bg-brand border-brand text-white"
                : isActive  ? "border-brand text-brand bg-white"
                :              "border-gray-300 text-gray-400 bg-white"
              }`}>
                {isComplete ? <FiCheck className="w-4 h-4" /> : num}
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-sans text-center leading-tight transition-colors ${
                isActive   ? "text-gray-700"
                : isComplete ? "text-brand"
                :              "text-gray-400"
              }`}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 mt-[18px] transition-colors ${
                isComplete ? "bg-brand" : "bg-gray-200"
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StepIndicator;
