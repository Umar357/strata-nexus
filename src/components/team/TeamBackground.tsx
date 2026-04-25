import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Soft ambient backdrop for the Team section. Two slow-drifting glows
 * (one teal, one accent-blue) sit behind the cards. Quieter than Solutions
 * so the four leader cards remain the visual centre of gravity.
 */
export default function TeamBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-8%] top-[15%] h-[540px] w-[540px] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,190,0.18), transparent 60%)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-10%] top-[40%] h-[640px] w-[640px] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,255,0.15), transparent 60%)",
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
