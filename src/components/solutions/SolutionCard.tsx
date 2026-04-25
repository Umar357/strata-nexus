import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

type SolutionCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  visual?: React.ReactNode;
  tags?: string[];
  featured?: boolean;
  className?: string;
  index: number;
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: ease.swiftOut,
      delay: 0.05 + i * 0.08,
    },
  }),
};

export default function SolutionCard({
  title,
  description,
  Icon,
  visual,
  tags,
  featured = false,
  className,
  index,
}: SolutionCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  // Shared wrapper styles
  const wrapperBase = cn(
    "group relative isolate flex overflow-hidden rounded-3xl",
    "border border-border bg-surface-glass backdrop-blur-md",
    "transition-colors duration-300 hover:border-border-brand",
  );

  // Local styles that layer over both variants
  const Spotlight = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(0,212,190,0.16), transparent 60%)",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </>
  );

  // === Featured layout (visual on top, rich body below) ================
  if (featured) {
    return (
      <motion.article
        ref={ref}
        onMouseMove={onMouseMove}
        custom={index}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className={cn(wrapperBase, "flex-col", className)}
        style={
          { "--mx": "50%", "--my": "50%" } as React.CSSProperties
        }
      >
        {Spotlight}

        {visual && (
          <div className="relative flex-1 overflow-hidden border-b border-border-subtle min-h-[280px] md:min-h-[340px]">
            <div className="absolute inset-0">{visual}</div>
          </div>
        )}

        <div className="relative flex flex-col gap-4 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-border-brand bg-glow-brand text-text-brand shadow-[0_0_24px_-8px_rgba(0,212,190,0.5)] transition-transform duration-300 group-hover:scale-[1.05]">
              <Icon size={22} strokeWidth={1.8} />
            </div>
            <ArrowBadge />
          </div>
          <div className="space-y-2">
            <h3
              className="font-sans text-xl font-semibold text-text-primary md:text-2xl"
              style={{ letterSpacing: "-0.01em" }}
            >
              {title}
            </h3>
            <p className="max-w-[520px] text-[15px] leading-[1.65] text-text-secondary">
              {description}
            </p>
          </div>
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-subtle bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    );
  }

  // === Standard layout (full-bleed visual + text overlay at bottom) =====
  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      custom={index}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={cn(wrapperBase, "min-h-[300px] flex-col", className)}
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
    >
      {Spotlight}

      {/* Full-bleed visual */}
      {visual && (
        <div className="absolute inset-0 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
          {visual}
        </div>
      )}

      {/* Legibility gradient (dark at bottom) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(6,10,16,0.92) 0%, rgba(6,10,16,0.7) 28%, rgba(6,10,16,0.15) 60%, transparent 85%)",
        }}
      />

      {/* Top-row floating controls (icon + arrow badge) */}
      <div className="relative z-10 flex items-start justify-between p-5">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-border-brand bg-[rgba(6,10,16,0.55)] text-text-brand backdrop-blur-md shadow-[0_0_24px_-8px_rgba(0,212,190,0.5)] transition-transform duration-300 group-hover:scale-[1.05]">
          <Icon size={18} strokeWidth={1.9} />
        </div>
        <ArrowBadge />
      </div>

      {/* Spacer pushes text to the bottom */}
      <div className="relative flex-1" />

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col gap-1.5 px-6 pb-6">
        <h3
          className="font-sans text-lg font-semibold text-text-primary md:text-xl"
          style={{ letterSpacing: "-0.01em" }}
        >
          {title}
        </h3>
        <p className="text-[13.5px] leading-[1.6] text-text-secondary">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-subtle bg-[rgba(6,10,16,0.55)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ArrowBadge() {
  return (
    <span
      aria-hidden
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-[rgba(6,10,16,0.55)] text-text-tertiary backdrop-blur-md opacity-0 transition-all duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-border-brand group-hover:text-text-brand group-hover:opacity-100"
    >
      <ArrowUpRight size={15} strokeWidth={2} />
    </span>
  );
}
