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
          <div className="mt-6 space-y-1 font-montserrat text-base font-normal leading-snug tracking-normal sm:mt-8 sm:text-xl md:text-2xl">
            <p>
              The Indo-Pacific balance has collapsed, let&apos;s build a new
              order.
            </p>
            <p>ADIF is Japan&apos;s first defense-focused fund.</p>
            <p>
              We invest in Japanese defense-tech startups addressing operational
              needs.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-5">
            <Link
              href="#our-story"
              className="flex h-12 w-full items-center justify-center border-2 border-white font-montserrat text-sm font-bold tracking-wider transition-colors hover:bg-white hover:text-black sm:w-44"
            >
              Our&nbsp; Story
            </Link>
            <Link
              href="#contact-us"
              className="flex h-12 w-full items-center justify-center border-2 border-white font-montserrat text-sm font-bold tracking-wider transition-colors hover:bg-white hover:text-black sm:w-44"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
