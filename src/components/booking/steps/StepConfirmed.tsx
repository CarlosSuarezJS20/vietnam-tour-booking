"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck, FiRefreshCw } from "react-icons/fi";
import { useSubmitEnquiryMutation } from "@/graphql/hooks";
import type { FormData } from "../BookingForm";

interface Props { formData: FormData; onChange: (p: Partial<FormData>) => void; onRestart: () => void }

const CONTACT_LABELS: Record<string, string> = {
  phone: "Phone Call", email: "Email", whatsapp: "WhatsApp", "": "—",
};

const StepConfirmed = ({ formData, onRestart }: Props) => {
  const { submitEnquiry } = useSubmitEnquiryMutation();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fired = useRef(false);

  const doSubmit = () => {
    setStatus("loading");
    setErrorMsg(null);
    submitEnquiry({
      tourType:          formData.tourType,
      region:            formData.region,
      cities:            formData.cities,
      departureDate:     formData.departureDate,
      nights:            formData.nights,
      includeCruise:     formData.includeCruise as boolean,
      extras:            formData.extras || undefined,
      name:              formData.name,
      email:             formData.email,
      phone:             formData.phone,
      travellers:        formData.travellers,
      contactPreference: formData.contactPreference,
    })
      .then(() => setStatus("success"))
      .catch((e: unknown) => {
        setErrorMsg(e instanceof Error ? e.message : "Something went wrong. Please try again.");
        setStatus("error");
      });
  };

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    doSubmit();
  }, []);

  const rows = [
    { label: "Tour type",   value: formData.tourType || "—" },
    { label: "Region",      value: formData.region || "—" },
    { label: "Departure",   value: formData.departureDate || "—" },
    { label: "Duration",    value: `${formData.nights} nights` },
    { label: "Cruise",      value: formData.includeCruise ? "Yes" : "No" },
    { label: "Travellers",  value: `${formData.travellers} ${formData.travellers === 1 ? "person" : "people"}` },
    { label: "Name",        value: formData.name || "—" },
    { label: "Phone",       value: formData.phone || "—" },
    { label: "Contact via", value: CONTACT_LABELS[formData.contactPreference] ?? "—" },
  ];

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-10 h-10 border-2 border-brand border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm font-sans">Submitting your request…</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <p className="text-gray-700 text-sm font-sans">{errorMsg}</p>
        <button
          onClick={doSubmit}
          className="flex items-center gap-2 text-brand text-sm font-semibold font-sans"
        >
          <FiRefreshCw className="w-4 h-4" /> Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mb-4">
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
};

export default StepConfirmed;
