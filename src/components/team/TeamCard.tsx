import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import type { TeamMember } from "./teamData";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

function avatarGradient(hue: number) {
  return `linear-gradient(${hue}deg, hsl(${hue}, 75%, 52%) 0%, hsl(${
    (hue + 30) % 360
  }, 70%, 38%) 100%)`;
}

export default function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.85,
        ease: ease.swiftOut,
        delay: index * 0.1,
      }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-surface-glass p-7 backdrop-blur-md md:p-8",
        "transition-colors duration-300 hover:border-border-brand",
      )}
    >
      {/* Aurora on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(0,212,190,0.18), transparent 60%)",
        }}
      />
      {/* Top brand rail */}
      <span
        aria-hidden
        className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inset-x-8"
      />

      {/* Avatar + ID badge */}
      <div className="flex items-start justify-between gap-4">
        <span
          className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full border border-border-brand text-text-inverse"
          style={{
            background: avatarGradient(member.hue),
            boxShadow:
              "0 0 30px -8px rgba(0,212,190,0.55), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <span className="relative z-10 font-mono text-[14px] font-semibold tracking-tight">
            {member.initials}
          </span>
          <span
            aria-hidden
            className="absolute inset-1 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.28), transparent 55%)",
            }}
          />
        </span>

        <div className="flex flex-col items-end gap-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
            Member {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-border-subtle bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-text-secondary">
            Bandung · ID
          </span>
        </div>
      </div>

      {/* Name + role */}
      <div className="flex flex-col gap-1">
        <h3
          className="text-xl font-semibold text-text-primary md:text-[22px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          {member.name}
        </h3>
        <p className="text-[13px] text-text-brand">{member.role}</p>
      </div>

      {/* Bio */}
      <p className="text-[14px] leading-[1.65] text-text-secondary">
        {member.bio}
      </p>

      {/* Expertise */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        {member.expertise.map((e) => (
          <span
            key={e}
            className="rounded-full border border-border-subtle bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-secondary"
          >
            {e}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center gap-2 border-t border-border-subtle pt-5">
        <a
          href="#"
          aria-label={`${member.name} on LinkedIn`}
          className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-glass text-text-tertiary transition-colors duration-200 hover:border-border-brand hover:text-text-brand"
        >
          <Linkedin size={13} strokeWidth={1.8} />
        </a>
        <a
          href="#"
          aria-label={`Email ${member.name}`}
          className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-glass text-text-tertiary transition-colors duration-200 hover:border-border-brand hover:text-text-brand"
        >
          <Mail size={13} strokeWidth={1.8} />
        </a>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-text-tertiary">
          On call this week
          <span className="relative inline-block h-1.5 w-1.5">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-brand-500" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
        </span>
      </div>
    </motion.article>
  );
}
