import {
  Users,
  Cpu,
  LifeBuoy,
  GaugeCircle,
  Unlock,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export type ComparisonRow = {
  Icon: LucideIcon;
  without: { title: string; sub: string };
  withStrata: { title: string; sub: string };
};

/**
 * Differentiators framed against the alternative — answers "why us, not them"
 * directly. Focused on engagement / accountability / commercials, which is
 * complementary to the *technical* pillars in About (Modern, Secure, Operational).
 */
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    Icon: Users,
    without: {
      title: "Six vendors. Six contracts.",
      sub: "Integration risk lives in the gaps between them.",
    },
    withStrata: {
      title: "One team. One accountable contract.",
      sub: "We close the gaps because they're our gaps too.",
    },
  },
  {
    Icon: Cpu,
    without: {
      title: "Sales-led discovery.",
      sub: "Scope ratified by the people who'll never build it.",
    },
    withStrata: {
      title: "Engineer-led from day one.",
      sub: "The architects who scope it are the ones who ship it.",
    },
  },
  {
    Icon: LifeBuoy,
    without: {
      title: "Hand-off after launch.",
      sub: "Tickets are now your problem, billable as 'support'.",
    },
    withStrata: {
      title: "We stay on-call after go-live.",
      sub: "Observability, SLAs and improvement are part of the engagement.",
    },
  },
  {
    Icon: GaugeCircle,
    without: {
      title: "Vague SLAs in the appendix.",
      sub: "Hard to enforce, harder to measure.",
    },
    withStrata: {
      title: "Measurable, monitored SLAs.",
      sub: "Live dashboards your team can verify in real time.",
    },
  },
  {
    Icon: Unlock,
    without: {
      title: "Locked-in proprietary stack.",
      sub: "Switching costs designed to keep you, not serve you.",
    },
    withStrata: {
      title: "Open standards. Yours to keep.",
      sub: "Documented patterns your team can run without us.",
    },
  },
  {
    Icon: MapPin,
    without: {
      title: "An imported global playbook.",
      sub: "Translated to Indonesia after the fact.",
    },
    withStrata: {
      title: "Built in Indonesia, for Indonesia.",
      sub: "Local context — language, regulation, supply chain — by default.",
    },
  },
];
