"use client";

import Image from "next/image";
import HexGrid from "./HexGrid";
import { useLang } from "../lib/language";
import { getCopy } from "../lib/copy";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts
    .map((part) => Array.from(part)[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function Member() {
  const { lang } = useLang();
  const t = getCopy(lang).team;

  return (
    <section
      id="member"
      className="relative overflow-hidden bg-[#162a44] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32"
    >
      <HexGrid />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
          {t.heading}
        </h2>

        <div className="mt-12 space-y-14 sm:mt-20 sm:space-y-20">
          {t.members.map((m) => (
            <article
              key={m.name}
              className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-[220px_1fr] md:gap-14"
            >
              <div className="flex justify-center md:block">
                {m.photo ? (
                  <div className="relative h-36 w-36 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-white/10 sm:h-48 sm:w-48">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 144px, 192px"
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-36 w-36 items-center justify-center rounded-full bg-zinc-800 font-anton text-5xl text-zinc-500 ring-1 ring-white/10 sm:h-48 sm:w-48"
                    aria-hidden
                  >
                    {initials(m.name)}
                  </div>
                )}
              </div>

              <div>
                <p className="text-center font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300 sm:text-xs sm:tracking-[0.25em] md:text-left">
                  {m.role}
                </p>
                <h3 className="mt-2 text-center font-anton text-2xl tracking-wide sm:text-3xl md:text-left md:text-4xl">
                  {m.name}
                </h3>
                <p className="mt-5 font-montserrat text-sm leading-[1.85] text-zinc-300 sm:mt-6 sm:leading-[1.9] md:text-base">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
