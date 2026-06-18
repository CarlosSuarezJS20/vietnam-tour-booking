"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutItems } from "@/data/about";

const RADIUS = 130;
const SIZE = 340;

const AboutSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="about-section" className="bg-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-8">
          <h2 className="font-display text-3xl font-bold text-brand leading-tight">
            A experienced team of at your service
          </h2>
          <div className="flex flex-wrap gap-2">
            {aboutItems.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActive(i)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-sans border transition-colors ${
                  active === i
                    ? "bg-brand border-brand text-white"
                    : "bg-white border-gray-300 text-gray-500"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <p
            key={active}
            className="text-gray-600 text-base leading-relaxed font-sans animate-fadeIn"
          >
            {aboutItems[active].description}
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block">

          {/* Title — full width, centred */}
          <h2 className="font-display text-4xl md:text-6xl font-bold text-brand leading-tight text-center mb-16">
            An Experienced Team At Your Service
          </h2>

          {/* Two columns */}
          <div className="flex items-center gap-16">

            {/* Left — radial nav */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="relative" style={{ width: SIZE, height: SIZE }}>

                <div className="absolute inset-0 rounded-full border border-dashed border-gray-300" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/travel-vietnam-icon-dark.svg"
                    alt="Travel Vietnam"
                    width={80}
                    height={80}
                  />
                </div>

                {aboutItems.map((item, i) => {
                  const rad = (item.angle * Math.PI) / 180;
                  const x = parseFloat((RADIUS * Math.cos(rad)).toFixed(3));
                  const y = parseFloat((RADIUS * Math.sin(rad)).toFixed(3));
                  const isActive = active === i;

                  return (
                    <button
                      key={item.title}
                      onClick={() => setActive(i)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <span
                        className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider whitespace-nowrap font-sans border transition-colors ${
                          isActive
                            ? "bg-brand border-brand text-white"
                            : "bg-white border-gray-300 text-gray-500 group-hover:border-gray-500 group-hover:text-gray-700"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Right — description */}
            <div className="flex-1 flex items-center justify-center">
              <p
                key={active}
                className="text-gray-600 text-2xl leading-relaxed font-sans animate-fadeIn text-center max-w-lg"
              >
                {aboutItems[active].description}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
