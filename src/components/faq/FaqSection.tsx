import FaqBackground from "./FaqBackground";
import FaqIntro from "./FaqIntro";
import FaqList from "./FaqList";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden scroll-mt-24"
    >
      <FaqBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-28 md:px-16 md:py-40">
        <div className="flex flex-col gap-20 md:gap-24">
          <FaqIntro />
          <FaqList />
        </div>
      </div>
    </section>
  );
}
