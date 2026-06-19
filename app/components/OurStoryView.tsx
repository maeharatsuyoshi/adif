"use client";

import Constellation from "./Constellation";
import { useLang } from "../lib/language";
import type {
  OurStoryContent,
  OurStoryParagraph,
} from "../lib/siteContent";

type Props = {
  content: OurStoryContent;
  paragraphs: OurStoryParagraph[];
};

export default function OurStoryView({ content, paragraphs }: Props) {
  const { lang } = useLang();
  const heading = lang === "ja" ? content.heading_ja : content.heading_en;
  const closingRaw = lang === "ja" ? content.closing_ja : content.closing_en;
  const closingLines = closingRaw.split(/\r?\n/).filter((l) => l.length > 0);

  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[#0e1a2e] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32"
    >
      <Constellation />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
          {heading}
        </h2>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-16">
          <div className="space-y-5 font-montserrat text-sm leading-[1.85] text-zinc-200 sm:space-y-6 sm:leading-[1.9] md:text-base">
            {paragraphs.map((p) => {
              const text = lang === "ja" ? p.text_ja : p.text_en;
              if (!text) return null;
              if (p.variant === "emphasis") {
                return (
                  <p key={p.id} className="font-bold text-white">
                    {text}
                  </p>
                );
              }
              if (p.variant === "quote") {
                return (
                  <blockquote
                    key={p.id}
                    className="border-l-2 border-white/60 pl-4 font-semibold italic text-white sm:pl-6"
                  >
                    {text}
                  </blockquote>
                );
              }
              return <p key={p.id}>{text}</p>;
            })}
          </div>
        </div>

        {closingLines.length > 0 ? (
          <p className="mx-auto mt-14 max-w-3xl text-center font-anton text-lg tracking-wide sm:mt-20 sm:text-2xl md:text-3xl">
            {closingLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < closingLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
