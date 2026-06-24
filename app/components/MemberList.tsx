"use client";

import Image from "next/image";
import { useLang } from "../lib/language";
import type { DBTeamMember } from "../lib/members";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts
    .map((part) => Array.from(part)[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function MemberList({ members }: { members: DBTeamMember[] }) {
  const { lang } = useLang();

  return (
    <div className="mt-12 space-y-14 sm:mt-20 sm:space-y-20">
      {members.map((m) => {
        const name = lang === "ja" ? m.name_ja : m.name_en;
        const role = lang === "ja" ? m.role_ja : m.role_en;
        const bio = lang === "ja" ? m.bio_ja : m.bio_en;

        return (
          <article
            key={m.id}
            className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-[220px_1fr] md:gap-14"
          >
            <div className="flex justify-center md:block">
              {m.photo_url ? (
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-white/10 sm:h-48 sm:w-48">
                  <Image
                    src={m.photo_url}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 144px, 192px"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div
                  className="flex h-36 w-36 items-center justify-center rounded-full bg-zinc-800 font-cassannet text-5xl text-zinc-500 ring-1 ring-white/10 sm:h-48 sm:w-48"
                  aria-hidden
                >
                  {initials(name)}
                </div>
              )}
            </div>

            <div>
              <p className="text-center font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300 sm:text-xs sm:tracking-[0.25em] md:text-left">
                {role}
              </p>
              <h3 className="mt-2 text-center font-cassannet text-2xl tracking-wide sm:text-3xl md:text-left md:text-4xl">
                {name}
              </h3>
              <p className="mt-5 font-montserrat text-sm leading-[1.85] text-zinc-300 sm:mt-6 sm:leading-[1.9] md:text-base">
                {bio}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
