export type FaqItem = {
  q: string;
  a: string;
  /** Topic chip — shows in the corner of each row. */
  topic: string;
};

export const FAQS: FaqItem[] = [
  {
    topic: "Engagement",
    q: "How do projects typically start?",
    a: "A 30-minute conversation, then a paid two-week Discover sprint. You get a written architecture brief, a phased plan, and a fixed price for the next stage. If you decide not to continue past Discover, you keep the brief — no lock-in.",
  },
  {
    topic: "Pricing",
    q: "Fixed price or time-and-materials?",
    a: "Both, picked per stage. Discover and Architect are fixed scope, fixed price. Build is usually time-boxed sprints with a capped budget per increment. Operate is a monthly retainer sized to your SLA. We tell you before you sign which model fits.",
  },
  {
    topic: "Team",
    q: "Will I always be talking to the same people?",
    a: "Yes. The four humans you meet during Discover are the same four who write the code, ship the release, and pick up the call at 2am if something breaks. No account managers, no offshore handoff, no rotating bench.",
  },
  {
    topic: "Stack",
    q: "Do you have a preferred tech stack?",
    a: "We have defaults — TypeScript, Postgres, Kubernetes, Terraform — but we choose tools per problem. If your ops team runs .NET on Azure, that is what we ship. Pragmatism over religion.",
  },
  {
    topic: "Operations",
    q: "What happens after launch?",
    a: "Operate is an ongoing retainer. You get an SLA in writing, a 24×7 on-call rotation across the four of us, monthly health reviews, and a quarterly roadmap session. Average response time on a P1 is under 15 minutes.",
  },
  {
    topic: "Security",
    q: "How do you handle data, IP, and compliance?",
    a: "All code lives in your repos under your accounts; we work as collaborators, not owners. We sign NDAs and DPAs before Discover begins. ISO 27001-aligned controls, audit trails, and an option for on-prem development environments for regulated industries.",
  },
  {
    topic: "Region",
    q: "Do you only work with Indonesian companies?",
    a: "Most of our work is in Indonesia, where we know the regulatory and operational context end-to-end (BI, OJK, BSSN, GR-71). We also serve regional offices of multinationals — the Bandung timezone is convenient for SG, KL, BKK, MEL, and SYD.",
  },
  {
    topic: "Capacity",
    q: "You are only four people — can you actually deliver?",
    a: "We take on two to three engagements at a time. That is the constraint that lets us promise the same humans throughout. If we are at capacity, we will say so, suggest a start date, and not pretend otherwise.",
  },
];
