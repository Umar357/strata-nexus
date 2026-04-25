import StatTile from "./StatTile";

const STATS = [
  {
    value: 7,
    suffix: "",
    label: "Service Domains",
    sublabel: "One team, one contract",
  },
  {
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Target Uptime",
    sublabel: "Mission-critical SLA",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Operations",
    sublabel: "Always-on monitoring",
  },
  {
    value: 15,
    suffix: "+",
    label: "Partner Ecosystem",
    sublabel: "Vetted technology stack",
  },
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <StatTile key={s.label} index={i} {...s} />
      ))}
    </div>
  );
}
