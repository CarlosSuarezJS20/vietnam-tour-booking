import Image from "next/image";
import GlobeArcs from "./GlobeArcs";

export default function HeroSection() {
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

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-6">
        <Image src="/travel-vietnam-icon-white.svg" alt="Travel Vietnam icon" width={48} height={48} className="mb-3 opacity-85" />
        <p className="text-2xl tracking-[0.45em] font-medium mb-3 opacity-90">TRAVEL</p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-wide leading-none mb-12 font-display">
          Vietnam
        </h1>
        <button className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-9 py-3.5 tracking-wider transition-colors">
          Explore Our Tours
        </button>
      </div>
    </>
  );
}
