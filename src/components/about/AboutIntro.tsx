import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { ease } from "@/lib/motion";

const HEAD_LINE_1 = "Enterprise-grade technology,".split(" ");
const HEAD_LINE_2_PRE = "engineered for what you".split(" ");
const HEAD_LINE_2_ACCENT = "build next.";

function Word({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="relative inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span
        initial={{ y: "85%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.85, ease: ease.swiftOut, delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function AboutIntro() {
  const allWords = [...HEAD_LINE_1, ...HEAD_LINE_2_PRE];

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <SectionLabel>About Strata Nexus</SectionLabel>

      <h2
        className="mx-auto max-w-[980px] font-sans font-bold tracking-tight text-text-primary"
        style={{
          fontSize: "clamp(2rem, 4.6vw, 3.25rem)",
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
        }}
      >
        {HEAD_LINE_1.map((w, i) => (
          <span key={`a-${i}`} className="mx-[0.15em] inline-block">
            <Word delay={i * 0.05}>{w}</Word>
          </span>
        ))}
        <br />
        {HEAD_LINE_2_PRE.map((w, i) => (
          <span key={`b-${i}`} className="mx-[0.15em] inline-block">
            <Word delay={(HEAD_LINE_1.length + i) * 0.05}>{w}</Word>
          </span>
        ))}
        <span className="mx-[0.15em] inline-block">
          <span className="relative inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              initial={{ y: "85%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.9,
                ease: ease.swiftOut,
                delay: allWords.length * 0.05,
              }}
              className="inline-block bg-gradient-brand-text bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: "200% auto" }}
            >
              {HEAD_LINE_2_ACCENT}
            </motion.span>
          </span>
        </span>
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.9,
          ease: ease.swiftOut,
          delay: 0.3,
        }}
        className="max-w-[680px] text-base leading-[1.65] text-text-secondary md:text-lg"
      >
        We partner with organizations in Indonesia to design, deploy and operate
        the digital and physical infrastructure that powers modern enterprises —
        from custom software to cloud, from networks to smart-building systems.
      </motion.p>
    </div>
  );
}
