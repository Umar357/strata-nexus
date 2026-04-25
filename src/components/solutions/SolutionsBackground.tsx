import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Soft ambient background for the Solutions section.
 * Two glows drift in opposite directions as the section passes through view,
 * plus a fine grid overlay that fades from center. Keeps the bento grid
 * readable while adding a sense of depth.
 */
export default function SolutionsBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-25%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-8%] top-[10%] h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,255,0.18), transparent 60%)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-8%] top-[45%] h-[620px] w-[620px] rounded-full opacity-60 blur-3xl"
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
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
        }}
      />
    </div>
  );
}
