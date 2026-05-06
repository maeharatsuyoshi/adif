import Constellation from "./Constellation";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[#0e1a2e] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32"
    >
      <Constellation />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
          Our Story
        </h2>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-16">
          <div className="space-y-5 font-montserrat text-sm leading-[1.85] text-zinc-200 sm:space-y-6 sm:leading-[1.9] md:text-base">
            <p>
              For decades after the war, investment in &ldquo;defense and the
              military&rdquo; was treated as taboo in Japan. But in an era of
              sharply escalating geopolitical risk, that assumption has utterly
              collapsed. Today, a &ldquo;defense fund&rdquo; in Japan is no
              longer merely an investment vehicle. It serves as the
              infrastructure through which a nation&apos;s survival strategy is
              implemented in technology.
            </p>

            <p className="font-bold text-white">
              February 2022. Kyiv, Ukraine.
            </p>

            <p>
              ADIF&apos;s founder — then 20 years old and based at a local
              innovation park — experienced Russia&apos;s invasion firsthand.
              The wail of air raid sirens. The reality of a nation being
              trampled without cause. What he confronted there was a cold
              truth: when the moment comes, lofty ideals and armchair theories
              will never save a single life.
            </p>

            <p>
              Returning to Japan, he was struck by a deep sense of alarm at a
              country lulled into intellectual paralysis under the banner of
              &ldquo;peace.&rdquo; He joined a global startup specializing in
              satellite data and geospatial intelligence analysis as its head
              of government affairs, gaining experience at the front lines of
              diplomacy and national security. There, one conviction
              crystallized:
            </p>

            <blockquote className="border-l-2 border-white/60 pl-4 font-semibold italic text-white sm:pl-6">
              &ldquo;The same tragedy must never be repeated in East Asia.
              Japan&apos;s world-class technology must be deployed for national
              defense, and we must build a deterrent equal to the threats of a
              new era.&rdquo;
            </blockquote>

            <p>
              No one wants the job. But unless someone takes it on, this
              country has no peaceful future.
            </p>

            <p>
              The formative, visceral experience of war as a Japanese citizen
              born in the 21st century, fused with the intensity forged on the
              front lines of the startup world — bringing these together, in
              April 2025, Japan&apos;s first private defense fund, the Asia
              Defense Innovation Fund (ADIF), was established as a
              permanent-capital, evergreen fund committed to driving the next
              era of defense innovation.
            </p>

            <p>
              We are more than a source of capital. We stand alongside founders
              on the front lines, take on risk with them, and build a strategic
              ecosystem that draws in established industry and financial
              capital — and through that, we are creating the defense
              infrastructure of the next generation.
            </p>
          </div>
        </div>

        {/* TODO: Our Story media — drop the asset back in here when the client provides it.
        <div className="mx-auto mt-16 max-w-md">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-800">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/our-story.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/30" aria-hidden />
          </div>
        </div>
        */}

        <p className="mx-auto mt-14 max-w-3xl text-center font-anton text-lg tracking-wide sm:mt-20 sm:text-2xl md:text-3xl">
          All of it, to defend this country&apos;s future,
          <br />
          and the everyday lives we love.
        </p>
      </div>
    </section>
  );
}
