"use client";

import Link from "next/link";
import { useLang } from "../lib/language";
import type { HeroContent } from "../lib/siteContent";

type Props = {
  content: HeroContent;
};

export default function TopVisualView({ content }: Props) {
  const { lang } = useLang();
  const t = (en: string, ja: string) => (lang === "ja" ? ja : en);

  const headline = t(content.headline_en, content.headline_ja);
  const body = t(content.body_en, content.body_ja);
  const bodyParagraphs = body.split(/\r?\n\r?\n/).filter((p) => p.length > 0);
  const videoUrl = content.video_url || "/ADIF_website.mp4";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-5 text-white sm:px-6">
        <div className="w-full max-w-5xl">
          <h1 className="font-cassannet font-bold text-4xl leading-tight tracking-tight sm:text-5xl md:whitespace-nowrap md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <div className="mt-8 font-cassannet text-lg font-semibold leading-[1.7] tracking-wide sm:mt-10 sm:text-xl md:whitespace-nowrap md:text-[1.625rem]">
            {bodyParagraphs.map((para, i) => (
              <p key={i} className={i > 0 ? "mt-6" : undefined}>
                {para.split(/\r?\n/).map((line, j, arr) => (
                  <span key={j}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:flex-row sm:gap-4">
            <Link
              href="#our-story"
              className="flex w-full items-center justify-center rounded-[3px] border-2 border-white px-12 py-4 font-cassannet text-sm font-bold tracking-wide transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              {t(content.our_story_label_en, content.our_story_label_ja).toUpperCase()}
            </Link>
            <Link
              href="#contact-us"
              className="flex w-full items-center justify-center rounded-[3px] border-2 border-white px-12 py-4 font-cassannet text-sm font-bold tracking-wide transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              {t(content.contact_label_en, content.contact_label_ja).toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
