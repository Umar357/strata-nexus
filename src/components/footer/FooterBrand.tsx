import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export default function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: ease.swiftOut }}
      className="flex flex-col gap-6"
    >
      <a
        href="#top"
        className="group inline-flex w-fit flex-col gap-1.5"
      >
        <span className="font-sans text-base font-semibold tracking-wide text-text-primary transition-colors duration-300 group-hover:text-text-brand">
          PT. STRATA NEXUS
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
          Teknologi · Bandung, ID
        </span>
      </a>

      <p className="max-w-[340px] text-[13.5px] leading-[1.7] text-text-secondary">
        Four engineers. Strategy, architecture, software and design under one
        roof — built for organisations that need it done properly the first
        time.
      </p>

      {/* Status pill */}
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-brand bg-glow-brand px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-brand">
        <span className="relative inline-block h-1.5 w-1.5">
          <span className="absolute inset-0 animate-pulse-dot rounded-full bg-brand-500" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-500" />
        </span>
        Taking projects · Q3 2026
      </span>
    </motion.div>
  );
}
