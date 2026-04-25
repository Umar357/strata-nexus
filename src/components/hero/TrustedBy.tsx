import { motion } from "framer-motion";
import { fadeUp, ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Partner = {
  name: string;
  logo?: string; // emoji / short initials fallback when no asset
  soon?: boolean;
};

const PARTNERS: Partner[] = [
  { name: "Institut Teknologi Bandung", logo: "ITB" },
  { name: "SHK Training" },
  { name: "RS Muhammadiyah Bandung Selatan", logo: "RS", soon: true },
];

function PartnerPill({ partner, index }: { partner: Partner; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 1.4 + index * 0.08,
        ease: ease.swiftOut,
      }}
      whileHover={{ y: -3 }}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full",
        "border border-border bg-surface-glass px-4 py-2.5",
        "backdrop-blur-sm transition-colors duration-300",
        "hover:border-border-brand hover:bg-white/[0.05]",
      )}
    >
      {partner.logo && (
        <span
          className={cn(
            "grid h-6 w-6 place-items-center rounded-full",
            "bg-gradient-to-br from-brand-500/30 to-brand-accent/20",
            "text-[10px] font-semibold text-text-primary",
            "ring-1 ring-border-brand",
          )}
        >
          {partner.logo}
        </span>
      )}
      <span className="text-sm text-text-secondary transition-colors group-hover:text-text-primary">
        {partner.name}
        {partner.soon && (
          <span className="ml-1.5 text-[11px] uppercase tracking-wider text-text-brand/80">
            · coming soon
          </span>
        )}
      </span>
    </motion.li>
  );
}

export default function TrustedBy() {
  return (
    <motion.div
      variants={fadeUp}
      className="flex w-full flex-col items-center gap-6 pt-10"
    >
      <p className="font-mono text-sm text-text-secondary">Trusted by</p>
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {PARTNERS.map((p, i) => (
          <PartnerPill key={p.name} partner={p} index={i} />
        ))}
      </ul>
    </motion.div>
  );
}
