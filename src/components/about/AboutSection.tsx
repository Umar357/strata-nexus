import AboutBackground from "./AboutBackground";
import AboutIntro from "./AboutIntro";
import AboutStory from "./AboutStory";
import AboutStats from "./AboutStats";
import AboutPillars from "./AboutPillars";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <AboutBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-28 md:px-16 md:py-40">
        <div className="flex flex-col gap-24 md:gap-32">
          <AboutIntro />
          <AboutStory />
          <AboutStats />
          <AboutPillars />
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-surface-page"
      />
    </section>
  );
}
