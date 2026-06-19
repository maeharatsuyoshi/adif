import { createClient } from "./supabase/server";
import { getCopy } from "./copy";

export type HeroContent = {
  headline_en: string;
  headline_ja: string;
  body_en: string;
  body_ja: string;
  our_story_label_en: string;
  our_story_label_ja: string;
  contact_label_en: string;
  contact_label_ja: string;
  video_url: string | null;
};

export type OurStoryContent = {
  heading_en: string;
  heading_ja: string;
  closing_en: string;
  closing_ja: string;
};

export type OurStoryParagraph = {
  id: string;
  sort_order: number;
  variant: "default" | "emphasis" | "quote";
  text_en: string;
  text_ja: string;
};

export type ContactContent = {
  heading_en: string;
  heading_ja: string;
  email: string;
  company_name_label_en: string;
  company_name_label_ja: string;
  company_name_value_en: string;
  company_name_value_ja: string;
  representative_label_en: string;
  representative_label_ja: string;
  representative_value_en: string;
  representative_value_ja: string;
  incorporation_label_en: string;
  incorporation_label_ja: string;
  incorporation_value_en: string;
  incorporation_value_ja: string;
  location_label_en: string;
  location_label_ja: string;
  location_value_en: string;
  location_value_ja: string;
  copyright_en: string;
  copyright_ja: string;
};

const HERO_COLUMNS =
  "headline_en, headline_ja, body_en, body_ja, our_story_label_en, our_story_label_ja, contact_label_en, contact_label_ja, video_url";

const STORY_COLUMNS =
  "heading_en, heading_ja, closing_en, closing_ja";

const PARAGRAPH_COLUMNS =
  "id, sort_order, variant, text_en, text_ja";

const CONTACT_COLUMNS =
  "heading_en, heading_ja, email, company_name_label_en, company_name_label_ja, company_name_value_en, company_name_value_ja, representative_label_en, representative_label_ja, representative_value_en, representative_value_ja, incorporation_label_en, incorporation_label_ja, incorporation_value_en, incorporation_value_ja, location_label_en, location_label_ja, location_value_en, location_value_ja, copyright_en, copyright_ja";

function defaultHero(): HeroContent {
  const en = getCopy("en").hero;
  const ja = getCopy("ja").hero;
  return {
    headline_en: en.headline,
    headline_ja: ja.headline,
    body_en: en.body.join("\n\n"),
    body_ja: ja.body.join("\n\n"),
    our_story_label_en: en.ourStory,
    our_story_label_ja: ja.ourStory,
    contact_label_en: en.contactUs,
    contact_label_ja: ja.contactUs,
    video_url: "/ADIF_website.mp4",
  };
}

function defaultStory(): OurStoryContent {
  const en = getCopy("en").ourStory;
  const ja = getCopy("ja").ourStory;
  return {
    heading_en: en.heading,
    heading_ja: ja.heading,
    closing_en: en.closing.join("\n"),
    closing_ja: ja.closing.join("\n"),
  };
}

function defaultContact(): ContactContent {
  const en = getCopy("en").contact;
  const ja = getCopy("ja").contact;
  return {
    heading_en: en.heading,
    heading_ja: ja.heading,
    email: en.email,
    company_name_label_en: en.fields.companyName.label,
    company_name_label_ja: ja.fields.companyName.label,
    company_name_value_en: en.fields.companyName.value,
    company_name_value_ja: ja.fields.companyName.value,
    representative_label_en: en.fields.representative.label,
    representative_label_ja: ja.fields.representative.label,
    representative_value_en: en.fields.representative.value,
    representative_value_ja: ja.fields.representative.value,
    incorporation_label_en: en.fields.incorporation.label,
    incorporation_label_ja: ja.fields.incorporation.label,
    incorporation_value_en: en.fields.incorporation.value,
    incorporation_value_ja: ja.fields.incorporation.value,
    location_label_en: en.fields.location.label,
    location_label_ja: ja.fields.location.label,
    location_value_en: en.fields.location.value.join("\n"),
    location_value_ja: ja.fields.location.value.join("\n"),
    copyright_en: en.copyright,
    copyright_ja: ja.copyright,
  };
}

export async function getHeroContent(): Promise<HeroContent> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("hero_content")
    .select(HERO_COLUMNS)
    .eq("id", 1)
    .maybeSingle<HeroContent>();
  if (error) {
    console.error("getHeroContent failed:", error.message);
    return defaultHero();
  }
  return data ?? defaultHero();
}

export async function getOurStoryContent(): Promise<OurStoryContent> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("our_story_content")
    .select(STORY_COLUMNS)
    .eq("id", 1)
    .maybeSingle<OurStoryContent>();
  if (error) {
    console.error("getOurStoryContent failed:", error.message);
    return defaultStory();
  }
  return data ?? defaultStory();
}

export async function listOurStoryParagraphs(): Promise<OurStoryParagraph[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("our_story_paragraphs")
    .select(PARAGRAPH_COLUMNS)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) {
    console.error("listOurStoryParagraphs failed:", error.message);
    return [];
  }
  return (data ?? []) as OurStoryParagraph[];
}

export async function getOurStoryParagraph(
  id: string,
): Promise<OurStoryParagraph | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("our_story_paragraphs")
    .select(PARAGRAPH_COLUMNS)
    .eq("id", id)
    .maybeSingle<OurStoryParagraph>();
  if (error) {
    console.error("getOurStoryParagraph failed:", error.message);
    return null;
  }
  return data;
}

export async function getContactContent(): Promise<ContactContent> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("contact_content")
    .select(CONTACT_COLUMNS)
    .eq("id", 1)
    .maybeSingle<ContactContent>();
  if (error) {
    console.error("getContactContent failed:", error.message);
    return defaultContact();
  }
  return data ?? defaultContact();
}
