import Spinner from "../../components/Spinner";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          ← Admin
        </p>
        <h1 className="mt-3 font-cassannet font-bold text-4xl uppercase tracking-wider">
          Team Members
        </h1>

        <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
          <ul className="divide-y divide-white/10">
            {[0, 1, 2].map((i) => (
              <li key={i} className="flex items-center gap-4 p-4 sm:p-5">
                <div className="h-14 w-14 shrink-0 animate-pulse rounded-full bg-white/10" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-4 w-40 animate-pulse rounded bg-white/10" />
                  <div className="h-3 w-56 animate-pulse rounded bg-white/10" />
                  <div className="h-3 w-32 animate-pulse rounded bg-white/10" />
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-16 animate-pulse rounded-md bg-white/10" />
                  <div className="h-8 w-20 animate-pulse rounded-md bg-white/10" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
          <Spinner size={14} />
          Loading members…
        </div>
      </div>
    </main>
  );
}
