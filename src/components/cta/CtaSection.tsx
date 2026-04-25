import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import SectionLabel from "../about/SectionLabel";
import CtaBackground from "./CtaBackground";
import { ease } from "@/lib/motion";

const LINE_1 = "Bring us the".split(" ");
const ACCENT = "hard problem.";

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

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <CtaBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-24 md:px-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: ease.swiftOut }}
          className="relative overflow-hidden rounded-[28px] border border-border-brand bg-surface-glass backdrop-blur-xl md:rounded-[36px]"
          style={{
            boxShadow:
              "0 30px 80px -30px rgba(0,212,190,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Soft inner glow from the top */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,212,190,0.14), transparent 60%)",
            }}
          />
          {/* Brand top rail */}
          <span
            aria-hidden
            className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent md:inset-x-20"
          />

          <div className="relative flex flex-col items-center px-6 py-16 text-center md:px-16 md:py-20">
            <SectionLabel>Let's build it</SectionLabel>

            <div className="flex flex-col items-center gap-10 md:gap-12">
              <h2>
                {LINE_1.map((w, i) => (
                  <span key={`a-${i}`} className="mx-[0.15em] inline-block">
                    <Word delay={i * 0.05}>{w}</Word>
                  </span>
                ))}
                <span className="mx-[0.15em] inline-block">
                  <span className="relative inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span
                      initial={{ y: "85%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.95,
                        ease: ease.swiftOut,
                        delay: LINE_1.length * 0.05,
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, ease: ease.swiftOut, delay: 0.35 }}
                className="max-w-[560px] text-[15px] leading-[1.7] text-text-secondary md:text-base"
              >
                A 30-minute call is all it takes to know whether we are the
                right team for it. We reply in under 24 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, ease: ease.swiftOut, delay: 0.5 }}
                className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
              >
                <a
                  href="https://cal.com/strata-nexus/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-[15px] font-medium text-text-inverse shadow-[0_10px_30px_-10px_rgba(0,212,190,0.6)] transition-shadow duration-300 hover:shadow-[0_14px_40px_-8px_rgba(0,212,190,0.8)]"
                >
                  Book a call
                  <ArrowRight
                    size={15}
                    strokeWidth={2.4}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="mailto:hello@stratanexus.id"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-glass px-5 py-3.5 text-[15px] font-medium text-text-secondary transition-colors duration-300 hover:border-border-brand hover:text-text-brand"
                >
                  <Mail size={14} strokeWidth={2.1} />
                  hello@stratanexus.id
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
