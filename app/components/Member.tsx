const members = [
  { name: "Member One", role: "Managing Partner" },
  { name: "Member Two", role: "Partner" },
  { name: "Member Three", role: "Principal" },
  { name: "Member Four", role: "Operating Advisor" },
];

export default function Member() {
  return (
    <section id="member" className="bg-zinc-950 py-24 px-6 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-anton text-4xl tracking-wide sm:text-5xl md:text-6xl">
          Member
        </h2>
        <p className="mt-4 text-center font-montserrat text-sm text-zinc-400">
          [Placeholder list — final names and bios to be provided]
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="h-40 w-40 rounded-full bg-zinc-800" aria-hidden />
              <h3 className="mt-6 font-montserrat text-lg font-bold">
                {m.name}
              </h3>
              <p className="mt-1 font-montserrat text-sm text-zinc-400">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
