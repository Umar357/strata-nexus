import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProcessStep from "./ProcessStep";
import { PROCESS_STEPS } from "./processData";

/**
 * Vertical timeline. A static rail sits behind the steps, with a brand-coloured
 * fill on top whose `scaleY` is driven by scroll progress through the wrapper —
 * so the line "draws" itself top-to-bottom as the user reads.
 *
 * Step circles are aligned to the rail (their column is 64px / 88px wide on
 * mobile/desktop, and the rail is centred within that column).
 */
export default function ProcessTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 0.6", "end 0.4"],
  });
  const fillScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={wrapRef} className="relative">
      {/* Rail track + fill — positioned at the centre of the marker column */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[31px] w-px md:left-[43px]"
      >
        {/* Static dim track */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border to-transparent" />
        {/* Animated brand fill — origin top, scaleY driven by scroll */}
        <motion.div
          style={{ scaleY: fillScaleY, transformOrigin: "top" }}
          className="absolute inset-0 bg-gradient-to-b from-brand-500 via-brand-accent to-brand-500"
        />
        {/* Soft glow following the brand fill */}
        <motion.div
          style={{ scaleY: fillScaleY, transformOrigin: "top" }}
          className="absolute inset-y-0 -inset-x-[3px] bg-brand-500/40 blur-md"
        />
      </div>

      <div className="relative flex flex-col">
        {PROCESS_STEPS.map((s, i) => (
          <ProcessStep
            key={s.id}
            step={s}
            index={i}
            total={PROCESS_STEPS.length}
          />
        ))}

        {/* Tail dot — endpoint marker on the rail */}
        <div className="grid grid-cols-[64px_1fr] gap-6 md:grid-cols-[88px_1fr] md:gap-10">
          <div className="relative flex justify-center">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="block h-3 w-3 rounded-full bg-brand-500"
              style={{ boxShadow: "0 0 16px rgba(0,212,190,0.9)" }}
            />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
