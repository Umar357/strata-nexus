import SolutionsBackground from "./SolutionsBackground";
import SolutionsIntro from "./SolutionsIntro";
import SolutionsGrid from "./SolutionsGrid";

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <SolutionsBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-28 md:px-16 md:py-40">
        <div className="flex flex-col gap-20 md:gap-24">
          <SolutionsIntro />
          <SolutionsGrid />
        </div>
      </div>
    </section>
  );
}
