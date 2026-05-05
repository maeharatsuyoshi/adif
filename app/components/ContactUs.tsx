export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="bg-zinc-900 py-24 px-6 text-white md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Contact Us
        </h2>
        <p className="mt-6 text-base text-zinc-300 md:text-lg">
          [Placeholder] Send us a one-pager describing your technology, team, and
          what sets you apart.
        </p>

        <a
          href="mailto:apply@asia-defense.example"
          className="mt-10 inline-block text-lg font-semibold text-sky-400 underline-offset-4 hover:underline"
        >
          apply@asia-defense.example
        </a>

        <p className="mt-16 text-xs text-zinc-500">
          © {new Date().getFullYear()} Asia Defense Innovation Fund — All rights reserved
        </p>
      </div>
    </section>
  );
}
