"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckoutStep from "@/components/checkout/CheckoutStep";
import StepContact from "@/components/checkout/StepContact";
import StepActivity from "@/components/checkout/StepActivity";
import StepPayment from "@/components/checkout/StepPayment";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useGetCartQuery } from "@/graphql/hooks";
import type { ContactData } from "@/components/checkout/StepContact";
import type { TravelerName } from "@/components/checkout/StepActivity";
import type { GqlCartItem } from "@/types/graphql";

export default function CheckoutPage() {
  const router = useRouter();
  const { data: cart, loading } = useGetCartQuery();

  const [openStep,       setOpenStep]       = useState<1 | 2 | 3>(1);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [contactData,    setContactData]    = useState<ContactData | null>(null);
  const [travelerNames,  setTravelerNames]  = useState<TravelerName[]>([]);
  const [clientSecret,   setClientSecret]   = useState<string | null>(null);
  const [secretLoading,  setSecretLoading]  = useState(false);

  const items      = cart?.items ?? [];
  const totalPrice = cart?.totalPrice ?? 0;
  const firstItem  = items[0] as GqlCartItem | undefined;

  useEffect(() => {
    if (!loading && items.length === 0) {
      router.replace("/tours");
    }
  }, [loading, items, router]);

  const complete = (step: 1 | 2) => {
    setCompletedSteps((prev) => new Set(prev).add(step));
    setOpenStep((step + 1) as 2 | 3);
  };

  const handleContactComplete = (data: ContactData) => {
    setContactData(data);
    if (data.isTraveler) {
      setTravelerNames((prev) => {
        const updated = [...prev];
        updated[0] = { firstName: data.firstName, lastName: data.lastName };
        return updated;
      });
    }
    complete(1);
  };

  const handleActivityComplete = async (names: TravelerName[]) => {
    setTravelerNames(names);
    complete(2);
    setSecretLoading(true);
    const res = await fetch("/api/stripe/create-payment-intent", { method: "POST" });
    const { clientSecret } = await res.json();
    setClientSecret(clientSecret);
    setSecretLoading(false);
  };

  const handlePaymentSuccess = async (paymentIntentId: string) => {
    const res = await fetch("/api/stripe/confirm-order", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ paymentIntentId, contactData, travelerNames }),
    });
    if (!res.ok) {
      const { error } = await res.json();
      console.error("confirm-order failed:", error);
      return;
    }
    router.push(`/checkout/confirmed?payment_intent=${paymentIntentId}`);
  };

  const goToStep = (step: 1 | 2 | 3) => {
    if (step === 1 || completedSteps.has(step - 1)) setOpenStep(step);
  };

  if (loading || !firstItem) return null;

  return (
    <main className="min-h-screen bg-stone-50 pt-[var(--navbar-height)] pb-24">
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* Order summary — top on mobile, right column on desktop */}
          <div className="lg:order-2">
            <OrderSummary items={items as GqlCartItem[]} totalPrice={totalPrice} />
          </div>

          {/* Accordion steps — below summary on mobile, left column on desktop */}
          <div className="space-y-3 lg:order-1">
            <CheckoutStep
              number={1}
              title="Contact details"
              isOpen={openStep === 1}
              isLocked={false}
              onClick={() => goToStep(1)}
            >
              <StepContact initialData={contactData ?? undefined} onComplete={handleContactComplete} />
            </CheckoutStep>

            <CheckoutStep
              number={2}
              title="Activity details"
              isOpen={openStep === 2}
              isLocked={!completedSteps.has(1)}
              onClick={() => goToStep(2)}
            >
              <StepActivity item={firstItem} initialNames={travelerNames} onComplete={handleActivityComplete} />
            </CheckoutStep>

            <CheckoutStep
              number={3}
              title="Payment details"
              isOpen={openStep === 3}
              isLocked={!completedSteps.has(2)}
              onClick={() => goToStep(3)}
            >
              {secretLoading && (
                <p className="text-sm text-gray-400 font-sans py-4">Loading payment form…</p>
              )}
              {clientSecret && (
                <StepPayment
                  clientSecret={clientSecret}
                  totalPrice={totalPrice}
                  onSuccess={handlePaymentSuccess}
                />
              )}
            </CheckoutStep>
          </div>

        </div>
      </div>
    </main>
  );
}
