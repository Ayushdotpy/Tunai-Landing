import Accordion from "./Accordion";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section className="relative flex w-full flex-col md:flex-row md:items-stretch lg:gap-[223px] bg-black pt-12 pb-12 md:pt-24 md:pb-0">
      <div className="w-full md:w-auto flex-shrink-0 md:self-stretch">
        <SectionHeading />
      </div>
      <div className="w-full px-4 pt-12 md:w-auto md:px-0 md:pr-[60px] lg:pr-[120px] lg:pt-[149px]">
        <Accordion />
        
        {/* Mobile-only CTA */}
        <div className="mt-8 flex md:hidden flex-col items-start gap-4">
          <span className="font-geist text-[16px] font-medium tracking-[-0.32px] text-white/[0.32]">
            Your Question isn&apos;t Answered?
          </span>
          <a
            href="#book-call"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 font-geist text-[16px] font-medium text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
          >
            Book a Free Call
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
