"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabase/server";

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return supabase;
}

function str(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function revalidatePublic() {
  revalidatePath("/");
}

export type SectionFormState = { error?: string; ok?: boolean } | undefined;

// HERO ---------------------------------------------------------------------
export async function saveHero(
  _prev: SectionFormState,
  formData: FormData,
): Promise<SectionFormState> {
  const supabase = await requireAdmin();

  const row = {
    id: 1,
    headline_en: str(formData, "headline_en"),
    headline_ja: str(formData, "headline_ja"),
    body_en: str(formData, "body_en"),
    body_ja: str(formData, "body_ja"),
    our_story_label_en: str(formData, "our_story_label_en"),
    our_story_label_ja: str(formData, "our_story_label_ja"),
    contact_label_en: str(formData, "contact_label_en"),
    contact_label_ja: str(formData, "contact_label_ja"),
    video_url: str(formData, "video_url") || null,
  };

  const { error } = await supabase
    .from("hero_content")
    .upsert(row, { onConflict: "id" });
  if (error) return { error: error.message };

  revalidatePublic();
  return { ok: true };
}

// OUR STORY ----------------------------------------------------------------
export async function saveOurStory(
  _prev: SectionFormState,
  formData: FormData,
): Promise<SectionFormState> {
  const supabase = await requireAdmin();

  const row = {
    id: 1,
    heading_en: str(formData, "heading_en"),
    heading_ja: str(formData, "heading_ja"),
    closing_en: str(formData, "closing_en"),
    closing_ja: str(formData, "closing_ja"),
  };

  const { error } = await supabase
    .from("our_story_content")
    .upsert(row, { onConflict: "id" });
  if (error) return { error: error.message };

  revalidatePublic();
  return { ok: true };
}

// PARAGRAPHS ---------------------------------------------------------------
export type ParagraphFormState = { error?: string } | undefined;

export async function createParagraph(
  _prev: ParagraphFormState,
  formData: FormData,
): Promise<ParagraphFormState> {
  const supabase = await requireAdmin();

  const row = {
    sort_order: Number(str(formData, "sort_order") || "0"),
    variant: str(formData, "variant") || "default",
    text_en: str(formData, "text_en"),
    text_ja: str(formData, "text_ja"),
  };

  if (!row.text_en && !row.text_ja) {
    return { error: "Paragraph text (EN or JA) is required." };
  }

  const { error } = await supabase.from("our_story_paragraphs").insert(row);
  if (error) return { error: error.message };

  revalidatePath("/admin/sections/our-story");
  revalidatePublic();
  redirect("/admin/sections/our-story");
}

export async function updateParagraph(
  id: string,
  _prev: ParagraphFormState,
  formData: FormData,
): Promise<ParagraphFormState> {
  const supabase = await requireAdmin();

  const patch = {
    sort_order: Number(str(formData, "sort_order") || "0"),
    variant: str(formData, "variant") || "default",
    text_en: str(formData, "text_en"),
    text_ja: str(formData, "text_ja"),
  };

  if (!patch.text_en && !patch.text_ja) {
    return { error: "Paragraph text (EN or JA) is required." };
  }

  const { error } = await supabase
    .from("our_story_paragraphs")
    .update(patch)
    .eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/sections/our-story");
  revalidatePublic();
  redirect("/admin/sections/our-story");
}

export async function deleteParagraph(formData: FormData): Promise<void> {
  const supabase = await requireAdmin();
  const id = str(formData, "id");
  if (!id) return;

  const { error } = await supabase
    .from("our_story_paragraphs")
    .delete()
    .eq("id", id);
  if (error) {
    console.error("deleteParagraph failed:", error.message);
    return;
  }

  revalidatePath("/admin/sections/our-story");
  revalidatePublic();
}

// CONTACT ------------------------------------------------------------------
export async function saveContact(
  _prev: SectionFormState,
  formData: FormData,
): Promise<SectionFormState> {
  const supabase = await requireAdmin();

  const row = {
    id: 1,
    heading_en: str(formData, "heading_en"),
    heading_ja: str(formData, "heading_ja"),
    email: str(formData, "email"),
    company_name_label_en: str(formData, "company_name_label_en"),
    company_name_label_ja: str(formData, "company_name_label_ja"),
    company_name_value_en: str(formData, "company_name_value_en"),
    company_name_value_ja: str(formData, "company_name_value_ja"),
    representative_label_en: str(formData, "representative_label_en"),
    representative_label_ja: str(formData, "representative_label_ja"),
    representative_value_en: str(formData, "representative_value_en"),
    representative_value_ja: str(formData, "representative_value_ja"),
    incorporation_label_en: str(formData, "incorporation_label_en"),
    incorporation_label_ja: str(formData, "incorporation_label_ja"),
    incorporation_value_en: str(formData, "incorporation_value_en"),
    incorporation_value_ja: str(formData, "incorporation_value_ja"),
    location_label_en: str(formData, "location_label_en"),
    location_label_ja: str(formData, "location_label_ja"),
    location_value_en: str(formData, "location_value_en"),
    location_value_ja: str(formData, "location_value_ja"),
    copyright_en: str(formData, "copyright_en"),
    copyright_ja: str(formData, "copyright_ja"),
  };

  const { error } = await supabase
    .from("contact_content")
    .upsert(row, { onConflict: "id" });
  if (error) return { error: error.message };

  revalidatePublic();
  return { ok: true };
}
