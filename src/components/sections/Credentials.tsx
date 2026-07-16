import Image from "next/image";
import { footerAwards } from "@/data/footer";

const Credentials = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 xl:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">

        {/* Left — title and copy */}
        <div className="flex-shrink-0 md:w-72">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand mb-4 font-display">
            Our Credentials
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-sans leading-relaxed">
            Recognised by the industry's leading travel organisations and trusted by thousands of travellers worldwide.
          </p>
        </div>

        {/* Right — logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 flex-1">
          {footerAwards.map((award, i, arr) => (
            <div
              key={award.src}
              className={`flex flex-col items-center gap-3 ${
                i === arr.length - 1 && arr.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1 mx-auto w-1/2 sm:w-full"
                  : ""
              }`}
            >
              <div className="relative h-12 md:h-20 w-full">
                <Image
                  src={award.src}
                  alt={award.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              {(award.name || award.description) && (
                <div className="text-center">
                  {award.name && <p className="text-gray-900 text-sm font-semibold font-sans">{award.name}</p>}
                  {award.description && <p className="text-gray-500 text-xs font-sans mt-1">{award.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Credentials;
