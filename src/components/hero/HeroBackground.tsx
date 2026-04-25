"use client";

import dynamic from "next/dynamic";

/**
 * LightRays uses ogl/WebGL — must be client-only. We dynamically import it
 * with ssr:false so Next.js never tries to render the canvas/shader during
 * server rendering. The visual fallback is just the gradient layers below;
 * rays appear as soon as the client bundle hydrates.
 */
const LightRays = dynamic(() => import("./LightRays"), { ssr: false });

/**
 * Layered hero background. Z-order bottom → top:
 *   1. Deep base gradient (mood)
 *   2. WebGL light rays (the star — follows mouse, shader-based)
 *   3. Bright core + lens bloom at the emission point
 *   4. Central content glow
 *   5. Grid overlay (radial-faded)
 *   6. Edge vignette
 *   7. Film grain
 */
export default function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* 1. Deep base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 10%, rgba(0,212,190,0.14), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,168,255,0.06), transparent 70%), #060a10",
        }}
      />

      {/* 2. WebGL light rays */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00d4be"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={1.8}
          pulsating={false}
          fadeDistance={1.5}
          saturation={1.05}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.08}
          distortion={0.04}
        />
      </div>

      {/* 3. Bright core under the source */}
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(0,212,190,0.28) 0%, rgba(0,168,255,0.08) 40%, transparent 75%)",
          filter: "blur(12px)",
        }}
      />

      {/* 3b. Lens bloom at the emission point */}
      <div
        className="absolute left-1/2 top-[-40px] h-[180px] w-[180px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,190,0.7) 0%, rgba(0,212,190,0.15) 40%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* 4. Central content glow */}
      <div
        className="absolute left-1/2 top-[42%] h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,190,0.12) 0%, transparent 60%)",
        }}
      />

      {/* 5. Grid overlay */}
      <div
        className="absolute inset-0 mask-radial-fade opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* 6. Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* 7. Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
