import { createClient } from "./supabase/server";

export type DBTeamMember = {
  id: string;
  sort_order: number;
  photo_url: string | null;
  name_en: string;
  name_ja: string;
  role_en: string;
  role_ja: string;
  bio_en: string;
  bio_ja: string;
};

export async function listMembers(): Promise<DBTeamMember[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("team_members")
    .select(
      "id, sort_order, photo_url, name_en, name_ja, role_en, role_ja, bio_en, bio_ja",
    )
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("listMembers failed:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getMember(id: string): Promise<DBTeamMember | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("team_members")
    .select(
      "id, sort_order, photo_url, name_en, name_ja, role_en, role_ja, bio_en, bio_ja",
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("getMember failed:", error.message);
    return null;
  }
  return data;
}
