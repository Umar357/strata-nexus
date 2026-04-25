import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Ambient background for the About section — two soft aurora glows that
 * drift in opposite directions as the user scrolls through the section.
 * Intentionally lighter than the hero's WebGL rays so the content reads.
 */
export default function AboutBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute left-[-10%] top-[10%] h-[520px] w-[520px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,190,0.18), transparent 60%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-10%] top-[40%] h-[620px] w-[620px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,255,0.14), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
}
