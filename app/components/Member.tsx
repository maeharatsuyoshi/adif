import Image from "next/image";
import HexGrid from "./HexGrid";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

const members: TeamMember[] = [
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
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Member() {
  return (
    <section
      id="member"
      className="relative overflow-hidden bg-[#162a44] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32"
    >
      <HexGrid />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center font-anton text-3xl tracking-wide sm:text-5xl md:text-6xl">
          Team
        </h2>

        <div className="mt-12 space-y-14 sm:mt-20 sm:space-y-20">
          {members.map((m) => (
            <article
              key={m.name}
              className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-[220px_1fr] md:gap-14"
            >
              <div className="flex justify-center md:block">
                {m.photo ? (
                  <div className="relative h-36 w-36 sm:h-48 sm:w-48 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-white/10">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 144px, 192px"
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-36 w-36 sm:h-48 sm:w-48 items-center justify-center rounded-full bg-zinc-800 font-anton text-5xl text-zinc-500 ring-1 ring-white/10"
                    aria-hidden
                  >
                    {initials(m.name)}
                  </div>
                )}
              </div>

              <div>
                <p className="text-center font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300 sm:text-xs sm:tracking-[0.25em] md:text-left">
                  {m.role}
                </p>
                <h3 className="mt-2 text-center font-anton text-2xl tracking-wide sm:text-3xl md:text-left md:text-4xl">
                  {m.name}
                </h3>
                <p className="mt-5 font-montserrat text-sm leading-[1.85] text-zinc-300 sm:mt-6 sm:leading-[1.9] md:text-base">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
