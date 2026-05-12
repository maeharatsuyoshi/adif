import Spinner from "../components/Spinner";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        <Spinner size={18} />
        Loading…
      </div>
    </main>
  );
}
