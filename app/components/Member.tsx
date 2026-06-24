import HexGrid from "./HexGrid";
import MemberList from "./MemberList";
import { listMembers } from "../lib/members";

export default async function Member() {
  const members = await listMembers();

  return (
    <section
      id="member"
      className="relative overflow-hidden bg-[#162a44] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32"
    >
      <HexGrid />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center font-cassannet text-3xl tracking-wide sm:text-5xl md:text-6xl">
          Team
        </h2>

        <MemberList members={members} />
      </div>
    </section>
  );
}
