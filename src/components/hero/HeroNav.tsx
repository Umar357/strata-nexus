import { motion } from "framer-motion";
import { ease, fadeDown } from "@/lib/motion";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Company", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

function NavLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary",
        className,
      )}
    >
      {label}
      <span
        aria-hidden
        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand-500 transition-transform duration-300 ease-swift-out group-hover:scale-x-100"
      />
    </a>
  );
}

export default function HeroNav() {
  return (
    <motion.nav
      variants={fadeDown}
      className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-16 md:py-6"
    >
      <motion.a
        href="#top"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: ease.swiftOut }}
        className="font-sans text-sm font-semibold tracking-wide text-text-primary"
      >
        PT. STRATA NEXUS
      </motion.a>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 340, damping: 20 }}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium",
            "border-border-brand text-text-brand",
            "transition-colors duration-300",
            "hover:bg-glow-brand hover:border-brand-500/60",
            "shadow-[inset_0_0_0_1px_rgba(0,212,190,0.05)]",
          )}
        >
          Contact Us
        </motion.a>
      </div>

      {/* Mobile — simple compact button */}
      <a
        href="#contact"
        className="rounded-full border border-border-brand px-3 py-1.5 text-xs font-medium text-text-brand md:hidden"
      >
        Contact
      </a>
    </motion.nav>
  );
}
