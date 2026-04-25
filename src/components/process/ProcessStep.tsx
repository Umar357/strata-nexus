import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";
import type { ProcessStep as ProcessStepType } from "./processData";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  step: ProcessStepType;
  index: number;
  total: number;
};

export default function ProcessStep({ step, index, total }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Gate the "active" treatment on whether the step's centerline is in view —
  // pairs naturally with the connector line filling past it.
  const inView = useInView(ref, {
    once: true,
    amount: 0.45,
    margin: "0px 0px -20% 0px",
  });
  const Icon = step.Icon;

  return (
    <div ref={ref} className="relative grid grid-cols-[64px_1fr] gap-6 md:grid-cols-[88px_1fr] md:gap-10">
      {/* Marker column — the circle sits on the timeline line */}
      <div className="relative flex items-start justify-center pt-1">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.6, ease: ease.spring }}
          className={cn(
            "relative grid h-12 w-12 place-items-center rounded-full border transition-colors duration-500 md:h-14 md:w-14",
            inView
              ? "border-border-brand bg-glow-brand text-text-brand"
              : "border-border bg-surface-glass text-text-tertiary",
          )}
          style={
            inView
              ? { boxShadow: "0 0 32px -6px rgba(0,212,190,0.65)" }
              : undefined
          }
        >
          <Icon size={20} strokeWidth={1.9} />
          {/* Pulse ring when active */}
          {inView && (
            <motion.span
              className="absolute inset-0 rounded-full border border-border-brand"
              animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Content column */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: ease.swiftOut, delay: 0.1 }}
        className="flex flex-col gap-4 pb-16 md:pb-24"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-brand">
            Stage {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-border-subtle bg-white/[0.03] px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-text-secondary">
            {step.eyebrow}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-text-tertiary">
            <Clock size={11} />
            {step.duration}
          </span>
        </div>

        <h3
          className="font-sans text-2xl font-semibold text-text-primary md:text-[28px]"
          style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
        >
          {step.title}
        </h3>

        <p className="max-w-[640px] text-[15px] leading-[1.7] text-text-secondary">
          {step.description}
        </p>

        {/* Deliverables */}
        <div className="flex flex-col gap-2 pt-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
            What you receive
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {step.deliverables.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-glass px-3 py-1.5 text-[12px] text-text-secondary backdrop-blur-sm"
              >
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                {d}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
