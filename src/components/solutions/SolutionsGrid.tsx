import { useRef } from "react";
import {
  Code2,
  Cloud as CloudIcon,
  Server,
  ShieldCheck,
  Network as NetworkIcon,
  Building2,
  MonitorPlay,
} from "lucide-react";
import SolutionCard from "./SolutionCard";
import {
  SoftwareVisual,
  CloudVisual,
  InfraVisual,
  SecurityVisual,
  NetworkVisual,
  BuildingVisual,
  MultimediaVisual,
} from "./solutionVisuals";

/**
 * Bento grid with a cursor-follow ambient glow across the whole grid.
 * Grid layout (desktop, 4 cols × 3 rows):
 *
 *   ┌──────────────────────┬──────────────────────┐
 *   │                      │ Cloud (2x1)          │
 *   │ Software Dev (2x2)   ├──────────┬───────────┤
 *   │                      │ Infra    │ Security  │
 *   ├──────────────────────┴──────────┴───────────┤
 *   │ Networking (2x1)     │ Smart B. │ Multimedia│
 *   └──────────────────────┴──────────┴───────────┘
 */
export default function SolutionsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = gridRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - r.left}px`);
    el.style.setProperty("--gy", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={gridRef}
      onMouseMove={onMouseMove}
      className="relative"
      style={
        {
          "--gx": "50%",
          "--gy": "50%",
        } as React.CSSProperties
      }
    >
      {/* Ambient cursor glow behind the grid */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(600px circle at var(--gx) var(--gy), rgba(0,212,190,0.08), transparent 60%)",
        }}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[300px]">
        <SolutionCard
          index={0}
          title="Software Development"
          description="Custom platforms, APIs and internal tooling — designed for the scale you'll reach in two years, not just today."
          Icon={Code2}
          visual={<SoftwareVisual />}
          tags={["Web apps", "APIs", "Automation", "Internal tools"]}
          featured
          className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
        />

        <SolutionCard
          index={1}
          title="Cloud"
          description="Hybrid and multi-cloud architectures — migrated, optimised and run so your teams keep shipping."
          Icon={CloudIcon}
          visual={<CloudVisual />}
          tags={["AWS", "GCP", "Private"]}
          className="sm:col-span-2 lg:col-span-2 lg:row-span-1"
        />

        <SolutionCard
          index={2}
          title="IT Infrastructure"
          description="Servers, storage and virtualization tuned for throughput and resilience."
          Icon={Server}
          visual={<InfraVisual />}
          className="sm:col-span-1 lg:col-span-1"
        />

        <SolutionCard
          index={3}
          title="Security"
          description="Digital and physical — endpoint to access control, woven into every layer."
          Icon={ShieldCheck}
          visual={<SecurityVisual />}
          className="sm:col-span-1 lg:col-span-1"
        />

        <SolutionCard
          index={4}
          title="Networking"
          description="Reliable, observable networks linking every site — built to stay up and be diagnosed fast."
          Icon={NetworkIcon}
          visual={<NetworkVisual />}
          tags={["SD-WAN", "Wi-Fi", "Monitoring"]}
          className="sm:col-span-2 lg:col-span-2"
        />

        <SolutionCard
          index={5}
          title="Smart Building"
          description="Unified IoT, HVAC, lighting and access — one control plane."
          Icon={Building2}
          visual={<BuildingVisual />}
          className="sm:col-span-1 lg:col-span-1"
        />

        <SolutionCard
          index={6}
          title="Multimedia"
          description="AV, digital signage and immersive experiences that feel effortless."
          Icon={MonitorPlay}
          visual={<MultimediaVisual />}
          className="sm:col-span-1 lg:col-span-1"
        />
      </div>
    </div>
  );
}
