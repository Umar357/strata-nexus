import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ease } from "@/lib/motion";

export default function ScrollIndicator() {
  return (
    <motion.button
      type="button"
      onClick={() =>
        window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" })
      }
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.9, ease: ease.swiftOut }}
      whileHover={{ y: -2 }}
      className="group relative z-20 mx-auto flex flex-col items-center gap-3 pb-8 pt-6"
      aria-label="Scroll to next section"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 transition-colors group-hover:text-white/60">
        Scroll
      </span>
      <span className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors group-hover:border-border-brand">
        <motion.span
          className="inline-flex text-white/50 group-hover:text-text-brand"
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={16} strokeWidth={2} />
        </motion.span>
      </span>
    </motion.button>
  );
}
