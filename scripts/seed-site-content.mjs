// Seeds hero/our_story/contact content from the current hardcoded copy into Supabase.
// Run AFTER applying supabase/migrations/002_site_content.sql:
//   node scripts/seed-site-content.mjs
// Idempotent: skips singleton rows that already exist and skips paragraphs whose
// text_en already exists.

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env");
for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// --- HERO ----------------------------------------------------------------
const hero = {
  id: 1,
  headline_en: "Asia Defense Innovation Fund",
  headline_ja: "Asia Defense Innovation Fund",
  body_en:
    "The Indo-Pacific balance has collapsed, let's build a new order.\n\nADIF is Japan's first defense-focused fund.\nWe invest in Japanese defense-tech startups addressing operational needs.",
  body_ja:
    "The Indo-Pacific balance has collapsed, let's build a new order.\n\nADIF is Japan's first defense-focused fund.\nWe invest in Japanese defense-tech startups addressing operational needs.",
  our_story_label_en: "Our  Story",
  our_story_label_ja: "Our  Story",
  contact_label_en: "Contact Us",
  contact_label_ja: "Contact Us",
  video_url: "/ADIF_website.mp4",
};

{
  const { data: existing } = await supabase
    .from("hero_content")
    .select("id")
    .eq("id", 1)
    .maybeSingle();
  if (existing) {
    console.log("Hero content already exists — skipped.");
  } else {
    const { error } = await supabase.from("hero_content").insert(hero);
    if (error) {
      console.error("Insert hero_content failed:", error.message);
      process.exit(1);
    }
    console.log("Inserted: hero_content");
  }
}

// --- OUR STORY -----------------------------------------------------------
const story = {
  id: 1,
  heading_en: "Our Story",
  heading_ja: "Our Story",
  closing_en:
    "All of it, to defend this country's future,\nand the everyday lives we love.",
  closing_ja: "すべては、この国の未来と、\n愛する日常を守り抜くために。",
};

{
  const { data: existing } = await supabase
    .from("our_story_content")
    .select("id")
    .eq("id", 1)
    .maybeSingle();
  if (existing) {
    console.log("Our story content already exists — skipped.");
  } else {
    const { error } = await supabase.from("our_story_content").insert(story);
    if (error) {
      console.error("Insert our_story_content failed:", error.message);
      process.exit(1);
    }
    console.log("Inserted: our_story_content");
  }
}

// --- OUR STORY PARAGRAPHS ------------------------------------------------
const paragraphs = [
  {
    sort_order: 0,
    variant: "default",
    text_en:
      "For decades after the war, investment in “defense and the military” was treated as taboo in Japan. But in an era of sharply escalating geopolitical risk, that assumption has utterly collapsed. Today, a “defense fund” in Japan is no longer merely an investment vehicle. It serves as the infrastructure through which a nation's survival strategy is implemented in technology.",
    text_ja:
      "戦後長らく「防衛・軍事」への投資がタブー視されてきた日本。しかし、地政学的リスクが急激に高まる現代において、その前提は完全に崩れ去った。今日、日本における「防衛ファンド」とは、単なる投資機関ではない。「国家の生存戦略をテクノロジーで実装するためのインフラ」としての役割を担う。",
  },
  {
    sort_order: 1,
    variant: "emphasis",
    text_en: "February 2022. Kyiv, Ukraine.",
    text_ja: "2022年2月、ウクライナ・首都キーウ。",
  },
  {
    sort_order: 2,
    variant: "default",
    text_en:
      "ADIF's founder — then 20 years old and based at a local innovation park — experienced Russia's invasion firsthand. The wail of air raid sirens. The reality of a nation being trampled without cause. What he confronted there was a cold truth: when the moment comes, lofty ideals and armchair theories will never save a single life.",
    text_ja:
      "ADIFの創業者は、当時20歳で現地のイノベーションパークに滞在中、ロシアによる軍事侵攻の戦火をその肌で経験した。鳴り響く空襲警報と、国家が理不尽に蹂躙されていく現実。そこで直面したのは、「いざという時、綺麗事や机上の空論は決して命を守ってくれない」という冷酷な真実であった。",
  },
  {
    sort_order: 3,
    variant: "default",
    text_en:
      "Returning to Japan, he was struck by a deep sense of alarm at a country lulled into intellectual paralysis under the banner of “peace.” He joined a global startup specializing in satellite data and geospatial intelligence analysis as its head of government affairs, gaining experience at the front lines of diplomacy and national security. There, one conviction crystallized:",
    text_ja:
      "帰国後、平和という名の思考停止に陥っている日本の現状に強い危機感を抱いた彼は、衛星データ・地理空間情報を解析するグローバルスタートアップに政府渉外役として参画。外交・安全保障の最前線で経験を積む中で、一つの確信に至る。",
  },
  {
    sort_order: 4,
    variant: "quote",
    text_en:
      "“The same tragedy must never be repeated in East Asia. Japan's world-class technology must be deployed for national defense, and we must build a deterrent equal to the threats of a new era.”",
    text_ja:
      "「東アジアで同じ惨劇を繰り返してはならない。日本の優れたテクノロジーを国防に実装し、新時代の脅威に備えた抑止力を創り出さなければならない」",
  },
  {
    sort_order: 5,
    variant: "default",
    text_en:
      "No one wants the job. But unless someone takes it on, this country has no peaceful future.",
    text_ja:
      "誰もやりたがらない。しかし、誰かがその役割を引き受けなければ、この国の平穏な未来はない。",
  },
  {
    sort_order: 6,
    variant: "default",
    text_en:
      "The formative, visceral experience of war as a Japanese citizen born in the 21st century, fused with the intensity forged on the front lines of the startup world — bringing these together, in April 2025, Japan's first private defense fund, the Asia Defense Innovation Fund (ADIF), was established as a permanent-capital, evergreen fund committed to driving the next era of defense innovation.",
    text_ja:
      "21世紀生まれの日本人としての圧倒的な戦争の原体験と、スタートアップの最前線で培った熱量。それらを結集し、2025年4月、日本初の民間防衛ファンドAsia Defense Innovation Fund（ADIF）は防衛イノベーションの担い手として永久保有型のエバーグリーンファンドとして設立された。",
  },
  {
    sort_order: 7,
    variant: "default",
    text_en:
      "We are more than a source of capital. We stand alongside founders on the front lines, take on risk with them, and build a strategic ecosystem that draws in established industry and financial capital — and through that, we are creating the defense infrastructure of the next generation.",
    text_ja:
      "私たちは単なる資金供給者にとどまらない。起業家とともに最前線でリスクを取り、既存産業や金融資本を巻き込んだ戦略的なエコシステムを構築することで、次世代の防衛インフラを創り出す。",
  },
];

for (const p of paragraphs) {
  const { data: existing } = await supabase
    .from("our_story_paragraphs")
    .select("id")
    .eq("text_en", p.text_en)
    .maybeSingle();
  if (existing) {
    console.log(`Paragraph already exists — skipped: ${p.text_en.slice(0, 40)}…`);
    continue;
  }
  const { error } = await supabase.from("our_story_paragraphs").insert(p);
  if (error) {
    console.error("Insert our_story_paragraphs failed:", error.message);
    process.exit(1);
  }
  console.log(`Inserted paragraph #${p.sort_order} (${p.variant})`);
}

// --- CONTACT -------------------------------------------------------------
const contact = {
  id: 1,
  heading_en: "Contact Us",
  heading_ja: "Contact Us",
  email: "info@adif.capital",
  company_name_label_en: "Company Name",
  company_name_label_ja: "会社名",
  company_name_value_en: "Asia Defense Innovation Fund LLC",
  company_name_value_ja: "合同会社Asia Defense Innovation Fund",
  representative_label_en: "Representative Member",
  representative_label_ja: "代表社員",
  representative_value_en: "Tsuyoshi Maehara",
  representative_value_ja: "前原 剛",
  incorporation_label_en: "Date of Incorporation",
  incorporation_label_ja: "会社設立日",
  incorporation_value_en: "April 23, 2025",
  incorporation_value_ja: "2025年4月23日",
  location_label_en: "Location",
  location_label_ja: "所在地",
  location_value_en:
    "Grand Tokyo South Tower, 1-9-2\nMarunouchi, Chiyoda-ku, Tokyo 100-0005, Japan",
  location_value_ja:
    "〒100-0005\n東京都千代田区丸の内１丁目９－２ グラントウキョウサウスタワー",
  copyright_en: "Asia Defense Innovation Fund — All Rights Reserved",
  copyright_ja: "Asia Defense Innovation Fund — All Rights Reserved",
};

{
  const { data: existing } = await supabase
    .from("contact_content")
    .select("id")
    .eq("id", 1)
    .maybeSingle();
  if (existing) {
    console.log("Contact content already exists — skipped.");
  } else {
    const { error } = await supabase.from("contact_content").insert(contact);
    if (error) {
      console.error("Insert contact_content failed:", error.message);
      process.exit(1);
    }
    console.log("Inserted: contact_content");
  }
}

console.log("Done.");
