import { FiCheck } from "react-icons/fi";

interface Step { label: string }
interface Props { step: number; steps: Step[] }

const StepIndicator = ({ step, steps }: Props) => {
  return (
    <div className="w-full flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
      {steps.map((s, i) => {
        const num = i + 1;
        const isComplete = num < step;
        const isActive = num === step;
        const isUpcoming = num > step;

        return (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold font-sans border-2 transition-colors flex-shrink-0 ${
              isComplete ? "bg-brand border-brand text-white"
              : isActive  ? "border-brand text-brand bg-white"
              :              "border-gray-300 text-gray-400 bg-white"
            }`}>
              {isComplete ? <FiCheck className="w-3 h-3 md:w-4 md:h-4" /> : num}
            </div>
            <span className={`text-[7px] md:text-[10px] uppercase tracking-wider font-sans text-center leading-tight transition-colors line-clamp-2 w-14 md:w-16 ${
              isActive   ? "text-gray-700"
              : isComplete ? "text-brand"
              :              "text-gray-400"
            }`}>
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default StepIndicator;
