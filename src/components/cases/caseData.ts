import {
  LearningPlatformVisual,
  TrainingCampusVisual,
  SmartHospitalVisual,
} from "./caseVisuals";

export type CaseStatus = "completed" | "in-progress" | "ongoing";

export type CaseMetric = {
  value: number;
  /** Suffix appended after the number (e.g. "%", "K", "ms"). */
  suffix?: string;
  /** Prefix shown before the number (e.g. "$"). */
  prefix?: string;
  /** Decimal places for the count-up. */
  decimals?: number;
  label: string;
  caption?: string;
};

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  year: string;
  status: CaseStatus;
  title: string;
  description: string;
  metrics: [CaseMetric, CaseMetric, CaseMetric];
  stack: string[];
  Visual: React.ComponentType;
};

/**
 * Case studies — anchored to the partners shown in the Hero "Trusted by"
 * row so the narrative is consistent across the page. Metrics use realistic
 * orders-of-magnitude for an Indonesian enterprise IT engagement.
 *
 * NOTE: visuals are React-based mockup placeholders. Replace with actual
 * screenshots in /public/case-studies/ and swap `Visual` for an <img>
 * when those become available.
 */
export const CASES: CaseStudy[] = [
  {
    id: "itb-online-learning",
    client: "Institut Teknologi Bandung",
    industry: "Education",
    year: "2024",
    status: "completed",
    title: "A learning platform built to survive finals week.",
    description:
      "We rebuilt ITB's online learning platform from the ground up — proctored exams, low-latency video, and a content CDN that absorbs the traffic spike when 50,000 students log in for finals.",
    metrics: [
      {
        value: 50,
        suffix: "K",
        label: "Concurrent students",
        caption: "Peak finals week",
      },
      {
        value: 99.95,
        suffix: "%",
        decimals: 2,
        label: "Uptime",
        caption: "Finals weeks · 2024",
      },
      {
        value: 12,
        suffix: " ms",
        label: "Video stream",
        caption: "p50 first-frame latency",
      },
    ],
    stack: ["Next.js", "AWS", "CloudFront", "Postgres", "Redis"],
    Visual: LearningPlatformVisual,
  },
  {
    id: "shk-training-network",
    client: "SHK Training",
    industry: "Corporate Training",
    year: "2025",
    status: "completed",
    title: "A training campus that just stays online.",
    description:
      "Greenfield network rollout across the SHK training campus — fourteen classrooms, eight hundred trainee devices, zero-touch onboarding, and a single pane of glass for the operations team.",
    metrics: [
      {
        value: 14,
        suffix: "",
        label: "Classrooms",
        caption: "Wired + wireless",
      },
      {
        value: 800,
        suffix: "+",
        label: "Daily devices",
        caption: "Trainee + staff",
      },
      {
        value: 99.9,
        suffix: "%",
        decimals: 1,
        label: "Network uptime",
        caption: "Rolling 12-month",
      },
    ],
    stack: ["Cisco", "Aruba", "ClearPass", "Microsoft 365"],
    Visual: TrainingCampusVisual,
  },
  {
    id: "rs-muhammadiyah-smart-hospital",
    client: "RS Muhammadiyah Bandung Selatan",
    industry: "Healthcare",
    year: "2026",
    status: "in-progress",
    title: "Six systems, one hospital, one team accountable.",
    description:
      "Greenfield smart-hospital build covering networking, IPTV, HVAC, access control, nurse-call and clinical-system integration. One contract, one accountable team — phased through 2026.",
    metrics: [
      {
        value: 380,
        suffix: "",
        label: "Beds",
        caption: "Connected at go-live",
      },
      {
        value: 24,
        suffix: "%",
        label: "Energy target",
        caption: "vs. baseline design",
      },
      {
        value: 6,
        suffix: "",
        label: "Systems unified",
        caption: "Single ops console",
      },
    ],
    stack: ["Cisco", "Honeywell", "Genetec", "HL7 / FHIR"],
    Visual: SmartHospitalVisual,
  },
];
