"use client";

type Props = {
  number: number;
  title: string;
  isOpen: boolean;
  isLocked: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const CheckoutStep = ({ number, title, isOpen, isLocked, onClick, children }: Props) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
    <button
      onClick={onClick}
      disabled={isLocked}
      className="w-full flex items-center gap-4 px-6 py-5 text-left active:bg-gray-50 transition-colors disabled:cursor-not-allowed"
    >
      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
        isOpen ? "bg-gray-900 text-white" : "border-2 border-gray-300 text-gray-400"
      }`}>
        {number}
      </span>
      <span className={`font-sans font-semibold text-base transition-colors ${
        isOpen ? "text-gray-900" : "text-gray-400"
      }`}>
        {title}
      </span>
    </button>

    {isOpen && (
      <div className="px-6 pb-6 border-t border-gray-100">
        <div className="pt-5">{children}</div>
      </div>
    )}
  </div>
);

export default CheckoutStep;
