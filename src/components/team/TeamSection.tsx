import TeamBackground from "./TeamBackground";
import TeamIntro from "./TeamIntro";
import TeamGrid from "./TeamGrid";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <TeamBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-28 md:px-16 md:py-40">
        <div className="flex flex-col gap-20 md:gap-24">
          <TeamIntro />
          <TeamGrid />
        </div>
      </div>
    </section>
  );
}
