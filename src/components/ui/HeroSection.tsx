import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-emerald-700 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&q=80)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
          Discover the Beauty of Vietnam
        </h1>
        <p className="mt-4 text-lg text-emerald-100 max-w-xl">
          Handcrafted tours through ancient towns, misty mountains, and emerald
          bays. Let us take care of everything.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/tours"
            className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Explore Tours
          </Link>
          <Link
            href="#tours"
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            See What&apos;s Popular
          </Link>
        </div>
      </div>
    </section>
  );
}
