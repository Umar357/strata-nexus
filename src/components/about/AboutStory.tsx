import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Server,
  ShieldCheck,
  Cloud,
  Network,
  Building2,
  MonitorPlay,
} from "lucide-react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom platforms, APIs and internal tooling built to last.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Servers, storage and virtualization for growing teams.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Digital and physical — from endpoint to access control.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    desc: "Hybrid and multi-cloud architectures built to scale.",
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Reliable, observable networks across every site.",
  },
  {
    icon: Building2,
    title: "Smart Building",
    desc: "Unified IoT, HVAC, lighting and access systems.",
  },
  {
    icon: MonitorPlay,
    title: "Multimedia",
    desc: "AV, digital signage and immersive experiences.",
  },
];

function CapabilityRow({
  cap,
  index,
}: {
  cap: (typeof CAPABILITIES)[number];
  index: number;
}) {
  const Icon = cap.icon;
  return (
    <motion.li
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: 0.15 + index * 0.06,
        ease: ease.swiftOut,
      }}
      className={cn(
        "group flex items-center gap-4 border-t border-border-subtle px-5 py-4 first:border-t-0",
        "transition-colors duration-300 hover:bg-white/[0.02]",
      )}
    >
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border-brand bg-glow-brand",
          "text-text-brand transition-all duration-300",
          "group-hover:-translate-y-0.5 group-hover:shadow-[0_0_20px_-4px_rgba(0,212,190,0.6)]",
        )}
      >
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-text-primary">{cap.title}</p>
        <p className="truncate text-xs text-text-secondary">{cap.desc}</p>
      </div>
      <span
        aria-hidden
        className="h-8 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.li>
  );
}

export default function AboutStory() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  // Right-side card floats 50px up as the section scrolls through the viewport
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-0.8, 0.8]);

  return (
    <div
      ref={wrapRef}
      className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-16"
    >
      {/* Left — story */}
      <div className="flex flex-col gap-6 pt-2">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: ease.swiftOut }}
          className="text-2xl font-semibold text-text-primary md:text-3xl"
          style={{ letterSpacing: "-0.01em" }}
        >
          One team. The whole stack.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: ease.swiftOut, delay: 0.08 }}
          className="max-w-[520px] text-base leading-[1.7] text-text-secondary"
        >
          PT. Strata Nexus Teknologi was founded to close the gap between
          ambitious enterprise goals and fragmented technology stacks. We unify
          the disciplines that used to need six vendors into one accountable
          team that ships — and stays on the hook long after go-live.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: ease.swiftOut, delay: 0.18 }}
          className="max-w-[520px] text-base leading-[1.7] text-text-secondary"
        >
          Infrastructure should be an accelerant, not a constraint. Every
          solution we ship — whether a line-of-business application or a
          campus-wide security system — is designed to scale with your roadmap
          and remain maintainable by the teams who operate it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: ease.swiftOut, delay: 0.28 }}
          className="flex flex-wrap items-center gap-2 pt-2"
        >
          {["Modern", "Efficient", "Scalable", "Secure by design"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface-glass px-3 py-1.5 text-xs text-text-secondary"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Right — parallax capability card */}
      <motion.div style={{ y, rotate }} className="relative">
        {/* Decorative glow behind card */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-[32px] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(0,212,190,0.18), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,168,255,0.12), transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: ease.swiftOut }}
          className={cn(
            "relative overflow-hidden rounded-[24px] border border-border bg-surface-glass backdrop-blur-xl",
            "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]",
          )}
        >
          {/* Card header */}
          <div className="flex items-center justify-between border-b border-border-subtle px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(0,212,190,0.8)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                Capabilities
              </span>
            </div>
            <span className="font-mono text-[11px] text-text-tertiary">
              7 domains
            </span>
          </div>

          {/* Capability rows */}
          <ul className="flex flex-col">
            {CAPABILITIES.map((c, i) => (
              <CapabilityRow key={c.title} cap={c} index={i} />
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
