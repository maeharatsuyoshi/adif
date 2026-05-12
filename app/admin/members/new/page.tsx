import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import MemberForm from "../MemberForm";
import { createMember } from "../actions";

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
        <Link
          href="/admin/members"
          className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white/80"
        >
          ← Members
        </Link>
        <h1 className="mt-3 font-anton text-4xl uppercase tracking-wider">
          New Member
        </h1>
        <div className="mt-10">
          <MemberForm action={createMember} submitLabel="Create" />
        </div>
      </div>
    </main>
  );
}
