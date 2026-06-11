import Image from "next/image";
import GlobeArcs from "./GlobeArcs";

export default function HeroSection({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Image
        src="https://asiaeyestravel.com/uploads/source/banner/af4b2f8bed34616a3825.webp"
        alt="Vietnam landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />
      <GlobeArcs />

      <div className="absolute inset-0 z-10 flex items-start text-white px-10 md:px-16 pt-32 md:pt-40">
        <div className="flex flex-col items-start">
          <Image src="/travel-vietnam-icon-white.svg" alt="Travel Vietnam" width={48} height={48} className="mb-3 opacity-85 self-center hidden md:block" />
          <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-none mb-4 font-display">
            Discover <span className="font-bold">Vietnam</span>
          </h1>
          <p className="italic text-white/70 text-sm md:text-base mb-8 max-w-sm font-sans">
            Premium, custom-crafted Vietnam experiences built on years of local expertise.
          </p>
          <button className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-9 py-3.5 tracking-wider transition-colors">
            Explore Our Tours
          </button>
        </div>
      </div>

      {children && (
        <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 z-20 w-full max-w-lg px-4 md:px-0">
          {children}
        </div>
      )}
    </>
  );
}
