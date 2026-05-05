"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
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
      <div className="flex h-16 items-center justify-between bg-black/80 px-6 backdrop-blur md:px-10">
        <Link
          href="#top"
          className="font-anton text-base tracking-widest text-white"
        >
          ADIF
        </Link>
        <nav className="flex items-center gap-6 font-montserrat text-sm font-bold tracking-wider text-white">
          <Link href="#our-story" className="transition-opacity hover:opacity-70">
            Our Story
          </Link>
          <Link href="#member" className="transition-opacity hover:opacity-70">
            Member
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
