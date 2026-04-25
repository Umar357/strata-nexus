import { motion } from "framer-motion";
import { headlineLine, headlineWord } from "@/lib/motion";

const LINE_1 = "Build Stronger Digital Foundations".split(" ");
const LINE_2_PREFIX = "with".split(" ");
const BRAND_WORD = "STRATA NEXUS";

function Word({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block overflow-hidden align-bottom pb-[0.08em]">
      <motion.span variants={headlineWord} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

export default function HeroHeadline() {
  return (
    <motion.h1
      variants={headlineLine}
      className="text-center font-sans font-bold tracking-tight text-text-primary"
      style={{
        fontSize: "clamp(2.25rem, 5.2vw, 3.75rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
      }}
    >
      <span className="block">
        {LINE_1.map((w, i) => (
          <span key={`l1-${i}`} className="mx-[0.18em] inline-block">
            <Word>{w}</Word>
          </span>
        ))}
      </span>
      <span className="mt-1 block md:mt-2">
        {LINE_2_PREFIX.map((w, i) => (
          <span key={`l2-${i}`} className="mx-[0.18em] inline-block">
            <Word>{w}</Word>
          </span>
        ))}
        <span className="mx-[0.18em] inline-block">
          <span className="relative inline-block overflow-hidden align-bottom pb-[0.08em]">
            <motion.span
              variants={headlineWord}
              className="inline-block bg-gradient-brand-text bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: "200% auto" }}
            >
              {BRAND_WORD}
            </motion.span>
          </span>
        </span>
      </span>
    </motion.h1>
  );
}
