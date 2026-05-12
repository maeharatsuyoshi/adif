// Seeds the existing two team members into the team_members table.
// Run AFTER applying supabase/migrations/001_team_members.sql in the Supabase SQL editor.
//   node scripts/seed-members.mjs
// Idempotent: skips members whose name_en already exists.

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

const members = [
  {
    sort_order: 0,
    photo_url: "/tsuyoshi-maehara.png",
    name_en: "Tsuyoshi Maehara",
    name_ja: "前原剛",
    role_en: "Founder & General Partner",
    role_ja: "Founder & General Partner",
    bio_en:
      "Managing Partner of the Asia Defense Innovation Fund. Co-founder and Head of External Affairs at BLUE VECTOR Inc., and Government Affairs Lead at Solafune Inc. Faculty of Policy Management, Keio University. In 2022, he experienced the war firsthand in Kyiv, Ukraine. Returning to Japan, he joined Solafune Inc. as Government Affairs Lead in 2023. In 2025, he founded Japan's first private defense fund, the Asia Defense Innovation Fund, and took the helm as Managing Partner. Throughout his career, he has worked consistently from the private sector to address the challenges Japan faces in diplomacy, national security, and defense.",
    bio_ja:
      "Asia Defense Innovation Fund 代表パートナー。株式会社BLUE VECTOR 共同創業者・渉外統括、株式会社Solafune 政府渉外役。慶應義塾大学総合政策学部。2022年、ウクライナのキーウにて戦禍を経験。帰国後の2023年より、株式会社Solafune 政府渉外役。2025年に日本初の民間防衛ファンド「Asia Defense Innovation Fund」を創業し、代表パートナーに就任。一貫して、民間サイドから日本の外交、安全保障、防衛領域の課題に取り組んでいる。",
  },
  {
    sort_order: 1,
    photo_url: "/heigo-sato.png",
    name_en: "Heigo Sato",
    name_ja: "佐藤 丙午",
    role_en: "Senior Strategic Advisor",
    role_ja: "Senior Strategic Advisor",
    bio_en:
      "Professor at the Faculty of International Studies, Takushoku University, and at its Graduate School of International Cooperation Studies; Director of the Institute for World Studies. Since April 2025, President of the Japan Association for Disarmament Studies. After completing his doctoral coursework at the Graduate School of Hitotsubashi University and obtaining his Ph.D. in Law in 1999, he served as Senior Research Fellow at the National Institute for Defense Studies before being appointed Professor at Takushoku University in 2006. As one of Japan's foremost authorities on national security policy, in 2010 he served as Counsellor to the Ministry of Foreign Affairs and Special Adviser to the Foreign Minister for disarmament and nuclear non-proliferation. He has represented Japan on UN Group of Governmental Experts panels covering arms control, nuclear non-proliferation, and Lethal Autonomous Weapons Systems (LAWS). His areas of expertise include international relations, U.S. politics and diplomacy, security studies, arms control and disarmament, the defense industry, and export controls.",
    bio_ja:
      "拓殖大学国際学部教授、同大学院国際協力学研究科教授、海外事情研究所長。2025年4月より日本軍縮学会会長。一橋大学大学院の博士課程を修了、1999年に博士（法学）取得後、防衛庁防衛研究所研究部第五研究室主任研究官を経て、2006年に拓殖大学教授に着任。日本の安全保障政策に関する第一人者として、2010年に外務省参与および外務大臣政策参与（軍縮・核不拡散担当）を務め、軍備管理、核不拡散、自律型致死兵器システム（LAWS）などの国連専門家会合パネルに日本代表として出席している。経済産業省産業構造審議会貿易経済協力分科会安全保障貿易管理小委員会委員、外務省核不拡散・核軍縮に関する有識者懇談会委員、防衛省防衛装備・技術移転に係る諸課題に関する検討会委員、日本原子力研究開発機構核不拡散科学技術フォーラム委員、参議院外交防衛委員会の有識者参考人としても招致されている。専門は国際関係論・アメリカ政治外交・安全保障論軍備管理・軍縮、防衛産業・輸出管理等。元日本防衛学会理事、外務省参与。",
  },
];

for (const m of members) {
  const { data: existing, error: selErr } = await supabase
    .from("team_members")
    .select("id")
    .eq("name_en", m.name_en)
    .maybeSingle();
  if (selErr) {
    console.error(`Select failed for ${m.name_en}:`, selErr.message);
    process.exit(1);
  }
  if (existing) {
    console.log(`Skipped (already exists): ${m.name_en}`);
    continue;
  }
  const { error: insErr } = await supabase.from("team_members").insert(m);
  if (insErr) {
    console.error(`Insert failed for ${m.name_en}:`, insErr.message);
    process.exit(1);
  }
  console.log(`Inserted: ${m.name_en}`);
}

console.log("Done.");
