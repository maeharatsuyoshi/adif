import HexGrid from "./HexGrid";

export default function MemberSkeleton() {
  return (
    <section
      id="member"
      className="relative overflow-hidden bg-[#162a44] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32"
      aria-busy="true"
      aria-live="polite"
    >
      <HexGrid />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center font-cassannet text-3xl tracking-wide sm:text-5xl md:text-6xl">
          Team
        </h2>

        <div className="mt-12 space-y-14 sm:mt-20 sm:space-y-20">
          {[0, 1].map((i) => (
            <article
              key={i}
              className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-[220px_1fr] md:gap-14"
            >
              <div className="flex justify-center md:block">
                <div className="h-36 w-36 animate-pulse rounded-full bg-white/10 ring-1 ring-white/10 sm:h-48 sm:w-48" />
              </div>
              <div className="space-y-3">
                <div className="mx-auto h-3 w-32 animate-pulse rounded bg-white/10 md:mx-0" />
                <div className="mx-auto h-7 w-56 animate-pulse rounded bg-white/10 sm:h-9 md:mx-0" />
                <div className="space-y-2 pt-3">
                  <div className="h-3 w-full animate-pulse rounded bg-white/10" />
                  <div className="h-3 w-[95%] animate-pulse rounded bg-white/10" />
                  <div className="h-3 w-[90%] animate-pulse rounded bg-white/10" />
                  <div className="h-3 w-[97%] animate-pulse rounded bg-white/10" />
                  <div className="h-3 w-3/4 animate-pulse rounded bg-white/10" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
