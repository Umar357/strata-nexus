import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import FooterBrand from "./FooterBrand";
import FooterColumns from "./FooterColumns";
import { FOOTER_LEGAL } from "./footerData";
import { ease } from "@/lib/motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden border-t border-border-subtle"
    >
      {/* Quiet gradient floor — sits behind the page bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,212,190,0.025), transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 md:px-16 md:py-24">
        {/* Top — brand + columns */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          <FooterBrand />
          <FooterColumns />
        </div>

        {/* Hairline */}
        <div className="my-12 h-px w-full bg-border-subtle md:my-16" />

        {/* Bottom row — copyright + legal + back-to-top */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: ease.swiftOut }}
          className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="font-mono text-[11px] tracking-[0.16em] text-text-tertiary">
            © {year} PT. Strata Nexus Teknologi · Made in Bandung
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {FOOTER_LEGAL.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary transition-colors duration-200 hover:text-text-secondary"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-500/60 transition-transform duration-300 ease-swift-out group-hover:scale-x-100"
                />
              </a>
            ))}

            <a
              href="#top"
              aria-label="Back to top"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-glass px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary transition-colors duration-200 hover:border-border-brand hover:text-text-brand"
            >
              Back to top
              <ArrowUp
                size={12}
                strokeWidth={2.4}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
