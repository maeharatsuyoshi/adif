import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import MemberForm from "../MemberForm";
import { createMember } from "../actions";
import AdminTopBar from "../../AdminTopBar";

export const metadata = { title: "New Member — Admin" };

export default async function NewMemberPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link
              href="/admin/members"
              className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white/80"
            >
              ← Members
            </Link>
            <h1 className="mt-3 font-cassannet font-bold text-4xl uppercase tracking-wider">
              New Member
            </h1>
          </div>
          <AdminTopBar />
        </div>
        <div className="mt-10">
          <MemberForm action={createMember} submitLabel="Create" />
        </div>
      </div>
    </main>
  );
}
