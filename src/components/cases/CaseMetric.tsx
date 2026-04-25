import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";
import { ease } from "@/lib/motion";
import type { CaseMetric as CaseMetricType } from "./caseData";

type Props = {
  metric: CaseMetricType;
  index: number;
};

export default function CaseMetric({ metric, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const display = useCountUp({
    target: metric.value,
    inView,
    duration: 2,
    decimals: metric.decimals ?? 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.65,
        ease: ease.swiftOut,
        delay: 0.1 + index * 0.08,
      }}
      className="relative flex flex-col gap-1 border-l border-border-subtle pl-4"
    >
      {/* Top brand tick */}
      <span
        aria-hidden
        className="absolute -left-px top-0 h-6 w-px bg-brand-500"
      />
      <div className="flex items-baseline gap-0.5 font-sans font-semibold text-text-primary">
        {metric.prefix && (
          <span className="text-text-brand text-2xl">{metric.prefix}</span>
        )}
        <motion.span
          className="bg-gradient-brand-text bg-clip-text text-transparent"
          style={{
            backgroundSize: "200% auto",
            fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {display}
        </motion.span>
        {metric.suffix && (
          <span
            className="text-text-brand"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              lineHeight: 1.2,
            }}
          >
            {metric.suffix}
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-text-primary">{metric.label}</p>
      {metric.caption && (
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
          {metric.caption}
        </p>
      )}
    </motion.div>
  );
}
