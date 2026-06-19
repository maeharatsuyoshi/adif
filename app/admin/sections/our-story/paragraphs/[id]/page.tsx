import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "../../../../../lib/supabase/server";
import { getOurStoryParagraph } from "../../../../../lib/siteContent";
import AdminTopBar from "../../../../AdminTopBar";
import ParagraphForm from "../../ParagraphForm";
import { updateParagraph, type ParagraphFormState } from "../../../actions";

export const metadata = { title: "Edit Paragraph — Admin" };

export default async function EditParagraphPage({
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
  const paragraph = await getOurStoryParagraph(id);
  if (!paragraph) notFound();

  const action = async (
    state: ParagraphFormState,
    formData: FormData,
  ): Promise<ParagraphFormState> => {
    "use server";
    return updateParagraph(id, state, formData);
  };

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
            <h1 className="mt-3 font-anton text-4xl uppercase tracking-wider">
              Edit Paragraph
            </h1>
          </div>
          <AdminTopBar />
        </div>
        <div className="mt-10">
          <ParagraphForm
            action={action}
            submitLabel="Save"
            initial={{
              sort_order: paragraph.sort_order,
              variant: paragraph.variant,
              text_en: paragraph.text_en,
              text_ja: paragraph.text_ja,
            }}
          />
        </div>
      </div>
    </main>
  );
}
