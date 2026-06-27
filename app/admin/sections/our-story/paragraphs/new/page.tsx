import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../../../../lib/supabase/server";
import AdminTopBar from "../../../../AdminTopBar";
import ParagraphForm from "../../ParagraphForm";
import { createParagraph } from "../../../actions";

export const metadata = { title: "New Paragraph — Admin" };

export default async function NewParagraphPage() {
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
              href="/admin/sections/our-story"
              className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white/80"
            >
              ← Our Story
            </Link>
            <h1 className="mt-3 font-cassannet font-bold text-4xl uppercase tracking-wider">
              New Paragraph
            </h1>
          </div>
          <AdminTopBar />
        </div>
        <div className="mt-10">
          <ParagraphForm action={createParagraph} submitLabel="Create" />
        </div>
      </div>
    </main>
  );
}
