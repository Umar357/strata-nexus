import TeamCard from "./TeamCard";
import { TEAM } from "./teamData";

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
      {TEAM.map((m, i) => (
        <TeamCard key={m.slug} member={m} index={i} />
      ))}
    </div>
  );
}
