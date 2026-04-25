import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Cloud,
  Building2,
  MonitorPlay,
} from "lucide-react";

/**
 * Signature visuals for each solution card. Each component fills its
 * container (`h-full w-full`) and relies on CSS/Motion for idle animation
 * so it stays cheap to render.
 *
 * Sized generously so they read at a glance in a wide desktop bento tile —
 * the cards use full-bleed layout, with text floating over a gradient fade.
 */

// === Software Development (featured — terminal) =========================

const CODE_LINES = [
  {
    indent: 0,
    tokens: [
      ["keyword", "import"],
      ["text", " { "],
      ["var", "deploy"],
      ["text", ", "],
      ["var", "observe"],
      ["text", " } "],
      ["keyword", "from"],
      ["text", " "],
      ["string", "'@strata/core'"],
    ],
  },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      ["keyword", "export async function"],
      ["text", " "],
      ["fn", "rollout"],
      ["text", "() {"],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["keyword", "const"],
      ["text", " stack = "],
      ["keyword", "await"],
      ["text", " "],
      ["fn", "deploy"],
      ["text", "({"],
    ],
  },
  {
    indent: 2,
    tokens: [
      ["var", "region"],
      ["text", ": "],
      ["string", "'id-jkt-1'"],
      ["text", ","],
    ],
  },
  {
    indent: 2,
    tokens: [
      ["var", "scale"],
      ["text", ": "],
      ["string", "'enterprise'"],
    ],
  },
  { indent: 1, tokens: [["text", "});"]] },
  {
    indent: 1,
    tokens: [
      ["fn", "observe"],
      ["text", "(stack).onError("],
      ["fn", "page"],
      ["text", ");"],
    ],
  },
  { indent: 0, tokens: [["text", "}"]] },
] as const;

const TOKEN_COLOR: Record<string, string> = {
  keyword: "text-brand-accent",
  var: "text-text-primary",
  fn: "text-text-brand",
  string: "text-[#ffd36a]",
  text: "text-text-secondary",
};

export function SoftwareVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-black/40 shadow-inner">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border-subtle px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/70" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
          deploy.ts
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-text-brand">
          <span className="relative h-1.5 w-1.5">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-brand-500" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
          LIVE
        </span>
      </div>

      {/* Code */}
      <div className="relative px-4 py-4 font-mono text-[12px] leading-[1.75]">
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.4 + i * 0.08,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex whitespace-pre"
          >
            <span className="mr-3 w-4 select-none text-right font-mono text-[10px] text-text-tertiary">
              {i + 1}
            </span>
            <span style={{ paddingLeft: `${line.indent * 16}px` }}>
              {line.tokens.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.tokens.map(([kind, text], j) => (
                  <span key={j} className={TOKEN_COLOR[kind]}>
                    {text}
                  </span>
                ))
              )}
            </span>
          </motion.div>
        ))}

        <motion.span
          className="ml-7 mt-1 inline-block h-4 w-[7px] bg-brand-500"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,190,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}

// === Cloud — big floating plates =======================================

export function CloudVisual() {
  const plates = [
    { x: -130, y: 30, w: 150, h: 90, delay: 0, opacity: 0.65 },
    { x: 10, y: -30, w: 200, h: 120, delay: 0.4, opacity: 1 },
    { x: 150, y: 40, w: 140, h: 84, delay: 0.2, opacity: 0.55 },
  ];
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 45%, rgba(0,168,255,0.2), transparent 70%)",
        }}
      />
      {plates.map((p, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-[20px] border border-border-brand bg-surface-glass backdrop-blur-md"
          style={{
            width: p.w,
            height: p.h,
            x: p.x,
            y: p.y,
            opacity: p.opacity,
            boxShadow: "0 30px 70px -20px rgba(0,212,190,0.4)",
          }}
          animate={{ y: [p.y, p.y - 10, p.y] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          <Cloud
            size={p.h * 0.42}
            strokeWidth={1.3}
            className="text-text-brand"
          />
        </motion.div>
      ))}
      {/* Floating spark particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute h-1 w-1 rounded-full bg-brand-500"
          style={{
            left: `${15 + i * 18}%`,
            top: `${60 + (i % 2) * 10}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// === IT Infrastructure — big server rack ================================

export function InfraVisual() {
  const rows = 7;
  return (
    <div className="relative flex h-full items-center justify-center">
      {/* Back-glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,190,0.18), transparent 65%)",
        }}
      />
      <div className="relative flex flex-col gap-2 rounded-2xl border border-border bg-black/40 p-4 backdrop-blur-sm">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="flex h-7 w-52 items-center gap-2 rounded-md border border-border-subtle bg-white/[0.03] px-2.5"
          >
            <Server size={12} className="text-text-brand/80" />
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-500 to-brand-accent"
                initial={{ width: "0%" }}
                animate={{
                  width: ["5%", `${35 + ((i * 17) % 55)}%`, "5%"],
                }}
                transition={{
                  duration: 3.4 + (i % 3) * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            </div>
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-brand-500"
              style={{ boxShadow: "0 0 8px rgba(0,212,190,0.8)" }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// === Security — large shield + wide pulse rings =========================

export function SecurityVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      {/* Back-glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,190,0.22), transparent 60%)",
        }}
      />
      {/* Sweeping rings */}
      {[0, 0.7, 1.4, 2.1].map((delay, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-border-brand"
          style={{ width: 120, height: 120 }}
          animate={{ scale: [1, 2.8], opacity: [0.55, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Dashed rotating ring */}
      <motion.span
        className="absolute h-40 w-40 rounded-full border border-dashed border-border-brand"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      {/* Shield */}
      <motion.div
        className="relative grid h-24 w-24 place-items-center rounded-2xl border border-border-brand bg-glow-brand text-text-brand"
        style={{ boxShadow: "0 0 60px -10px rgba(0,212,190,0.7)" }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck size={42} strokeWidth={1.8} />
      </motion.div>
    </div>
  );
}

// === Networking — full-bleed node graph =================================

export function NetworkVisual() {
  const NODES = [
    { x: 15, y: 30, size: 12 },
    { x: 40, y: 15, size: 16 },
    { x: 65, y: 28, size: 12 },
    { x: 88, y: 40, size: 11 },
    { x: 25, y: 72, size: 14 },
    { x: 55, y: 80, size: 12 },
    { x: 82, y: 72, size: 13 },
  ];
  const EDGES: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [1, 4],
    [1, 5],
    [2, 5],
    [3, 6],
    [4, 5],
    [5, 6],
  ];

  return (
    <div className="relative h-full w-full">
      {/* Back-glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,190,0.15), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {EDGES.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          return (
            <g key={i}>
              <line
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="rgba(0,212,190,0.25)"
                strokeWidth="0.35"
              />
              <motion.circle
                r="1.2"
                fill="#00d4be"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [A.x, B.x],
                  cy: [A.y, B.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.6 + (i % 3) * 0.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 0 2px rgba(0,212,190,0.9))",
                }}
              />
            </g>
          );
        })}
        {NODES.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.size / 4}
              fill="rgba(0,212,190,0.12)"
              stroke="rgba(0,212,190,0.6)"
              strokeWidth="0.4"
              animate={{ r: [n.size / 4, n.size / 3, n.size / 4] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
            <circle cx={n.x} cy={n.y} r={n.size / 7} fill="#00d4be" />
          </g>
        ))}
      </svg>
    </div>
  );
}

// === Smart Building — big lit-window grid ==============================

export function BuildingVisual() {
  const cols = 10;
  const rows = 7;
  return (
    <div className="relative flex h-full items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,190,0.14), transparent 70%)",
        }}
      />
      <div className="relative">
        <div
          className="grid gap-1.5 rounded-2xl border border-border bg-black/40 p-3 backdrop-blur-sm"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => {
            const lit = (i * 13 + (i % 7) * 3) % 9 < 4;
            return (
              <motion.span
                key={i}
                className="h-3.5 w-3.5 rounded-[3px]"
                animate={{
                  backgroundColor: lit
                    ? [
                        "rgba(0,212,190,0.15)",
                        "rgba(0,212,190,0.9)",
                        "rgba(0,212,190,0.15)",
                      ]
                    : "rgba(255,255,255,0.05)",
                  boxShadow: lit
                    ? [
                        "0 0 0px rgba(0,212,190,0)",
                        "0 0 10px rgba(0,212,190,0.9)",
                        "0 0 0px rgba(0,212,190,0)",
                      ]
                    : "0 0 0px transparent",
                }}
                transition={{
                  duration: 2.4 + (i % 4) * 0.3,
                  repeat: Infinity,
                  delay: (i % 6) * 0.2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
        <Building2
          size={16}
          className="absolute -bottom-1 left-3 text-text-tertiary"
        />
      </div>
    </div>
  );
}

// === Multimedia — full-height equalizer ================================

export function MultimediaVisual() {
  const bars = 17;
  return (
    <div className="relative flex h-full items-end justify-center gap-1.5 px-6 pb-10">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,212,190,0.18), transparent 70%)",
        }}
      />
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="relative w-2 flex-shrink rounded-full bg-gradient-to-t from-brand-500 to-brand-accent"
          animate={{
            height: [
              `${15 + ((i * 7) % 30)}%`,
              `${55 + ((i * 13) % 40)}%`,
              `${25 + ((i * 11) % 35)}%`,
              `${70 + ((i * 5) % 20)}%`,
              `${20 + ((i * 9) % 40)}%`,
            ],
          }}
          transition={{
            duration: 1.7 + (i % 3) * 0.3,
            repeat: Infinity,
            delay: i * 0.06,
            ease: "easeInOut",
          }}
          style={{
            minHeight: 8,
            boxShadow: "0 0 12px rgba(0,212,190,0.35)",
          }}
        />
      ))}
      <MonitorPlay
        size={16}
        className="absolute bottom-3 left-5 text-text-tertiary"
      />
    </div>
  );
}
