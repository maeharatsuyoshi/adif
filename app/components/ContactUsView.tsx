"use client";

import { useLang } from "../lib/language";
import type { ContactContent } from "../lib/siteContent";

type Props = {
  content: ContactContent;
};

export default function ContactUsView({ content }: Props) {
  const { lang } = useLang();
  const t = (en: string, ja: string) => (lang === "ja" ? ja : en);

  const locationLines = t(content.location_value_en, content.location_value_ja)
    .split(/\r?\n/)
    .filter((line) => line.length > 0);

  return (
    <>
      <section
        id="contact-us"
        className="bg-[#1f2937] px-5 py-20 text-white sm:px-6 sm:py-28 md:py-36"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
            {t(content.heading_en, content.heading_ja)}
          </h2>

          <div className="mt-10 flex flex-col items-center sm:mt-16">
            <span
              className="flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14"
              aria-hidden
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-white sm:h-12 sm:w-12"
              >
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            {content.email ? (
              <a
                href={`mailto:${content.email}`}
                className="mt-5 break-all font-montserrat text-base font-bold text-sky-400 underline-offset-4 hover:underline sm:mt-6 sm:text-lg md:text-xl"
              >
                {content.email}
              </a>
            ) : null}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 text-left font-montserrat text-sm sm:mt-20 sm:grid-cols-2 sm:gap-x-24 md:gap-x-32 md:text-base lg:gap-x-48">
            <dl className="space-y-6">
              <div>
                <dt className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {t(content.company_name_label_en, content.company_name_label_ja)}
                </dt>
                <dd className="mt-2 whitespace-nowrap text-zinc-200">
                  {t(content.company_name_value_en, content.company_name_value_ja)}
                </dd>
              </div>
              <div>
                <dt className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {t(content.representative_label_en, content.representative_label_ja)}
                </dt>
                <dd className="mt-2 whitespace-nowrap text-zinc-200">
                  {t(content.representative_value_en, content.representative_value_ja)}
                </dd>
              </div>
            </dl>
            <dl className="space-y-6">
              <div>
                <dt className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {t(content.incorporation_label_en, content.incorporation_label_ja)}
                </dt>
                <dd className="mt-2 whitespace-nowrap text-zinc-200">
                  {t(content.incorporation_value_en, content.incorporation_value_ja)}
                </dd>
              </div>
              <div>
                <dt className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {t(content.location_label_en, content.location_label_ja)}
                </dt>
                <dd className="mt-2 text-zinc-200">
                  {locationLines.map((line, i) => (
                    <span key={i} className="block break-keep sm:whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="bg-[#111827] py-6 px-6 text-center font-montserrat text-xs text-zinc-500">
        © Copyright 2025 {t(content.copyright_en, content.copyright_ja)}
      </footer>
    </>
  );
}
