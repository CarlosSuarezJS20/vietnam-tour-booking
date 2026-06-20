import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-[var(--navbar-height)] border-b border-gray-100 bg-white fixed top-0 left-0 right-0 z-50 flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <Link href="/">
            <Image
              src="/travel-vietnam-logo-dark.svg"
              alt="Travel Vietnam"
              width={140}
              height={42}
              priority
            />
          </Link>
          <Link
            href="/tours"
            className="flex items-center gap-2 text-sm font-sans text-gray-500 hover:text-gray-900 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to tours
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}
