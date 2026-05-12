import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin Login — ADIF",
};

export default async function LoginPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Asia Defense Innovation Fund
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-anton)] text-3xl uppercase tracking-wider text-white">
            Admin Login
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
