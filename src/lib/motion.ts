import type { Variants } from "framer-motion";

/**
 * Shared motion tokens — consistent timing & easing across the app.
 * Keeping these centralised so a designer-dev handoff for animation
 * can happen in one file the same way the design tokens live in tokens.css.
 */
export const ease = {
  swiftOut: [0.22, 1, 0.36, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  inOutQuint: [0.83, 0, 0.17, 1] as const,
};

export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: ease.swiftOut },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.swiftOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: ease.spring },
  },
};

/** Revealed word-by-word headline. Use with splitWords helper. */
export const headlineWord: Variants = {
  hidden: { opacity: 0, y: "60%", rotateX: -45 },
  show: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: { duration: 0.9, ease: ease.swiftOut },
  },
};

export const headlineLine: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};
