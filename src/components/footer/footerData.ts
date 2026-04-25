export type FooterLink = { label: string; href: string };

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Software Engineering", href: "#solutions" },
      { label: "Cloud & Infrastructure", href: "#solutions" },
      { label: "Cybersecurity", href: "#solutions" },
      { label: "Network Engineering", href: "#solutions" },
      { label: "Smart Building", href: "#solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "How We Deliver", href: "#process" },
      { label: "Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Book a call", href: "https://cal.com/strata-nexus/intro" },
      { label: "hello@stratanexus.id", href: "mailto:hello@stratanexus.id" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
];
