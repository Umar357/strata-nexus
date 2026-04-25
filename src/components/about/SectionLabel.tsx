import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Eyebrow label used across the marketing sections. */
export default function SectionLabel({ children, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-brand bg-glow-brand px-4 py-2",
        "font-mono text-xs uppercase tracking-[0.22em] text-text-brand",
        "shadow-[0_0_24px_-8px_rgba(0,212,190,0.4)]",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inset-0 animate-pulse-dot rounded-full bg-brand-500" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-brand-500" />
      </span>
      {children}
    </motion.div>
  );
}
