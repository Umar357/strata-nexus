import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

type StatTileProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  decimals?: number;
  index: number;
};

export default function StatTile({
  value,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  decimals = 0,
  index,
}: StatTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const display = useCountUp({ target: value, inView, duration: 2, decimals });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        ease: ease.swiftOut,
        delay: index * 0.1,
      }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface-glass px-6 py-8",
        "backdrop-blur-md transition-colors duration-300",
        "hover:border-border-brand",
      )}
    >
      {/* Top accent line */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-60"
      />

      {/* Number */}
      <div className="flex items-baseline gap-1 font-sans font-semibold text-text-primary">
        {prefix && (
          <span className="text-2xl text-text-brand md:text-3xl">{prefix}</span>
        )}
        <motion.span
          className="bg-gradient-brand-text bg-clip-text text-transparent"
          style={{
            backgroundSize: "200% auto",
            fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {display}
        </motion.span>
        {suffix && (
          <span
            className="text-text-brand"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
            }}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="mt-3 space-y-0.5">
        <p className="text-sm font-medium text-text-primary">{label}</p>
        {sublabel && (
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
            {sublabel}
          </p>
        )}
      </div>

      {/* Hover glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,212,190,0.12), transparent 60%)",
        }}
      />
    </motion.div>
  );
}
