"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../lib/language";
import { getCopy } from "../lib/copy";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const { lang, toggle } = useLang();
  const t = getCopy(lang).nav;

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
          className="flex items-center"
          aria-label="ADIF — Asia Defense Innovation Fund"
        >
          <Image
            src="/white-horizontal.png"
            alt="ADIF"
            width={680}
            height={252}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>
        <nav className="flex items-center gap-4 font-cassannet text-sm font-bold tracking-wider text-white sm:gap-6">
          <Link
            href="#our-story"
            className="hidden transition-opacity hover:opacity-70 sm:inline"
          >
            {t.ourStory}
          </Link>
          <Link
            href="#member"
            className="hidden transition-opacity hover:opacity-70 sm:inline"
          >
            {t.team}
          </Link>
          <Link
            href="#contact-us"
            className="hidden transition-opacity hover:opacity-70 sm:inline"
          >
            {t.contact}
          </Link>
          <button
            type="button"
            onClick={toggle}
            className="border border-white/60 px-3 py-1 text-xs transition-colors hover:bg-white hover:text-black"
            aria-label={t.toggleAriaLabel}
          >
            {t.toggleTo}
          </button>
        </nav>
      </div>
    </header>
  );
}
