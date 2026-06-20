"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import CartIconButton from "@/components/cart/CartIconButton";
import PillButton from "@/components/ui/PillButton";

const ToursLayout = ({ children }: { children: React.ReactNode }) => {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 60);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-10 py-4 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        <Link
          href="/"
          className="md:hidden w-11 h-11 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center transition-all hover:bg-gray-100 active:bg-gray-200 active:scale-95"
        >
          <FiArrowLeft className="w-5 h-5" />
        </Link>

        <Link
          href="/"
          className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand transition-colors font-sans"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/travel-vietnam-icon-dark.svg"
            alt="Travel Vietnam"
            width={36}
            height={36}
            priority
            className="md:hidden"
          />
          <Image
            src="/travel-vietnam-logo-dark.svg"
            alt="Travel Vietnam"
            width={120}
            height={36}
            priority
            className="hidden md:block"
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <CartIconButton dark />
          <PillButton variant="brand" className="hidden md:inline-flex">My Bookings</PillButton>
        </div>
      </header>

      <div className="pt-[65px]">
        {children}
      </div>
    </>
  );
}

export default ToursLayout;
