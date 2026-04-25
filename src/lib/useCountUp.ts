import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

/**
 * Motion-value counter that smoothly animates from 0 to `target`
 * once `inView` flips true. Returns a MotionValue<string> with the
 * value rounded (and optionally with a decimal place) — bind it to
 * a <motion.span>.
 */
export function useCountUp({
  target,
  inView,
  duration = 2,
  decimals = 0,
}: {
  target: number;
  inView: boolean;
  duration?: number;
  decimals?: number;
}) {
  const count = useMotionValue(0);
  const display = useTransform(count, (n) => n.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, target, duration, count]);

  return display;
}
