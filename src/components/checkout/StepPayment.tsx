"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type PayFormProps = {
  totalPrice: number;
  onSuccess:  (paymentIntentId: string) => void;
};

const PayForm = ({ totalPrice, onSuccess }: PayFormProps) => {
  const stripe   = useStripe();
  const elements = useElements();
  const [error,  setError]  = useState<string | null>(null);
  const [paying, setPaying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setPaying(true);
    setError(null);

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (result.error) {
      setError(result.error.message ?? "Payment failed. Please try again.");
      setPaying(false);
      return;
    }

    if (result.paymentIntent?.status === "succeeded") {
      onSuccess(result.paymentIntent.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-base font-bold font-sans text-gray-900">Pay with</p>
      <PaymentElement />
      {error && (
        <p className="text-sm text-red-500 font-sans">{error}</p>
      )}
      <p className="text-xs text-gray-400 font-sans leading-relaxed">
        Clicking &apos;Book Now&apos; confirms your agreement to our Terms and Privacy Statement,
        and your direct contract with the supplier.
      </p>
      <button
        type="submit"
        disabled={paying || !stripe}
        className="w-full bg-brand text-white text-sm font-bold font-sans py-4 rounded-xl hover:bg-brand-dark active:scale-95 active:brightness-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {paying ? "Processing..." : `Book Now — $${totalPrice.toLocaleString()}`}
      </button>
    </form>
  );
};

type Props = {
  clientSecret: string;
  totalPrice:   number;
  onSuccess:    (paymentIntentId: string) => void;
};

const StepPayment = ({ clientSecret, totalPrice, onSuccess }: Props) => (
  <Elements stripe={stripePromise} options={{ clientSecret }}>
    <PayForm totalPrice={totalPrice} onSuccess={onSuccess} />
  </Elements>
);

export default StepPayment;
