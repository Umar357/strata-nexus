import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-[17px] py-[9px]",
        "border border-border-brand bg-glow-brand",
        "shadow-[0_0_24px_-6px_rgba(0,212,190,0.35)]",
        "font-mono text-sm text-text-brand tracking-normal",
        "backdrop-blur-sm",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 rounded-full bg-brand-500 animate-pulse-dot" />
        <span className="relative h-2 w-2 rounded-full bg-brand-500" />
      </span>
      <span>{children}</span>
    </motion.div>
  );
}
