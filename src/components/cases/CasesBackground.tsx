import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Ambient backdrop for the Cases section — single subtle aurora glow that
 * tracks scroll, plus a fine grid masked toward the center. Quieter than
 * the Solutions background so the case cards visually own the space.
 */
export default function CasesBackground() {
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
        className="absolute left-1/2 top-[20%] h-[680px] w-[680px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,190,0.18), transparent 65%)",
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
