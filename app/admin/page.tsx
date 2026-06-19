import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import AdminTopBar from "./AdminTopBar";

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
            <h1 className="mt-3 font-anton text-4xl uppercase tracking-wider">
              Admin
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Signed in as {user.email}
            </p>
          </div>
          <AdminTopBar />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/admin/sections/hero"
            className="group flex flex-col gap-2 rounded-lg border border-white/15 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80">
              Edit
            </p>
            <h2 className="font-anton text-2xl uppercase tracking-wider">
              Hero
            </h2>
            <p className="text-sm text-white/60">
              Top-of-page headline, body copy, and call-to-action buttons.
            </p>
          </Link>

          <Link
            href="/admin/sections/our-story"
            className="group flex flex-col gap-2 rounded-lg border border-white/15 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80">
              Edit
            </p>
            <h2 className="font-anton text-2xl uppercase tracking-wider">
              Our Story
            </h2>
            <p className="text-sm text-white/60">
              Heading, paragraphs (with styling), and closing lines.
            </p>
          </Link>

          <Link
            href="/admin/members"
            className="group flex flex-col gap-2 rounded-lg border border-white/15 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80">
              Manage
            </p>
            <h2 className="font-anton text-2xl uppercase tracking-wider">
              Team Members
            </h2>
            <p className="text-sm text-white/60">
              Add, edit, reorder, or remove members shown on the public site.
            </p>
          </Link>

          <Link
            href="/admin/sections/contact"
            className="group flex flex-col gap-2 rounded-lg border border-white/15 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80">
              Edit
            </p>
            <h2 className="font-anton text-2xl uppercase tracking-wider">
              Contact
            </h2>
            <p className="text-sm text-white/60">
              Email, company details, address, and footer copyright.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
