import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The CTA backdrop is the most charged moment on the page. Two large
 * brand-aurora orbs — one teal, one accent-blue — drift in opposite
 * directions so the band feels alive but never busy. Stronger than other
 * backgrounds because this is the closer.
 */
export default function CtaBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-12%", "18%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["8%", "-22%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["-2%", "4%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Primary brand glow — left */}
      <motion.div
        style={{ y: y1, x: x1 }}
        className="absolute left-[-12%] top-[5%] h-[720px] w-[720px] rounded-full opacity-65 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,190,0.28), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Accent — right */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-15%] top-[20%] h-[760px] w-[760px] rounded-full opacity-55 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,255,0.22), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Tight central halo behind the headline */}
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,190,0.16), transparent 65%)",
        }}
      />

      {/* Masked grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 75%)",
        }}
      />

      {/* Top + bottom hairline rails */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
      />
    </div>
  );
}
