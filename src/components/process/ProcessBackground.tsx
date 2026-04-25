import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Soft ambient backdrop for the Process section — left-biased aurora glow
 * (mirroring where the timeline rail lives) plus the masked grid that
 * the rest of the marketing sections use. Intentionally quiet so the
 * timeline rail is the visual centrepiece.
 */
export default function ProcessBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute left-[-10%] top-[15%] h-[640px] w-[640px] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,190,0.18), transparent 60%)",
          }}
        />
      </motion.div>
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
}
