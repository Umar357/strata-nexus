import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import FaqItem from "./FaqItem";
import { FAQS } from "./faqData";
import { ease } from "@/lib/motion";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">
      {/* Accordion */}
      <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface-glass backdrop-blur-md">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, rgba(0,212,190,0.06), transparent 55%)",
          }}
        />

        {FAQS.map((item, i) => (
          <FaqItem
            key={item.q}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>

      {/* Sidekick — direct line */}
      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.85, ease: ease.swiftOut, delay: 0.1 }}
        className="relative flex h-fit flex-col gap-5 overflow-hidden rounded-[24px] border border-border-brand bg-surface-glass p-7 backdrop-blur-md md:p-8 lg:sticky lg:top-28"
      >
        {/* Brand glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,212,190,0.12), transparent 65%)",
          }}
        />
        <span
          aria-hidden
          className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent md:inset-x-8"
        />

        <div className="relative flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-full border border-border-brand bg-glow-brand text-text-brand"
            style={{ boxShadow: "0 0 24px -6px rgba(0,212,190,0.55)" }}
          >
            <MessageCircle size={16} strokeWidth={2.1} />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-brand">
            Still wondering?
          </span>
        </div>

        <h3
          className="relative text-[20px] font-semibold text-text-primary md:text-[22px]"
          style={{ letterSpacing: "-0.01em", lineHeight: 1.25 }}
        >
          Ask the four of us directly.
        </h3>
        <p className="relative text-[14px] leading-[1.7] text-text-secondary">
          One reply, signed by the engineer who would do the work — not a
          form-fill autoresponse. We answer in under 24 hours.
        </p>

        <div className="relative mt-1 flex flex-col gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-3 text-sm font-medium text-text-inverse shadow-[0_8px_30px_-10px_rgba(0,212,190,0.6)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(0,212,190,0.8)]"
          >
            Send us a question
            <ArrowRight
              size={14}
              strokeWidth={2.4}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="mailto:hello@stratanexus.id"
            className="text-center font-mono text-[11px] tracking-[0.16em] text-text-tertiary transition-colors duration-200 hover:text-text-brand"
          >
            hello@stratanexus.id
          </a>
        </div>
      </motion.aside>
    </div>
  );
}
