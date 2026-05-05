export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="bg-black py-24 px-6 text-white md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-anton text-4xl tracking-wide sm:text-5xl md:text-6xl">
          Contact Us
        </h2>
        <p className="mt-6 font-montserrat text-base text-zinc-300 md:text-lg">
          [Placeholder] Send us a one-pager describing your technology, team, and
          what sets you apart.
        </p>

        <a
          href="mailto:apply@asia-defense.example"
          className="mt-10 inline-block font-montserrat text-lg font-bold text-sky-400 underline-offset-4 hover:underline"
        >
          apply@asia-defense.example
        </a>

        <p className="mt-16 font-montserrat text-xs text-zinc-500">
          © {new Date().getFullYear()} Asia Defense Innovation Fund — All rights reserved
        </p>
      </div>
    </section>
  );
}
