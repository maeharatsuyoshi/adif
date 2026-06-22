import Image from "next/image";
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
        <div className="mb-10 flex flex-col items-center text-center">
          <Image
            src="/white-vertical.png"
            alt="ADIF"
            width={300}
            height={400}
            priority
            className="mb-6 h-24 w-auto sm:h-28"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Asia Defense Innovation Fund
          </p>
          <h1 className="mt-3 font-anton text-3xl uppercase tracking-wider text-white">
            Admin Login
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
