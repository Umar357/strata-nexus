import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import CaseMetric from "./CaseMetric";
import type { CaseStudy } from "./caseData";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

const STATUS_LABEL: Record<CaseStudy["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  ongoing: "Ongoing",
};

type Props = {
  caseStudy: CaseStudy;
  index: number;
  total: number;
};

export default function CaseCard({ caseStudy, index, total }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  // Gentle parallax on the visual as the card scrolls through
  const visualY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const reverse = index % 2 === 1;
  const Visual = caseStudy.Visual;

  return (
    <motion.article
      ref={wrapRef}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: ease.swiftOut }}
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-border bg-surface-glass p-6 backdrop-blur-md md:p-10",
      )}
    >
      {/* Top rail */}
      <span
        aria-hidden
        className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      {/* Card header — meta line */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-text-brand">
            Case {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-border-subtle bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary">
            {caseStudy.industry}
          </span>
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px]",
              caseStudy.status === "completed"
                ? "border border-border-subtle bg-white/[0.03] text-text-secondary"
                : "border border-border-brand bg-glow-brand text-text-brand",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                caseStudy.status === "completed"
                  ? "bg-text-tertiary"
                  : "animate-pulse-dot bg-brand-500",
              )}
            />
            {STATUS_LABEL[caseStudy.status]}
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-tertiary">
          <Calendar size={11} />
          {caseStudy.year}
        </div>
      </header>

      {/* Body — alternating side-by-side */}
      <div
        className={cn(
          "mt-8 grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* Visual */}
        <motion.div
          style={{ y: visualY }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0">
            <Visual />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-text-tertiary">
              {caseStudy.client}
            </p>
            <h3
              className="font-sans text-2xl font-semibold text-text-primary md:text-3xl"
              style={{
                letterSpacing: "-0.015em",
                lineHeight: 1.18,
              }}
            >
              {caseStudy.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-text-secondary">
              {caseStudy.description}
            </p>
          </div>

          {/* Metrics — count-up tiles */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {caseStudy.metrics.map((m, i) => (
              <CaseMetric key={m.label} metric={m} index={i} />
            ))}
          </div>

          {/* Stack + CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-5">
            <div className="flex flex-wrap items-center gap-1.5">
              {caseStudy.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-subtle bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={`#case-${caseStudy.id}`}
              className="group/cta inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.22em] text-text-brand"
            >
              View case
              <span className="grid h-7 w-7 place-items-center rounded-full border border-border-brand bg-glow-brand transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5">
                <ArrowUpRight size={13} strokeWidth={2.2} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
