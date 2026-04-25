import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, LifeBuoy } from "lucide-react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Modern & Scalable",
    body: "Stacks built on today's standards — ready to grow with tomorrow's demands, without painful rewrites.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    body: "Physical and digital security is woven into every layer, from access policies to endpoint hardening.",
  },
  {
    icon: LifeBuoy,
    title: "Operationally Excellent",
    body: "We stay with you beyond go-live — observability, SLAs and continuous improvement as standard.",
  },
];

function Pillar({
  p,
  index,
}: {
  p: (typeof PILLARS)[number];
  index: number;
}) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: ease.swiftOut,
        delay: index * 0.12,
      }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-surface-glass p-8",
        "backdrop-blur-md transition-colors duration-300",
        "hover:border-border-brand",
      )}
    >
      {/* Aurora accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(0,212,190,0.22), transparent 60%)",
        }}
      />

      <div
        className={cn(
          "grid h-12 w-12 place-items-center rounded-xl border border-border-brand bg-glow-brand text-text-brand",
          "shadow-[0_0_24px_-8px_rgba(0,212,190,0.5)] transition-transform duration-300",
          "group-hover:scale-[1.06] group-hover:rotate-[-3deg]",
        )}
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <div className="relative space-y-2">
        <h4 className="text-lg font-semibold text-text-primary md:text-xl">
          {p.title}
        </h4>
        <p className="text-sm leading-[1.65] text-text-secondary md:text-[15px]">
          {p.body}
        </p>
      </div>

      {/* Bottom rule */}
      <span
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-brand-accent to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />
    </motion.article>
  );
}

export default function AboutPillars() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {PILLARS.map((p, i) => (
        <Pillar key={p.title} p={p} index={i} />
      ))}
    </div>
  );
}
