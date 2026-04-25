import { motion } from "framer-motion";
import SectionLabel from "../about/SectionLabel";
import { ease } from "@/lib/motion";

const LINE_1 = "Four people.".split(" ");
const LINE_2_PRE = "Same team on every".split(" ");
const ACCENT = "engagement.";

function Word({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
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

export default function TeamIntro() {
  const all = [...LINE_1, ...LINE_2_PRE];

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <SectionLabel>The Team</SectionLabel>

      <h2
        className="mx-auto max-w-[980px] font-sans font-bold tracking-tight text-text-primary"
        style={{
          fontSize: "clamp(2rem, 4.6vw, 3.25rem)",
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
        }}
      >
        {LINE_1.map((w, i) => (
          <span key={`a-${i}`} className="mx-[0.15em] inline-block">
            <Word delay={i * 0.05}>{w}</Word>
          </span>
        ))}
        <br />
        {LINE_2_PRE.map((w, i) => (
          <span key={`b-${i}`} className="mx-[0.15em] inline-block">
            <Word delay={(LINE_1.length + i) * 0.05}>{w}</Word>
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
                delay: all.length * 0.05,
              }}
              className="inline-block bg-gradient-brand-text bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: "200% auto" }}
            >
              {ACCENT}
            </motion.span>
          </span>
        </span>
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: ease.swiftOut, delay: 0.3 }}
        className="max-w-[680px] text-base leading-[1.65] text-text-secondary md:text-lg"
      >
        Strata Nexus is intentionally small. Strategy, architecture, software
        and design — four people, no hand-offs. The same humans you meet on
        day one are the ones still on call in year two.
      </motion.p>
    </div>
  );
}
