import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Quiet backdrop for the FAQ section. A single right-biased glow plus the
 * masked grid — enough atmosphere to keep the page coherent without
 * competing with the accordion which is the read-here moment.
 */
export default function FaqBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "18%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute right-[-12%] top-[20%] h-[620px] w-[620px] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,255,0.14), transparent 60%)",
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
