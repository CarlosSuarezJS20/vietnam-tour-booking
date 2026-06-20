"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useApolloClient } from "@apollo/client/react";

const ConfirmedContent = () => {
  const params          = useSearchParams();
  const paymentIntentId = params.get("payment_intent");
  const apollo = useApolloClient();

  useEffect(() => {
    apollo.cache.evict({ fieldName: "cart" });
    apollo.cache.gc();
  }, [apollo]);

  return (
    <main className="min-h-screen bg-stone-50 pt-[var(--navbar-height)] pb-24 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-3">Booking confirmed!</h1>
        <p className="text-gray-500 font-sans text-sm mb-2">
          Your booking is confirmed and your spot is reserved.
        </p>
        {paymentIntentId && (
          <p className="text-xs text-gray-400 font-sans mb-8 font-mono">
            Ref: {paymentIntentId}
          </p>
        )}
        <Link
          href="/tours"
          className="inline-block bg-brand text-white text-sm font-bold font-sans px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors"
        >
          Browse more tours
        </Link>
      </div>
    </main>
  );
};

export default function ConfirmedPage() {
  return (
    <Suspense>
      <ConfirmedContent />
    </Suspense>
  );
}
