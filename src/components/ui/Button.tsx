import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "whitespace-nowrap select-none transition-colors duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: cn(
    "relative overflow-hidden text-text-inverse",
    "bg-gradient-cta",
    "shadow-[0_10px_40px_-12px_rgba(0,212,190,0.55)]",
    "hover:shadow-[0_18px_60px_-10px_rgba(0,212,190,0.75)]",
  ),
  secondary: cn(
    "border bg-interactive-secondary text-text-primary",
    "border-border hover:border-border-brand hover:bg-white/5",
  ),
  outline: cn(
    "border text-text-brand border-border-brand",
    "hover:bg-glow-brand hover:border-brand-500/60",
  ),
  ghost: "text-text-secondary hover:text-text-primary",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-8 py-3",
  lg: "text-base px-10 py-4",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
          }}
        />
      )}
      {children}
    </motion.button>
  );
});

export default Button;
