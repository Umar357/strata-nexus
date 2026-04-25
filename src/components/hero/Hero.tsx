import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroNav from "./HeroNav";
import HeroHeadline from "./HeroHeadline";
import HeroCTAs from "./HeroCTAs";
import TrustedBy from "./TrustedBy";
import ScrollIndicator from "./ScrollIndicator";
import Badge from "@/components/ui/Badge";
import { fadeUp, heroContainer } from "@/lib/motion";

/**
 * Hero section — orchestrates:
 *  - Layered animated background
 *  - Sticky top nav
 *  - Centered main content with staggered entrance
 *  - Scroll indicator
 *  - Subtle mouse-driven parallax on the core content (desktop only, respects reduced-motion)
 */
export default function Hero() {
  const wrapRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.4 });
  const tx = useTransform(sx, (v) => `${v * 8}px`);
  const ty = useTransform(sy, (v) => `${v * 6}px`);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !fine) return;

    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <section
      ref={wrapRef}
      id="top"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden"
    >
      <HeroBackground />

      <motion.div
        initial="hidden"
        animate="show"
        variants={heroContainer}
        className="relative z-10 flex min-h-screen w-full flex-col"
      >
        <HeroNav />

        <div className="flex flex-1 items-center justify-center px-6 py-16 md:px-16 md:py-24">
          <motion.div
            style={{ x: tx, y: ty }}
            className="flex w-full max-w-[1080px] flex-col items-center gap-8"
          >
            <motion.div variants={fadeUp}>
              <Badge>Enterprise Technology Partner</Badge>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="w-full"
              style={{ perspective: "1000px" }}
            >
              <HeroHeadline />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-[672px] text-center text-base leading-[1.62] text-text-secondary md:text-lg"
            >
              PT. Strata Nexus Teknologi delivers software development, IT
              infrastructure, digital and physical security, cloud, networking,
              smart building, and multimedia solutions with a modern, efficient,
              and scalable approach.
            </motion.p>

            <HeroCTAs />

            <TrustedBy />
          </motion.div>
        </div>

        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
