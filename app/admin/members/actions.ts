"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabase/server";

const BUCKET = "team-photos";

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

async function uploadPhoto(
  supabase: Awaited<ReturnType<typeof createClient>>,
  file: File,
): Promise<string> {
  const ext = file.name.split(".").pop()?.toLowerCase() || "png";
  const path = `${crypto.randomUUID()}.${ext}`;
  const buf = new Uint8Array(await file.arrayBuffer());
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, buf, { contentType: file.type, upsert: false });
  if (error) throw new Error(`Photo upload failed: ${error.message}`);
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export type MemberFormState = { error?: string } | undefined;

export async function createMember(
  _prev: MemberFormState,
  formData: FormData,
): Promise<MemberFormState> {
  const supabase = await requireAdmin();

  const photoFile = formData.get("photo");
  let photo_url: string | null = null;

  if (photoFile instanceof File && photoFile.size > 0) {
    try {
      photo_url = await uploadPhoto(supabase, photoFile);
    } catch (e) {
      return { error: (e as Error).message };
    }
  }

  const row = {
    sort_order: Number(str(formData, "sort_order") || "0"),
    photo_url,
    name_en: str(formData, "name_en"),
    name_ja: str(formData, "name_ja"),
    role_en: str(formData, "role_en"),
    role_ja: str(formData, "role_ja"),
    bio_en: str(formData, "bio_en"),
    bio_ja: str(formData, "bio_ja"),
  };

  if (!row.name_en || !row.name_ja || !row.role_en || !row.role_ja) {
    return { error: "Name and role (both EN and JA) are required." };
  }

  const { error } = await supabase.from("team_members").insert(row);
  if (error) return { error: error.message };

  revalidatePath("/admin/members");
  revalidatePath("/");
  redirect("/admin/members");
}

export async function updateMember(
  id: string,
  _prev: MemberFormState,
  formData: FormData,
): Promise<MemberFormState> {
  const supabase = await requireAdmin();

  const photoFile = formData.get("photo");
  const removePhoto = str(formData, "remove_photo") === "1";
  const currentPhoto = str(formData, "current_photo_url");

  let photo_url: string | null = currentPhoto || null;

  if (photoFile instanceof File && photoFile.size > 0) {
    try {
      photo_url = await uploadPhoto(supabase, photoFile);
    } catch (e) {
      return { error: (e as Error).message };
    }
  } else if (removePhoto) {
    photo_url = null;
  }

  const patch = {
    sort_order: Number(str(formData, "sort_order") || "0"),
    photo_url,
    name_en: str(formData, "name_en"),
    name_ja: str(formData, "name_ja"),
    role_en: str(formData, "role_en"),
    role_ja: str(formData, "role_ja"),
    bio_en: str(formData, "bio_en"),
    bio_ja: str(formData, "bio_ja"),
  };

  if (!patch.name_en || !patch.name_ja || !patch.role_en || !patch.role_ja) {
    return { error: "Name and role (both EN and JA) are required." };
  }

  const { error } = await supabase
    .from("team_members")
    .update(patch)
    .eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/members");
  revalidatePath("/");
  redirect("/admin/members");
}

export async function deleteMember(formData: FormData): Promise<void> {
  const supabase = await requireAdmin();
  const id = str(formData, "id");
  if (!id) return;

  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) {
    console.error("deleteMember failed:", error.message);
    return;
  }

  revalidatePath("/admin/members");
  revalidatePath("/");
}
