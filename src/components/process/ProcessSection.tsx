import ProcessBackground from "./ProcessBackground";
import ProcessIntro from "./ProcessIntro";
import ProcessTimeline from "./ProcessTimeline";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <ProcessBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-28 md:px-16 md:py-40">
        <div className="flex flex-col gap-20 md:gap-28">
          <ProcessIntro />
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}
