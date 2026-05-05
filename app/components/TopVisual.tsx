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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Asia Defense Innovation Fund
        </h1>
        <p className="mt-6 max-w-3xl text-base font-medium sm:text-lg md:text-xl">
          We invest in the operational needs of the Self-Defense Forces and
          breakthrough technologies
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#our-story"
            className="flex h-12 w-48 items-center justify-center border border-white px-6 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-white hover:text-black"
          >
            Our Story
          </Link>
          <Link
            href="#contact-us"
            className="flex h-12 w-48 items-center justify-center border border-white px-6 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
