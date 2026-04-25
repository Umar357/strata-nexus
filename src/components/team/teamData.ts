/**
 * Team data — the four people on every Strata Nexus engagement.
 * Avatar gradients are HSL-based and stay on-palette (teal → blue) so
 * the row reads as a set. Swap initials/bios as needed; layout is stable.
 *
 * When real headshots arrive, replace the monogram avatar in TeamCard.tsx
 * with `<img src={`/team/${member.slug}.jpg`} />` — no other changes needed.
 */
export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  /** Avatar gradient angle — keeps each member visually distinct. */
  hue: number;
  /** Optional handle used for placeholder asset paths later. */
  slug: string;
};

export const TEAM: TeamMember[] = [
  {
    initials: "VL",
    name: "Valen",
    role: "Director",
    bio: "Sets the strategy, shepherds engagements end-to-end and is the one your CTO calls when something has to land properly.",
    expertise: ["Strategy", "Engagements", "Operations"],
    hue: 165,
    slug: "valen",
  },
  {
    initials: "FR",
    name: "Ferdy",
    role: "Tech Lead",
    bio: "Owns the architecture of every project. Years across banking, education and infrastructure — and the system diagrams that survive contact with reality.",
    expertise: ["Architecture", "Cloud", "Security"],
    hue: 188,
    slug: "ferdy",
  },
  {
    initials: "FB",
    name: "Febby",
    role: "Fullstack Developer",
    bio: "Ships the software. From the database schema to the UI affordances — same hands, same head, same standard top to bottom.",
    expertise: ["Frontend", "Backend", "DevOps"],
    hue: 205,
    slug: "febby",
  },
  {
    initials: "MR",
    name: "Marco",
    role: "Product Designer",
    bio: "Makes the systems we ship intuitive enough that operations teams don't need a manual to run them. Designs with the on-call engineer in mind.",
    expertise: ["Product", "Interaction", "Design Systems"],
    hue: 225,
    slug: "marco",
  },
];
