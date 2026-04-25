import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

function PrimaryCTA() {
  return (
    <motion.a
      href="#contact"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      initial="rest"
      animate="rest"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full",
        "bg-gradient-cta text-text-inverse",
        "px-8 py-3 text-base font-medium",
        "shadow-[0_10px_40px_-12px_rgba(0,212,190,0.6)]",
        "transition-shadow duration-300",
        "hover:shadow-[0_20px_60px_-10px_rgba(0,212,190,0.85)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page",
      )}
    >
      {/* Shimmer sweep */}
      <motion.span
        aria-hidden
        variants={{
          rest: { x: "-120%" },
          hover: {
            x: "120%",
            transition: { duration: 0.9, ease: ease.swiftOut },
          },
        }}
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
        }}
      />
      <span className="relative z-10">Book a Consultation</span>
      <motion.span
        className="relative z-10 inline-flex"
        variants={{
          rest: { x: 0 },
          hover: { x: 4, transition: { type: "spring", stiffness: 320 } },
        }}
      >
        <ArrowRight size={16} strokeWidth={2.4} />
      </motion.span>
    </motion.a>
  );
}

function SecondaryCTA() {
  return (
    <motion.a
      href="#solutions"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      initial="rest"
      animate="rest"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 rounded-full",
        "border border-border bg-interactive-secondary text-text-primary",
        "px-8 py-3 text-base font-medium",
        "backdrop-blur-sm transition-all duration-300",
        "hover:border-border-brand hover:bg-white/[0.06]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page",
      )}
    >
      <span>Explore Services</span>
      <motion.span
        className="inline-flex text-text-brand"
        variants={{
          rest: { x: 0 },
          hover: { x: 3, transition: { type: "spring", stiffness: 320 } },
        }}
      >
        <ChevronRight size={16} strokeWidth={2.4} />
      </motion.span>
    </motion.a>
  );
}

export default function HeroCTAs() {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
    >
      <PrimaryCTA />
      <SecondaryCTA />
    </motion.div>
  );
}
