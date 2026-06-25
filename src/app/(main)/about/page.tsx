"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { aboutItems } from "@/data/about";

/* ─── Wheel ─────────────────────────────────────────── */
const RADIUS = 130;
const SIZE   = 340;

/* ─── Value cards ───────────────────────────────────── */
const cards = [
  {
    num: 1,
    src: "https://asiaeyestravel.com/uploads/source/blog/phuquoc/bai-tam-phu-quoc.jpg",
    alt: "Sapa rice terraces",
    title: "Proactive Anticipation",
    body: "We solve problems before they arise by analysing every variable of a journey — from shifting weather patterns to local geopolitical updates.",
  },
  {
    num: 2,
    src: "https://asiaeyestravel.com/uploads/source/blog/ninhbinh/chua-bich-dong-ninhbinh.jpg",
    alt: "Mekong Delta experience",
    title: "Local Excellence",
    body: "Our guides are born in Vietnam. They know the secret corners, family restaurants, and hidden temples that no guidebook will ever list.",
  },
  {
    num: 3,
    src: "https://asiaeyestravel.com/uploads/source/blog/baitulong/thiencanhson-private-cruise.jpg",
    alt: "Ha Long Bay at dawn",
    title: "24/7 Partnership",
    body: "We operate on Traveller Time. Our team is available around the clock, ensuring that no matter your time zone, a Travel Vietnam expert is always a step ahead.",
  },
];

/* ─── Gallery ───────────────────────────────────────── */
const gallery = [
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80", alt: "Ha Long Bay", label: "Ha Long Bay",    tall: true  },
  { src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=900&q=80", alt: "Hoi An",     label: "Hoi An",          tall: false },
  { src: "https://images.unsplash.com/photo-1539510570869-f5ce7fba4f63?w=900&q=80", alt: "Sapa",       label: "Sapa Highlands",  tall: false },
  { src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80", alt: "Ninh Binh",  label: "Ninh Binh",       tall: true  },
  { src: "https://images.unsplash.com/photo-1552992898-d54099a45484?w=900&q=80", alt: "Mekong",     label: "Mekong Delta",    tall: false },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80", alt: "Hue",        label: "Hue Citadel",     tall: false },
];

/* ─── Scroll-reveal ─────────────────────────────────── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Gallery tile ──────────────────────────────────── */
function Tile({ photo, delay }: { photo: (typeof gallery)[0]; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, minHeight: photo.tall ? 440 : 210 }}
      className={`relative overflow-hidden transition-all duration-700 ease-out
        ${photo.tall ? "row-span-2" : "row-span-1"}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <Image src={photo.src} alt={photo.alt} fill
        className="object-cover transition-transform duration-700 hover:scale-105" sizes="33vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-5 text-white text-xs font-sans tracking-widest uppercase">
        {photo.label}
      </span>
    </div>
  );
}

/* ─── Wheel section ─────────────────────────────────── */
function Wheel() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-brand leading-tight text-center mb-3">
          An Experienced Team At Your Service
        </h2>
        <p className="text-center text-gray-500 font-sans text-base max-w-xl mx-auto mb-16">
          Over 15 years of crafting unforgettable Vietnam journeys — guided by passion, shaped by expertise.
        </p>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {aboutItems.map((item, i) => (
              <button key={item.title} onClick={() => setActive(i)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-sans border transition-colors
                  ${active === i ? "bg-brand border-brand text-white" : "bg-white border-gray-300 text-gray-500"}`}>
                {item.title}
              </button>
            ))}
          </div>
          <p key={active} className="text-gray-600 text-base leading-relaxed font-sans animate-fadeIn">
            {aboutItems[active].description}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-20">
          <div className="flex-shrink-0" style={{ width: SIZE, height: SIZE }}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border border-dashed border-gray-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src="/travel-vietnam-icon-dark.svg" alt="Travel Vietnam" width={80} height={80} />
              </div>
              {aboutItems.map((item, i) => {
                const rad = (item.angle * Math.PI) / 180;
                const x = parseFloat((RADIUS * Math.cos(rad)).toFixed(3));
                const y = parseFloat((RADIUS * Math.sin(rad)).toFixed(3));
                return (
                  <button key={item.title} onClick={() => setActive(i)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                    <span className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider whitespace-nowrap font-sans border transition-colors
                      ${active === i
                        ? "bg-brand border-brand text-white"
                        : "bg-white border-gray-300 text-gray-500 group-hover:border-gray-500 group-hover:text-gray-700"}`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <p key={active} className="text-gray-600 text-2xl leading-relaxed font-sans animate-fadeIn">
              {aboutItems[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function AboutPage() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const inputCls =
    "w-full bg-transparent border-b border-gray-300 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 transition-colors font-sans";

  const valuesReveal = useReveal();
  const galleryReveal = useReveal();

  return (
    <main>

      {/* ── 1. HERO ──────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="https://asiaeyestravel.com/uploads/source/destinations/beach-holiday-vietnam.webp"
          alt="Vietnam beach"
          fill className="object-cover" priority
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Back to home */}
        <Link
          href="/"
          className="absolute top-28 left-6 md:left-10 z-20 flex items-center gap-2
            text-white/70 hover:text-white text-[11px] font-sans tracking-widest uppercase transition-colors"
        >
          <FiArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        {/* Centred headline */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6 max-w-5xl mx-auto">
          <h1
            className="font-display font-bold text-white uppercase leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(52px, 9vw, 118px)" }}
          >
            Redefining Travel<br />For Vietnam
          </h1>
          <p className="text-white/65 italic font-sans text-lg mt-2">
            We open experiences others can&apos;t
          </p>
          <Link
            href="/tours"
            className="mt-2 border border-white/50 text-white text-[11px] tracking-widest
              uppercase font-sans px-10 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all"
          >
            Our Tours
          </Link>
        </div>
      </section>
    
      {/* ── 2. WHEEL ─────────────────────────────────── */}
    
      <Wheel />

      {/* ── 3. VALUES ────────────────────────────────── */}
      <section id="about-section" className="bg-white py-20 lg:py-28 overflow-hidden">
        <div
          ref={valuesReveal.ref}
          className={`max-w-7xl mx-auto px-6 md:px-10 transition-all duration-700
            ${valuesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Top two-column headline */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-20 mb-20 items-start">
            <h2
              className="font-display font-bold text-gray-900 uppercase leading-[0.92]"
              style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
            >
              We combine deep roots with world&#8209;class service
            </h2>
            <p className="text-gray-500 font-sans text-base lg:text-lg leading-relaxed pt-2">
              To be Vietnam&apos;s most trusted travel partner — recognised not just for where we take
              our clients, but for how we make them feel: secure, valued, and inspired.
            </p>
          </div>

          {/* Three staggered photo cards + wavy SVG path */}
          <div className="relative">
            {/* Wavy connecting path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1200 680"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M -20,180
                   C 100,180 180,360 330,370
                   C 450,378 530,440 600,445
                   C 670,440 750,378 870,370
                   C 1020,360 1100,180 1220,180"
                fill="none"
                stroke="#C9A97A"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {cards.map((card, i) => (
                <div
                  key={card.num}
                  className={`flex flex-col gap-5 ${i === 1 ? "md:mt-32" : ""}`}
                >
                  <div className="relative rounded-2xl overflow-hidden h-64 lg:h-[280px]">
                    <Image src={card.src} alt={card.alt} fill className="object-cover" sizes="33vw" />
                    <div
                      className="absolute top-4 left-4 w-9 h-9 rounded-full bg-gray-900 text-white
                        flex items-center justify-center text-sm font-bold font-sans z-10 shadow-md"
                    >
                      {card.num}
                    </div>
                  </div>
                  <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CONTACT — 3-panel split ───────────────── */}
      <section className="flex min-h-[700px]">

        {/* Left dark panel */}
        <div className="relative hidden lg:flex lg:w-[30%] flex-col overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1552992898-d54099a45484?w=900&q=80"
            alt="Mekong Delta" fill className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col h-full justify-between p-10 py-14 text-white">
            <div>
              <h2 className="font-display text-3xl xl:text-[38px] font-bold uppercase leading-tight mb-14">
                Let&apos;s take care<br />of your travel
              </h2>
              <div className="flex flex-col gap-7">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1.5">24/7 Customer Service</p>
                  <p className="text-sm font-sans">+84 28 3820 1234</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1.5">Emergency Email</p>
                  <p className="text-sm font-sans">emergency@travelvietnam.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Contact</p>
                <p className="text-xs font-sans text-white/80 leading-relaxed">
                  Vietnam: +84 28 3820 1234<br />
                  UK: +44 20 7946 0000<br />
                  hello@travelvietnam.com
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Chat Channels</p>
                <p className="text-xs font-sans text-white/80">WhatsApp · Telegram · Instagram DM</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Socials</p>
                <p className="text-xs font-sans text-white/80">Instagram · TikTok</p>
              </div>
            </div>
          </div>
        </div>

        {/* Centre white panel — form */}
        <div className="flex-1 bg-white flex flex-col justify-center px-8 md:px-14 lg:px-16 py-14">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-6 text-center py-12">
              <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-display text-3xl text-gray-900">Request sent!</p>
              <p className="text-sm text-gray-500 font-sans max-w-xs">
                Our team will reach out within 24 hours to start planning your journey.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-lg w-full">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-gray-400 font-sans mb-2">First name</p>
                  <input required value={form.firstName} onChange={set("firstName")}
                    placeholder="Carlos" className={inputCls} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-sans mb-2">Last name</p>
                  <input required value={form.lastName} onChange={set("lastName")}
                    placeholder="Suarez" className={inputCls} />
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-sans mb-2">Email Address</p>
                <input required type="email" value={form.email} onChange={set("email")}
                  placeholder="hello@example.com" className={inputCls} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-sans mb-2">Your phone number</p>
                <input value={form.phone} onChange={set("phone")}
                  placeholder="+84 28 3820 0000" className={inputCls} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-sans mb-2">Message / your preferences</p>
                <textarea value={form.message} onChange={set("message")} rows={4}
                  placeholder="Tell us about your dream Vietnam trip…"
                  className={`${inputCls} resize-none`} />
              </div>
              {/* Mobile-only submit */}
              <button type="submit"
                className="lg:hidden self-start border border-gray-900 text-gray-900 text-[11px]
                  tracking-widest uppercase font-sans px-9 py-4 rounded-full hover:bg-gray-900
                  hover:text-white transition-all">
                Send Request
              </button>
            </form>
          )}
        </div>

        {/* Right dark panel */}
        <div className="relative hidden lg:flex lg:w-[28%] flex-col overflow-hidden">
          <Image
            src="https://asiaeyestravel.com/uploads/source/blog/phuquoc/bai-tam-phu-quoc.jpg"
            alt="Phu Quoc beach" fill className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 flex flex-col h-full justify-between p-10 py-14 text-white">
            <div />
            <h2 className="font-display text-3xl xl:text-[38px] font-bold uppercase leading-tight">
              Shall we<br />begin?
            </h2>
            <button
              onClick={() => formRef.current?.requestSubmit()}
              className="self-start border border-white/60 text-white text-[11px] tracking-widest
                uppercase font-sans px-9 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all"
            >
              Send Request
            </button>
          </div>
        </div>

      </section>

    </main>
  );
}
