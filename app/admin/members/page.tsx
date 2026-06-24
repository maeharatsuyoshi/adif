import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import { listMembers } from "../../lib/members";
import { deleteMember } from "./actions";
import DeleteButton from "./DeleteButton";
import AdminTopBar from "../AdminTopBar";

export const metadata = { title: "Members — Admin" };

export default async function MembersAdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const members = await listMembers();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white/80"
            >
              ← Admin
            </Link>
            <h1 className="mt-3 font-cassannet text-4xl uppercase tracking-wider">
              Team Members
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/members/new"
              className="rounded-md bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
            >
              + New member
            </Link>
            <AdminTopBar />
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
          {members.length === 0 ? (
            <p className="p-8 text-center text-sm text-white/60">
              No members yet. Click <span className="text-white">+ New member</span> to add the first one.
            </p>
          ) : (
            <ul className="divide-y divide-white/10">
              {members.map((m) => (
                <li
                  key={m.id}
                  className="flex flex-wrap items-center gap-4 p-4 sm:p-5"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-white/10">
                    {m.photo_url ? (
                      <Image
                        src={m.photo_url}
                        alt={m.name_en}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{m.name_en}</p>
                    <p className="text-xs text-white/60">
                      {m.role_en} · sort {m.sort_order}
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">
                      {m.name_ja} — {m.role_ja}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/members/${m.id}`}
                      className="rounded-md border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                    >
                      Edit
                    </Link>
                    <form action={deleteMember}>
                      <input type="hidden" name="id" value={m.id} />
                      <DeleteButton />
                    </form>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
