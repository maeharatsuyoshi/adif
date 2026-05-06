"use client";

import Constellation from "./Constellation";
import { useLang } from "../lib/language";
import { getCopy } from "../lib/copy";

export default function OurStory() {
  const { lang } = useLang();
  const t = getCopy(lang).ourStory;

  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[#0e1a2e] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32"
    >
      <Constellation />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
          {t.heading}
        </h2>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-16">
          <div className="space-y-5 font-montserrat text-sm leading-[1.85] text-zinc-200 sm:space-y-6 sm:leading-[1.9] md:text-base">
            {t.paragraphs.map((p, i) => {
              if (p.variant === "emphasis") {
                return (
                  <p key={i} className="font-bold text-white">
                    {p.text}
                  </p>
                );
              }
              if (p.variant === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-white/60 pl-4 font-semibold italic text-white sm:pl-6"
                  >
                    {p.text}
                  </blockquote>
                );
              }
              return <p key={i}>{p.text}</p>;
            })}
          </div>
        </div>

        {/* TODO: Our Story media — drop the asset back in here when the client provides it.
        <div className="mx-auto mt-16 max-w-md">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-800">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/our-story.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/30" aria-hidden />
          </div>
        </div>
        */}

        <p className="mx-auto mt-14 max-w-3xl text-center font-anton text-lg tracking-wide sm:mt-20 sm:text-2xl md:text-3xl">
          {t.closing.map((line, i) => (
            <span key={i}>
              {line}
              {i < t.closing.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
