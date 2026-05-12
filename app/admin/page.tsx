import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import { logout } from "../login/actions";

export const metadata = {
  title: "Admin — ADIF",
};

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col bg-black px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Asia Defense Innovation Fund
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-anton)] text-4xl uppercase tracking-wider">
              Admin
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Signed in as {user.email}
            </p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-md border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
