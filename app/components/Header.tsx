"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="flex h-14 items-center justify-between bg-black/80 px-5 backdrop-blur sm:h-16 sm:px-6 md:px-10">
        <Link
          href="#top"
          className="font-anton text-base tracking-widest text-white"
        >
          ADIF
        </Link>
        <nav className="flex items-center gap-4 font-montserrat text-sm font-bold tracking-wider text-white sm:gap-6">
          <Link
            href="#our-story"
            className="hidden transition-opacity hover:opacity-70 sm:inline"
          >
            Our Story
          </Link>
          <Link
            href="#member"
            className="hidden transition-opacity hover:opacity-70 sm:inline"
          >
            Team
          </Link>
          <Link
            href="#contact-us"
            className="hidden transition-opacity hover:opacity-70 sm:inline"
          >
            Contact
          </Link>
          <button
            type="button"
            className="border border-white/60 px-3 py-1 text-xs transition-colors hover:bg-white hover:text-black"
            aria-label="Toggle language"
          >
            JP / EN
          </button>
        </nav>
      </div>
    </header>
  );
}
