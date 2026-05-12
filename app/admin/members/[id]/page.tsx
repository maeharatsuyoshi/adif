import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { getMember } from "../../../lib/members";
import MemberForm from "../MemberForm";
import { updateMember, type MemberFormState } from "../actions";

export const metadata = { title: "Edit Member — Admin" };

export default async function EditMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { id } = await params;
  const member = await getMember(id);
  if (!member) notFound();

  const action = async (
    state: MemberFormState,
    formData: FormData,
  ): Promise<MemberFormState> => {
    "use server";
    return updateMember(id, state, formData);
  };

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
          Edit Member
        </h1>
        <div className="mt-10">
          <MemberForm
            action={action}
            submitLabel="Save"
            initial={{
              sort_order: member.sort_order,
              photo_url: member.photo_url,
              name_en: member.name_en,
              name_ja: member.name_ja,
              role_en: member.role_en,
              role_ja: member.role_ja,
              bio_en: member.bio_en,
              bio_ja: member.bio_ja,
            }}
          />
        </div>
      </div>
    </main>
  );
}
