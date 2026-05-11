import Link from "next/link";

export default function TopVisual() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/ADIF_website.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-5 text-white sm:px-6">
        <div className="w-full max-w-5xl">
          <h1 className="font-anton text-4xl leading-tight tracking-tight sm:text-5xl md:whitespace-nowrap md:text-6xl lg:text-7xl">
            Asia Defense Innovation Fund
          </h1>
          <p className="mt-8 font-montserrat text-lg font-semibold leading-[1.6] tracking-[-0.01em] sm:mt-10 sm:text-xl md:whitespace-nowrap md:text-[1.625rem]">
            The Indo-Pacific balance has collapsed, let&apos;s build a new
            order. <br />
            
            <br />
            ADIF is Japan&apos;s first defense-focused fund. <br />
            We invest in Japanese defense-tech startups addressing operational
            needs.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:flex-row sm:gap-4">
            <Link
              href="#our-story"
              className="flex w-full items-center justify-center rounded-[3px] border-2 border-white px-12 py-4 font-montserrat text-sm font-bold tracking-wide transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              OUR STORY
            </Link>
            <Link
              href="#contact-us"
              className="flex w-full items-center justify-center rounded-[3px] border-2 border-white px-12 py-4 font-montserrat text-sm font-bold tracking-wide transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
