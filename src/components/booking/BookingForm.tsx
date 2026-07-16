"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import StepIndicator from "./StepIndicator";
import StepTourType from "./steps/StepTourType";
import StepDestination from "./steps/StepDestination";
import StepDates from "./steps/StepDates";
import StepCruise from "./steps/StepCruise";
import StepExtras from "./steps/StepExtras";
import StepDetails from "./steps/StepDetails";
import StepContact from "./steps/StepContact";
import StepConfirmed from "./steps/StepConfirmed";

export type FormData = {
  tourType: string;
  region: string;
  cities: string[];
  departureDate: string;
  nights: number;
  includeCruise: boolean | null;
  extras: string;
  name: string;
  email: string;
  phone: string;
  travellers: number;
  contactPreference: "phone" | "email" | "whatsapp" | "";
};

const STEPS = [
  { label: "Tour Type" },
  { label: "Destination" },
  { label: "Dates" },
  { label: "Cruise" },
  { label: "Extras" },
  { label: "Your Details" },
  { label: "Contact" },
  { label: "Confirmed" },
];

const INITIAL: FormData = {
  tourType: "",
  region: "",
  cities: [],
  departureDate: "",
  nights: 7,
  includeCruise: null,
  extras: "",
  name: "",
  email: "",
  phone: "",
  travellers: 2,
  contactPreference: "",
};

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL);

  const update = (patch: Partial<FormData>) =>
    setFormData((prev) => ({ ...prev, ...patch }));

  const canContinue = () => {
    if (step === 1) return !!formData.tourType;
    if (step === 2) return !!formData.region;
    if (step === 3) return !!formData.departureDate;
    if (step === 4) return formData.includeCruise !== null;
    if (step === 5) return true;
    if (step === 6) return !!formData.name && !!formData.email;
    if (step === 7) return !!formData.contactPreference;
    return true;
  };

  const stepProps = { formData, onChange: update };

  return (
    <section className="bg-stone-50 py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-10">

        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand leading-tight mb-4">
            Plan Your Trip
          </h2>
          <p className="text-gray-500 font-sans text-base">
            Tell us what you're looking for and we'll craft the perfect itinerary.
          </p>
        </div>

        <StepIndicator step={step} steps={STEPS} />

        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 md:p-10 mt-8 min-h-[540px] flex flex-col justify-between">
          <div>
            {step === 1 && <StepTourType {...stepProps} />}
            {step === 2 && <StepDestination {...stepProps} />}
            {step === 3 && <StepDates {...stepProps} />}
            {step === 4 && <StepCruise {...stepProps} />}
            {step === 5 && <StepExtras {...stepProps} />}
            {step === 6 && <StepDetails {...stepProps} />}
            {step === 7 && <StepContact {...stepProps} />}
            {step === 8 && <StepConfirmed {...stepProps} onRestart={() => { setStep(1); setFormData(INITIAL); }} />}
          </div>

          {step < 8 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-sans transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <FiArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setStep((s) => Math.min(8, s + 1))}
                disabled={!canContinue()}
                className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-8 py-3 rounded-full font-sans transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default BookingForm;
