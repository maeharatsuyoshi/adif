import Image from "next/image";
import Spinner from "../components/Spinner";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white">
      <Image
        src="/white-vertical.png"
        alt="ADIF"
        width={300}
        height={400}
        priority
        className="h-24 w-auto animate-pulse sm:h-28"
      />
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        <Spinner size={14} />
        Loading…
      </div>
    </main>
  );
}
