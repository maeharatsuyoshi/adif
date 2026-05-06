"use client";

import { useLang } from "../lib/language";
import { getCopy } from "../lib/copy";

export default function ContactUs() {
  const { lang } = useLang();
  const t = getCopy(lang).contact;

  return (
    <>
      <section
        id="contact-us"
        className="bg-[#1f2937] px-5 py-20 text-white sm:px-6 sm:py-28 md:py-36"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
            {t.heading}
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
            <a
              href={`mailto:${t.email}`}
              className="mt-5 break-all font-montserrat text-base font-bold text-sky-400 underline-offset-4 hover:underline sm:mt-6 sm:text-lg md:text-xl"
            >
              {t.email}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 text-left font-montserrat text-sm sm:mt-20 sm:grid-cols-[auto_auto_auto] sm:gap-8 md:text-base">
            <div>
              <dt className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                {t.fields.companyName.label}
              </dt>
              <dd className="mt-2 whitespace-nowrap text-zinc-200">
                {t.fields.companyName.value}
              </dd>
            </div>
            <div>
              <dt className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                {t.fields.incorporation.label}
              </dt>
              <dd className="mt-2 whitespace-nowrap text-zinc-200">
                {t.fields.incorporation.value}
              </dd>
            </div>
            <div>
              <dt className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                {t.fields.location.label}
              </dt>
              <dd className="mt-2 text-zinc-200">
                {t.fields.location.value.map((line, i) => (
                  <span key={i} className="block break-keep sm:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="bg-[#111827] py-6 px-6 text-center font-montserrat text-xs text-zinc-500">
        © Copyright {new Date().getFullYear()} {t.copyright}
      </footer>
    </>
  );
}
