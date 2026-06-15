"use client";

import { useState, useEffect } from "react";

export function useStickyNav() {
  const [pastHero, setPastHero] = useState(false);
  const [atAbout, setAtAbout] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      const aboutTop =
        document.getElementById("about-section")?.getBoundingClientRect().top ?? Infinity;

      setPastHero(scrolled);
      setAtAbout(aboutTop <= 88);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { pastHero, atAbout };
}
