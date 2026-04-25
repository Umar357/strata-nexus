import {
  Compass,
  Layers,
  Hammer,
  Rocket,
  Activity,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  id: string;
  Icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  deliverables: string[];
  /** Approximate phase length, displayed as supplementary metadata. */
  duration: string;
};

/**
 * Five-stage delivery process. Order matters — the connector line
 * draws top-to-bottom, lighting each stage circle as the user scrolls.
 *
 * The deliverables under each stage are deliberately concrete artifacts
 * the client receives at that phase, not vague promises.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discover",
    Icon: Compass,
    eyebrow: "Discover",
    title: "Map the goal against the reality.",
    description:
      "A two-week audit covering the business goal, current stack, team and constraints. We finish with a shared picture of the engagement — not just notes.",
    deliverables: ["Stakeholder map", "Constraint audit", "Goal alignment doc"],
    duration: "~2 weeks",
  },
  {
    id: "architect",
    Icon: Layers,
    eyebrow: "Architect",
    title: "Design the whole system before we ship code.",
    description:
      "Software, infrastructure, security and operations — designed end-to-end on paper first. Trade-offs are made with cost and timeline visible. No surprises in week twelve.",
    deliverables: ["System blueprint", "Tech-stack RFC", "Cost & timeline"],
    duration: "~3 weeks",
  },
  {
    id: "build",
    Icon: Hammer,
    eyebrow: "Build",
    title: "Two-week iterations with the engineers who designed it.",
    description:
      "You see working software every fortnight, with metrics. The team that scoped the project is the same team writing the code — design intent doesn't get lost in translation.",
    deliverables: ["Working software", "Sprint demos", "Burn-up tracking"],
    duration: "Project-specific",
  },
  {
    id: "launch",
    Icon: Rocket,
    eyebrow: "Launch",
    title: "Coordinated, rehearsed go-live.",
    description:
      "Cutover plans rehearsed in staging. Your on-call team trained on the runbooks before launch day. We sit with you through the first week — eyes on dashboards, not on the contract.",
    deliverables: ["Cutover plan", "Runbooks", "On-call rotation"],
    duration: "1–2 weeks",
  },
  {
    id: "operate",
    Icon: Activity,
    eyebrow: "Operate",
    title: "We stay on the hook after launch.",
    description:
      "Observability, SLAs and an improvement backlog managed jointly. The engagement doesn't end at go-live — it changes shape. Most clients renew because we're already part of the team.",
    deliverables: ["Live SLA dashboard", "Quarterly reviews", "Improvement backlog"],
    duration: "Ongoing",
  },
];
