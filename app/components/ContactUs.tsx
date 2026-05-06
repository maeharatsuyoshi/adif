export default function ContactUs() {
  return (
    <>
      <section
        id="contact-us"
        className="bg-[#1f2937] px-5 py-20 text-white sm:px-6 sm:py-28 md:py-36"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
            Contact Us
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
              href="mailto:info@adif.capital"
              className="mt-5 break-all font-montserrat text-base font-bold text-sky-400 underline-offset-4 hover:underline sm:mt-6 sm:text-lg md:text-xl"
            >
              info@adif.capital
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 text-left font-montserrat text-sm sm:mt-20 sm:grid-cols-3 sm:gap-8 md:text-base">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Company Name
              </dt>
              <dd className="mt-2 text-zinc-200">
                Asia Defense Innovation Fund LLC
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Date of Incorporation
              </dt>
              <dd className="mt-2 text-zinc-200">April 23, 2025</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Location
              </dt>
              <dd className="mt-2 text-zinc-200">
                Grand Tokyo South Tower,
                <br />
                1-9-2 Marunouchi, Chiyoda-ku,
                <br />
                Tokyo 100-0005, Japan
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="bg-[#111827] py-6 px-6 text-center font-montserrat text-xs text-zinc-500">
        © Copyright {new Date().getFullYear()} Asia Defense Innovation Fund — All
        Rights Reserved
      </footer>
    </>
  );
}
