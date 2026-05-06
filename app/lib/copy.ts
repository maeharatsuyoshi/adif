import type { Lang } from "./language";

type Paragraph = {
  text: string;
  variant?: "default" | "emphasis" | "quote";
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

type SiteCopy = {
  nav: {
    ourStory: string;
    team: string;
    contact: string;
    toggleAriaLabel: string;
    toggleTo: string;
  };
  hero: {
    headline: string;
    body: string[];
    ourStory: string;
    contactUs: string;
  };
  ourStory: {
    heading: string;
    paragraphs: Paragraph[];
    closing: string[];
  };
  team: {
    heading: string;
    members: TeamMember[];
  };
  contact: {
    heading: string;
    email: string;
    fields: {
      companyName: { label: string; value: string };
      incorporation: { label: string; value: string };
      location: { label: string; value: string[] };
    };
    copyright: string;
  };
};

const copy: Record<Lang, SiteCopy> = {
  en: {
    nav: {
      ourStory: "Our Story",
      team: "Team",
      contact: "Contact",
      toggleAriaLabel: "Switch to Japanese",
      toggleTo: "JP",
    },
    hero: {
      headline: "Asia Defense Innovation Fund",
      body: [
        "The Indo-Pacific balance has collapsed, let's build a new order.",
        "ADIF is Japan's first defense-focused fund.",
        "We invest in Japanese defense-tech startups addressing operational needs.",
      ],
      ourStory: "Our  Story",
      contactUs: "Contact Us",
    },
    ourStory: {
      heading: "Our Story",
      paragraphs: [
        {
          text: "For decades after the war, investment in “defense and the military” was treated as taboo in Japan. But in an era of sharply escalating geopolitical risk, that assumption has utterly collapsed. Today, a “defense fund” in Japan is no longer merely an investment vehicle. It serves as the infrastructure through which a nation's survival strategy is implemented in technology.",
        },
        { text: "February 2022. Kyiv, Ukraine.", variant: "emphasis" },
        {
          text: "ADIF's founder — then 20 years old and based at a local innovation park — experienced Russia's invasion firsthand. The wail of air raid sirens. The reality of a nation being trampled without cause. What he confronted there was a cold truth: when the moment comes, lofty ideals and armchair theories will never save a single life.",
        },
        {
          text: "Returning to Japan, he was struck by a deep sense of alarm at a country lulled into intellectual paralysis under the banner of “peace.” He joined a global startup specializing in satellite data and geospatial intelligence analysis as its head of government affairs, gaining experience at the front lines of diplomacy and national security. There, one conviction crystallized:",
        },
        {
          text: "“The same tragedy must never be repeated in East Asia. Japan's world-class technology must be deployed for national defense, and we must build a deterrent equal to the threats of a new era.”",
          variant: "quote",
        },
        {
          text: "No one wants the job. But unless someone takes it on, this country has no peaceful future.",
        },
        {
          text: "The formative, visceral experience of war as a Japanese citizen born in the 21st century, fused with the intensity forged on the front lines of the startup world — bringing these together, in April 2025, Japan's first private defense fund, the Asia Defense Innovation Fund (ADIF), was established as a permanent-capital, evergreen fund committed to driving the next era of defense innovation.",
        },
        {
          text: "We are more than a source of capital. We stand alongside founders on the front lines, take on risk with them, and build a strategic ecosystem that draws in established industry and financial capital — and through that, we are creating the defense infrastructure of the next generation.",
        },
      ],
      closing: [
        "All of it, to defend this country's future,",
        "and the everyday lives we love.",
      ],
    },
    team: {
      heading: "Team",
      members: [
        {
          name: "Tsuyoshi Maehara",
          role: "Founder & General Partner",
          photo: "/tsuyoshi-maehara.png",
          bio: "Managing Partner of the Asia Defense Innovation Fund. Co-founder and Head of External Affairs at BLUE VECTOR Inc., and Government Affairs Lead at Solafune Inc. Faculty of Policy Management, Keio University. In 2022, he experienced the war firsthand in Kyiv, Ukraine. Returning to Japan, he joined Solafune Inc. as Government Affairs Lead in 2023. In 2025, he founded Japan's first private defense fund, the Asia Defense Innovation Fund, and took the helm as Managing Partner. Throughout his career, he has worked consistently from the private sector to address the challenges Japan faces in diplomacy, national security, and defense.",
        },
        {
          name: "Heigo Sato",
          role: "Senior Strategic Advisor",
          bio: "Professor at the Faculty of International Studies, Takushoku University, and at its Graduate School of International Cooperation Studies; Director of the Institute for World Studies. Since April 2025, President of the Japan Association for Disarmament Studies. After completing his doctoral coursework at the Graduate School of Hitotsubashi University and obtaining his Ph.D. in Law in 1999, he served as Senior Research Fellow at the National Institute for Defense Studies before being appointed Professor at Takushoku University in 2006. As one of Japan's foremost authorities on national security policy, in 2010 he served as Counsellor to the Ministry of Foreign Affairs and Special Adviser to the Foreign Minister for disarmament and nuclear non-proliferation. He has represented Japan on UN Group of Governmental Experts panels covering arms control, nuclear non-proliferation, and Lethal Autonomous Weapons Systems (LAWS). His areas of expertise include international relations, U.S. politics and diplomacy, security studies, arms control and disarmament, the defense industry, and export controls.",
        },
      ],
    },
    contact: {
      heading: "Contact Us",
      email: "info@adif.capital",
      fields: {
        companyName: {
          label: "Company Name",
          value: "Asia Defense Innovation Fund LLC",
        },
        incorporation: {
          label: "Date of Incorporation",
          value: "April 23, 2025",
        },
        location: {
          label: "Location",
          value: [
            "Grand Tokyo South Tower,",
            "1-9-2 Marunouchi, Chiyoda-ku,",
            "Tokyo 100-0005, Japan",
          ],
        },
      },
      copyright:
        "Asia Defense Innovation Fund — All Rights Reserved",
    },
  },
  ja: {
    nav: {
      ourStory: "私たちの物語",
      team: "チーム",
      contact: "お問い合わせ",
      toggleAriaLabel: "Switch to English",
      toggleTo: "EN",
    },
    hero: {
      headline: "Asia Defense Innovation Fund",
      body: [
        "The Indo-Pacific balance has collapsed, let's build a new order.",
        "ADIF is Japan's first defense-focused fund.",
        "We invest in Japanese defense-tech startups addressing operational needs.",
      ],
      ourStory: "Our  Story",
      contactUs: "Contact Us",
    },
    ourStory: {
      heading: "私たちの物語",
      paragraphs: [
        {
          text: "戦後長らく「防衛・軍事」への投資がタブー視されてきた日本。しかし、地政学的リスクが急激に高まる現代において、その前提は完全に崩れ去った。今日、日本における「防衛ファンド」とは、単なる投資機関ではない。「国家の生存戦略をテクノロジーで実装するためのインフラ」としての役割を担う。",
        },
        {
          text: "2022年2月、ウクライナ・首都キーウ。",
          variant: "emphasis",
        },
        {
          text: "ADIFの創業者は、当時20歳で現地のイノベーションパークに滞在中、ロシアによる軍事侵攻の戦火をその肌で経験した。鳴り響く空襲警報と、国家が理不尽に蹂躙されていく現実。そこで直面したのは、「いざという時、綺麗事や机上の空論は決して命を守ってくれない」という冷酷な真実であった。",
        },
        {
          text: "帰国後、平和という名の思考停止に陥っている日本の現状に強い危機感を抱いた彼は、衛星データ・地理空間情報を解析するグローバルスタートアップに政府渉外役として参画。外交・安全保障の最前線で経験を積む中で、一つの確信に至る。",
        },
        {
          text: "「東アジアで同じ惨劇を繰り返してはならない。日本の優れたテクノロジーを国防に実装し、新時代の脅威に備えた抑止力を創り出さなければならない」",
          variant: "quote",
        },
        {
          text: "誰もやりたがらない。しかし、誰かがその役割を引き受けなければ、この国の平穏な未来はない。",
        },
        {
          text: "21世紀生まれの日本人としての圧倒的な戦争の原体験と、スタートアップの最前線で培った熱量。それらを結集し、2025年4月、日本初の民間防衛ファンドAsia Defense Innovation Fund（ADIF）は防衛イノベーションの担い手として永久保有型のエバーグリーンファンドとして設立された。",
        },
        {
          text: "私たちは単なる資金供給者にとどまらない。起業家とともに最前線でリスクを取り、既存産業や金融資本を巻き込んだ戦略的なエコシステムを構築することで、次世代の防衛インフラを創り出す。",
        },
      ],
      closing: [
        "すべては、この国の未来と、",
        "愛する日常を守り抜くために。",
      ],
    },
    team: {
      heading: "チーム",
      members: [
        {
          name: "前原剛",
          role: "Founder & General Partner",
          photo: "/tsuyoshi-maehara.png",
          bio: "Asia Defense Innovation Fund 代表パートナー。株式会社BLUE VECTOR 共同創業者・渉外統括、株式会社Solafune 政府渉外役。慶應義塾大学総合政策学部。2022年、ウクライナのキーウにて戦禍を経験。帰国後の2023年より、株式会社Solafune 政府渉外役。2025年に日本初の民間防衛ファンド「Asia Defense Innovation Fund」を創業し、代表パートナーに就任。一貫して、民間サイドから日本の外交、安全保障、防衛領域の課題に取り組んでいる。",
        },
        {
          name: "佐藤 丙午",
          role: "Senior Strategic Advisor",
          bio: "拓殖大学国際学部教授、同大学院国際協力学研究科教授、海外事情研究所長。2025年4月より日本軍縮学会会長。一橋大学大学院の博士課程を修了、1999年に博士（法学）取得後、防衛庁防衛研究所研究部第五研究室主任研究官を経て、2006年に拓殖大学教授に着任。日本の安全保障政策に関する第一人者として、2010年に外務省参与および外務大臣政策参与（軍縮・核不拡散担当）を務め、軍備管理、核不拡散、自律型致死兵器システム（LAWS）などの国連専門家会合パネルに日本代表として出席している。経済産業省産業構造審議会貿易経済協力分科会安全保障貿易管理小委員会委員、外務省核不拡散・核軍縮に関する有識者懇談会委員、防衛省防衛装備・技術移転に係る諸課題に関する検討会委員、日本原子力研究開発機構核不拡散科学技術フォーラム委員、参議院外交防衛委員会の有識者参考人としても招致されている。専門は国際関係論・アメリカ政治外交・安全保障論軍備管理・軍縮、防衛産業・輸出管理等。元日本防衛学会理事、外務省参与。",
        },
      ],
    },
    contact: {
      heading: "お問い合わせ",
      email: "info@adif.capital",
      fields: {
        companyName: {
          label: "会社名",
          value: "合同会社Asia Defense Innovation Fund",
        },
        incorporation: {
          label: "会社設立日",
          value: "2025年4月23日",
        },
        location: {
          label: "所在地",
          value: [
            "〒100-0005",
            "東京都千代田区丸の内１丁目９－２",
            "グラントウキョウサウスタワー",
          ],
        },
      },
      copyright: "Asia Defense Innovation Fund — All Rights Reserved",
    },
  },
};

export function getCopy(lang: Lang): SiteCopy {
  return copy[lang];
}

export type { SiteCopy, Paragraph, TeamMember };
