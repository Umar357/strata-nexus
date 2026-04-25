import { motion } from "framer-motion";
import { FOOTER_COLUMNS } from "./footerData";
import { ease } from "@/lib/motion";

export default function FooterColumns() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10">
      {FOOTER_COLUMNS.map((col, i) => (
        <motion.div
          key={col.heading}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.75,
            ease: ease.swiftOut,
            delay: 0.08 + i * 0.06,
          }}
          className="flex flex-col gap-4"
        >
          <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
            {col.heading}
          </h4>
          <ul className="flex flex-col gap-2.5">
            {col.links.map((link) => {
              const external = link.href.startsWith("http") ||
                link.href.startsWith("mailto:");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group relative inline-flex items-center text-[13.5px] text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-500/60 transition-transform duration-300 ease-swift-out group-hover:scale-x-100"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
