import WhyBackground from "./WhyBackground";
import WhyIntro from "./WhyIntro";
import WhyComparison from "./WhyComparison";

export default function WhySection() {
  return (
    <section
      id="why"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <WhyBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-28 md:px-16 md:py-40">
        <div className="flex flex-col gap-20 md:gap-24">
          <WhyIntro />
          <WhyComparison />
        </div>
      </div>
    </section>
  );
}
