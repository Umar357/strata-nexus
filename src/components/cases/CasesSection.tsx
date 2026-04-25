import CasesBackground from "./CasesBackground";
import CasesIntro from "./CasesIntro";
import CaseCard from "./CaseCard";
import { CASES } from "./caseData";

export default function CasesSection() {
  return (
    <section
      id="case-studies"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <CasesBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-28 md:px-16 md:py-40">
        <div className="flex flex-col gap-20 md:gap-24">
          <CasesIntro />

          <div className="flex flex-col gap-6 md:gap-8">
            {CASES.map((c, i) => (
              <CaseCard
                key={c.id}
                caseStudy={c}
                index={i}
                total={CASES.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
