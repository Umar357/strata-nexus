"use client";

import Hero from "@/components/hero/Hero";
import SolutionsSection from "@/components/solutions/SolutionsSection";
import AboutSection from "@/components/about/AboutSection";
import CasesSection from "@/components/cases/CasesSection";
import WhySection from "@/components/why/WhySection";
import ProcessSection from "@/components/process/ProcessSection";
import TeamSection from "@/components/team/TeamSection";
import FaqSection from "@/components/faq/FaqSection";
import CtaSection from "@/components/cta/CtaSection";
import Footer from "@/components/footer/Footer";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

export default function Page() {
  useSmoothScroll();

  return (
    <main className="relative">
      <Hero />
      <AboutSection />
      <SolutionsSection />
      <CasesSection />
      <WhySection />
      <ProcessSection />
      <TeamSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
