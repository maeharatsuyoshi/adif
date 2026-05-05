const members = [
  { name: "Member One", role: "Managing Partner" },
  { name: "Member Two", role: "Partner" },
  { name: "Member Three", role: "Principal" },
  { name: "Member Four", role: "Operating Advisor" },
];

export default function Member() {
  return (
    <section id="member" className="bg-white py-24 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
          Member
        </h2>
        <p className="mt-4 text-center text-sm text-zinc-500">
          [Placeholder list — final names and bios to be provided]
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="h-40 w-40 rounded-full bg-zinc-200" aria-hidden />
              <h3 className="mt-6 text-lg font-semibold text-zinc-900">
                {m.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
