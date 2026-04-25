import { motion } from "framer-motion";
import {
  Play,
  Wifi,
  Activity,
  Building2,
  Thermometer,
  ShieldCheck,
  Zap,
  HeartPulse,
} from "lucide-react";

/**
 * Case-study visuals — animated React mockups intended as placeholders
 * for real product screenshots. They share the same dark glass-morphic
 * window-chrome treatment so the section reads as a set, not a grab-bag.
 *
 * Replace any of these with `<img src="/case-studies/<file>.png" />`
 * once real assets are available — keep the same outer wrapper.
 */

function ChromeFrame({
  title,
  liveLabel,
  children,
}: {
  title: string;
  liveLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-black/45 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-md">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/70" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
          {title}
        </span>
        {liveLabel && (
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-text-brand">
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-brand-500" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-brand-500" />
            </span>
            {liveLabel}
          </span>
        )}
      </div>
      <div className="relative h-[calc(100%-44px)]">{children}</div>
      {/* Corner glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,190,0.25), transparent 70%)",
        }}
      />
    </div>
  );
}

// === Case 1: ITB Learning Platform ====================================

export function LearningPlatformVisual() {
  const chapters = [
    "Introduction",
    "Algorithm complexity",
    "Recursion",
    "Dynamic programming",
    "Graph traversal",
  ];
  return (
    <ChromeFrame title="learn.itb · IF2110" liveLabel="LIVE">
      <div className="grid h-full grid-cols-[1.4fr_1fr] gap-4 p-4">
        {/* Video pane */}
        <div className="flex flex-col gap-3">
          <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-gradient-to-br from-brand-500/10 via-black/30 to-brand-accent/10">
            {/* Faux thumbnail */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, rgba(0,212,190,0.25), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,168,255,0.25), transparent 60%)",
              }}
            />
            <motion.div
              className="relative grid h-14 w-14 place-items-center rounded-full border border-border-brand bg-glow-brand text-text-brand backdrop-blur-md"
              style={{ boxShadow: "0 0 32px -4px rgba(0,212,190,0.6)" }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Play size={20} fill="currentColor" strokeWidth={0} />
            </motion.div>
            <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[10px] text-text-secondary backdrop-blur-md">
              4,287 watching
            </span>
          </div>
          {/* Progress */}
          <div className="space-y-1.5">
            <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-500 to-brand-accent"
                animate={{ width: ["28%", "62%", "28%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-text-tertiary">
              <span>14:32</span>
              <span>52:18</span>
            </div>
          </div>
        </div>

        {/* Chapter list */}
        <div className="flex flex-col gap-1.5 overflow-hidden">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
            Chapters
          </p>
          {chapters.map((c, i) => {
            const active = i === 2;
            return (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[11px] ${
                  active
                    ? "border-border-brand bg-glow-brand text-text-brand"
                    : "border-border-subtle bg-white/[0.02] text-text-secondary"
                }`}
              >
                <span
                  className={`grid h-4 w-4 place-items-center rounded-full text-[9px] font-medium ${
                    active
                      ? "bg-brand-500 text-text-inverse"
                      : "bg-white/[0.06] text-text-tertiary"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="truncate">{c}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ChromeFrame>
  );
}

// === Case 2: SHK Training Campus Network =============================

export function TrainingCampusVisual() {
  const APS = [
    { x: 14, y: 24 },
    { x: 36, y: 18 },
    { x: 58, y: 22 },
    { x: 80, y: 26 },
    { x: 22, y: 78 },
    { x: 50, y: 82 },
    { x: 78, y: 78 },
  ];
  const CORE = { x: 50, y: 50 };

  return (
    <ChromeFrame title="ops.shk · topology" liveLabel="LIVE">
      <div className="relative h-full p-4">
        {/* Diagram */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-4 h-[calc(100%-32px)] w-[calc(100%-32px)]"
        >
          {/* Edges from APs to core */}
          {APS.map((ap, i) => (
            <g key={i}>
              <line
                x1={ap.x}
                y1={ap.y}
                x2={CORE.x}
                y2={CORE.y}
                stroke="rgba(0,212,190,0.22)"
                strokeWidth="0.35"
                strokeDasharray="0.8 0.8"
              />
              <motion.circle
                r="0.9"
                fill="#00d4be"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [ap.x, CORE.x, ap.x],
                  cy: [ap.y, CORE.y, ap.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 0 1.5px rgba(0,212,190,0.9))",
                }}
              />
            </g>
          ))}

          {/* Core node */}
          <motion.circle
            cx={CORE.x}
            cy={CORE.y}
            r="5"
            fill="rgba(0,212,190,0.25)"
            stroke="#00d4be"
            strokeWidth="0.7"
            animate={{ r: [5, 5.8, 5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx={CORE.x} cy={CORE.y} r="2" fill="#00d4be" />

          {/* AP nodes */}
          {APS.map((ap, i) => (
            <g key={`ap-${i}`}>
              <motion.circle
                cx={ap.x}
                cy={ap.y}
                r="3"
                fill="rgba(0,212,190,0.1)"
                stroke="rgba(0,212,190,0.55)"
                strokeWidth="0.4"
                animate={{ r: [3, 3.6, 3] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
              <circle cx={ap.x} cy={ap.y} r="1.1" fill="#00d4be" />
            </g>
          ))}
        </svg>

        {/* Floating chips */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md border border-border-subtle bg-black/55 px-2 py-1 font-mono text-[10px] text-text-secondary backdrop-blur-md">
          <Wifi size={10} className="text-text-brand" />
          14 APs · 800 dev
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-md border border-border-subtle bg-black/55 px-2 py-1 font-mono text-[10px] text-text-secondary backdrop-blur-md">
          <Activity size={10} className="text-text-brand" />
          0 outages 30d
        </div>
      </div>
    </ChromeFrame>
  );
}

// === Case 3: RS Muhammadiyah Smart Hospital ==========================

export function SmartHospitalVisual() {
  const FLOORS = [
    { name: "FL-04", system: "HVAC", icon: Thermometer, fill: 72 },
    { name: "FL-03", system: "Network", icon: Activity, fill: 88 },
    { name: "FL-02", system: "Security", icon: ShieldCheck, fill: 95 },
    { name: "FL-01", system: "Power", icon: Zap, fill: 64 },
    { name: "GND", system: "Clinical", icon: HeartPulse, fill: 80 },
  ];

  return (
    <ChromeFrame
      title="hospital.ops · 380 beds"
      liveLabel="IN PROGRESS"
    >
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
            <Building2 size={11} className="text-text-brand" />
            Stack health
          </div>
          <span className="rounded-full bg-glow-brand px-2 py-0.5 font-mono text-[10px] text-text-brand">
            6 systems
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1.5">
          {FLOORS.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.45 }}
                className="flex items-center gap-3 rounded-md border border-border-subtle bg-white/[0.025] px-3 py-2"
              >
                <span className="font-mono text-[10px] text-text-tertiary">
                  {f.name}
                </span>
                <Icon size={12} className="text-text-brand/80" />
                <span className="text-[11px] text-text-secondary">
                  {f.system}
                </span>
                <div className="ml-auto flex w-[55%] items-center gap-2">
                  <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-500 to-brand-accent"
                      initial={{ width: "0%" }}
                      animate={{
                        width: [`${f.fill - 6}%`, `${f.fill}%`, `${f.fill - 6}%`],
                      }}
                      transition={{
                        duration: 2.6 + (i % 3) * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.18,
                      }}
                    />
                  </div>
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-brand-500"
                    style={{ boxShadow: "0 0 8px rgba(0,212,190,0.85)" }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ChromeFrame>
  );
}
