import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { getHeroContent } from "../../../lib/siteContent";
import AdminTopBar from "../../AdminTopBar";
import HeroForm from "./HeroForm";

export const metadata = { title: "Hero — Admin" };

export default async function HeroAdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const content = await getHeroContent();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white/80"
            >
              ← Admin
            </Link>
            <h1 className="mt-3 font-cassannet text-4xl uppercase tracking-wider">
              Hero
            </h1>
            <p className="mt-2 text-sm text-white/60">
              The top-of-page video section and call-to-action buttons.
            </p>
          </div>
          <AdminTopBar />
        </div>
        <div className="mt-10">
          <HeroForm initial={content} />
        </div>
      </div>
    </main>
  );
}
