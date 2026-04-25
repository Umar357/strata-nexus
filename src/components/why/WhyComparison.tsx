import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { COMPARISON_ROWS, type ComparisonRow } from "./whyData";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

function Row({ row, index }: { row: ComparisonRow; index: number }) {
  const Icon = row.Icon;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
      className={cn(
        "grid grid-cols-1 items-stretch md:grid-cols-[1fr_auto_1fr]",
        // Subtle row separator only between rows
        index !== 0 && "border-t border-border-subtle/60",
      )}
    >
      {/* WITHOUT side */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -28 },
          show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: ease.swiftOut },
          },
        }}
        className="relative flex items-start gap-4 px-6 py-7 md:px-8 md:py-8"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-white/40">
          <X size={16} strokeWidth={2.2} />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-base font-medium text-white/55 line-through decoration-white/20 decoration-[1.5px] underline-offset-2">
            {row.without.title}
          </p>
          <p className="text-[13px] leading-[1.55] text-white/35">
            {row.without.sub}
          </p>
        </div>
      </motion.div>

      {/* Center connector — only on desktop */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.7 },
          show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: ease.swiftOut, delay: 0.1 },
          },
        }}
        className="hidden items-center justify-center px-2 md:flex"
      >
        <div className="grid h-9 w-9 place-items-center rounded-full border border-border-brand bg-glow-brand text-text-brand">
          <ArrowRight size={14} strokeWidth={2.4} />
        </div>
      </motion.div>

      {/* WITH STRATA side */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 28 },
          show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: ease.swiftOut, delay: 0.05 },
          },
        }}
        className={cn(
          "relative flex items-start gap-4 px-6 py-7 md:px-8 md:py-8",
          // Brand accent bar on the left edge of "with" cell on desktop
          "md:before:absolute md:before:bottom-6 md:before:left-0 md:before:top-6 md:before:w-px md:before:bg-gradient-to-b md:before:from-transparent md:before:via-brand-500/60 md:before:to-transparent",
        )}
      >
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border-brand bg-glow-brand text-text-brand"
          style={{ boxShadow: "0 0 24px -8px rgba(0,212,190,0.6)" }}
        >
          <Icon size={16} strokeWidth={2} />
        </span>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-start gap-2">
            <p className="text-base font-semibold text-text-primary">
              {row.withStrata.title}
            </p>
            <Check
              size={14}
              strokeWidth={2.6}
              className="mt-1 shrink-0 text-text-brand"
            />
          </div>
          <p className="text-[13px] leading-[1.55] text-text-secondary">
            {row.withStrata.sub}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyComparison() {
  return (
    <div className="relative">
      {/* Brand glow that biases the right column */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-50 blur-3xl md:block"
        style={{
          background:
            "radial-gradient(ellipse at right center, rgba(0,212,190,0.12), transparent 60%)",
        }}
      />

      <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface-glass backdrop-blur-md">
        {/* Headers */}
        <div className="grid grid-cols-1 border-b border-border-subtle md:grid-cols-[1fr_auto_1fr]">
          <div className="px-6 py-5 md:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              Without Strata Nexus
            </p>
          </div>
          <div className="hidden md:block" />
          <div className="relative border-t border-border-subtle px-6 py-5 md:border-l md:border-t-0 md:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-brand">
              With Strata Nexus
            </p>
            {/* Brand top rail on the with column */}
            <span
              aria-hidden
              className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent md:inset-x-8"
            />
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {COMPARISON_ROWS.map((r, i) => (
            <Row key={r.withStrata.title} row={r} index={i} />
          ))}
        </div>

        {/* Bottom band — strong concluding line */}
        <div className="grid grid-cols-1 border-t border-border-subtle bg-[radial-gradient(ellipse_at_right,rgba(0,212,190,0.08),transparent_70%)] md:grid-cols-[1fr_auto_1fr]">
          <div className="px-6 py-6 md:px-8" />
          <div className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: ease.swiftOut }}
            className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-8"
          >
            <p className="text-sm text-text-secondary">
              Six disciplines. One contract.{" "}
              <span className="text-text-primary">Zero hand-offs.</span>
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-4 py-2 text-sm font-medium text-text-inverse shadow-[0_8px_30px_-10px_rgba(0,212,190,0.6)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(0,212,190,0.8)]"
            >
              Talk to us
              <ArrowRight
                size={14}
                strokeWidth={2.4}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
