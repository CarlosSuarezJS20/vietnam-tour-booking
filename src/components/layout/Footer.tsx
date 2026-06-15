import Image from "next/image";
import { FiInstagram, FiFacebook, FiYoutube, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { footerColumns, footerContact, footerLegal, footerSocials } from "@/data/footer";

const socialIcons = {
  Instagram: FiInstagram,
  Facebook: FiFacebook,
  YouTube: FiYoutube,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">


      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <Image
              src="/travel-vietnam-logo-white.svg"
              alt="Travel Vietnam"
              width={140}
              height={42}
            />
            <p className="text-white/50 text-sm font-sans leading-relaxed">
              Handcrafted Vietnam experiences — from Ha Long Bay to the Mekong Delta.
            </p>
            <div className="flex items-center gap-5">
              {footerSocials.map(({ label, href }) => {
                const Icon = socialIcons[label as keyof typeof socialIcons];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Cols 2 & 3 — Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-xs tracking-widest uppercase font-sans mb-6">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-brand text-sm font-sans transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase font-sans mb-6">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                <address className="not-italic text-white/60 text-sm font-sans leading-relaxed">
                  {footerContact.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-brand flex-shrink-0" />
                <a
                  href={`tel:${footerContact.phone}`}
                  className="text-white/60 hover:text-brand text-sm font-sans transition-colors"
                >
                  {footerContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-brand flex-shrink-0" />
                <a
                  href={`mailto:${footerContact.email}`}
                  className="text-white/60 hover:text-brand text-sm font-sans transition-colors"
                >
                  {footerContact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-sans">Travel Vietnam 2026</p>

          <ul className="flex items-center gap-4">
            {footerLegal.map((item, i) => (
              <li key={item.label} className="flex items-center gap-4">
                <a
                  href={item.href}
                  className="text-white/40 hover:text-white/70 text-xs font-sans transition-colors"
                >
                  {item.label}
                </a>
                {i < footerLegal.length - 1 && (
                  <span className="text-white/20 text-xs">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
