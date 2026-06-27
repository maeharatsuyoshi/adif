import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page not found — ADIF",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black px-6 text-center text-white">
      <Image
        src="/white-vertical.png"
        alt="ADIF"
        width={300}
        height={400}
        priority
        className="h-24 w-auto sm:h-28"
      />
      <div>
        <p className="font-cassannet font-bold text-6xl tracking-wider sm:text-7xl">404</p>
        <h1 className="mt-3 font-cassannet font-bold text-2xl uppercase tracking-wider sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 font-cassannet text-sm text-white/60">
          The page you were looking for does not exist.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-[3px] border-2 border-white px-10 py-3 font-cassannet text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
      >
        Return home
      </Link>
    </main>
  );
}
