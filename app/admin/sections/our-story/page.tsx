import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import {
  getOurStoryContent,
  listOurStoryParagraphs,
} from "../../../lib/siteContent";
import AdminTopBar from "../../AdminTopBar";
import OurStoryHeadingForm from "./OurStoryHeadingForm";
import DeleteParagraphButton from "./DeleteParagraphButton";
import { deleteParagraph } from "../actions";

export const metadata = { title: "Our Story — Admin" };

const variantBadge: Record<string, string> = {
  default: "bg-white/10 text-white/70",
  emphasis: "bg-amber-500/20 text-amber-200",
  quote: "bg-sky-500/20 text-sky-200",
};

export default async function OurStoryAdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [content, paragraphs] = await Promise.all([
    getOurStoryContent(),
    listOurStoryParagraphs(),
  ]);

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
              Our Story
            </h1>
          </div>
          <AdminTopBar />
        </div>

        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            Heading & closing
          </h2>
          <div className="mt-4">
            <OurStoryHeadingForm initial={content} />
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Paragraphs
            </h2>
            <Link
              href="/admin/sections/our-story/paragraphs/new"
              className="rounded-md bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
            >
              + New paragraph
            </Link>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
            {paragraphs.length === 0 ? (
              <p className="p-8 text-center text-sm text-white/60">
                No paragraphs yet. Click{" "}
                <span className="text-white">+ New paragraph</span> to add one.
              </p>
            ) : (
              <ul className="divide-y divide-white/10">
                {paragraphs.map((p) => (
                  <li
                    key={p.id}
                    className="flex flex-col gap-3 p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                      <span
                        className={`rounded-full px-2 py-0.5 ${variantBadge[p.variant] ?? variantBadge.default}`}
                      >
                        {p.variant}
                      </span>
                      <span>sort {p.sort_order}</span>
                    </div>
                    <p className="text-sm text-white/80">{p.text_en}</p>
                    <p className="text-xs text-white/50">{p.text_ja}</p>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/sections/our-story/paragraphs/${p.id}`}
                        className="rounded-md border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                      >
                        Edit
                      </Link>
                      <form action={deleteParagraph}>
                        <input type="hidden" name="id" value={p.id} />
                        <DeleteParagraphButton />
                      </form>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
