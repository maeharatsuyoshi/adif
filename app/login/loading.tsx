import Spinner from "../components/Spinner";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <Spinner size={20} />
    </main>
  );
}
