"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setHidden(window.scrollY > max - 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-4 right-4 z-40 hidden items-center gap-2 font-cassannet text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity duration-300 sm:bottom-6 sm:right-6 sm:flex ${
        hidden ? "opacity-0" : "opacity-90"
      }`}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 animate-bounce"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <span>Scroll Down</span>
    </div>
  );
}
