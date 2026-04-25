import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem as FaqItemType } from "./faqData";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  item: FaqItemType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

/**
 * Single accordion row. Uses controlled open state from the parent so only
 * one item is open at a time. The "+" rotates 45° to become a "×" and the
 * row gets a subtle brand top rail when active.
 */
export default function FaqItem({ item, index, isOpen, onToggle }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        ease: ease.swiftOut,
        delay: index * 0.04,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "relative overflow-hidden border-b border-border-subtle/70",
        "transition-colors duration-300",
        isOpen && "bg-white/[0.015]",
      )}
    >
      {/* Brand top rail when open */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Hover sheen */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          hover && !isOpen ? "opacity-100" : "opacity-0",
        )}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,212,190,0.05), transparent 70%)",
        }}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "group relative flex w-full items-start justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-7",
          "transition-colors duration-300",
        )}
      >
        <div className="flex flex-1 items-start gap-4 md:gap-6">
          <span className="hidden font-mono text-[11px] tracking-[0.18em] text-text-tertiary md:block md:pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
              {item.topic}
            </span>
            <h3
              className={cn(
                "text-[17px] font-medium transition-colors duration-300 md:text-[19px]",
                isOpen ? "text-text-primary" : "text-text-primary/90",
              )}
              style={{ letterSpacing: "-0.005em" }}
            >
              {item.q}
            </h3>
          </div>
        </div>

        <span
          aria-hidden
          className={cn(
            "relative grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
            isOpen
              ? "border-border-brand bg-glow-brand text-text-brand"
              : "border-border bg-surface-glass text-text-secondary group-hover:border-border-brand group-hover:text-text-brand",
          )}
          style={
            isOpen
              ? { boxShadow: "0 0 24px -8px rgba(0,212,190,0.6)" }
              : undefined
          }
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, ease: ease.swiftOut }}
            className="grid place-items-center"
          >
            <Plus size={16} strokeWidth={2.2} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.45, ease: ease.swiftOut },
              opacity: { duration: 0.3, ease: ease.swiftOut, delay: 0.05 },
            }}
            className="overflow-hidden"
          >
            <div className="flex gap-4 px-6 pb-7 md:gap-6 md:px-8 md:pb-8">
              <span className="hidden w-[28px] shrink-0 md:block" />
              <p className="max-w-[760px] text-[14.5px] leading-[1.7] text-text-secondary md:text-[15px]">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
