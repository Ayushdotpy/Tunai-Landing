import Accordion from "./Accordion";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section className="relative flex w-full flex-col md:flex-row md:items-stretch lg:gap-[223px] bg-black pt-12 pb-0 md:pt-24 md:pb-0">
      <div className="w-full md:w-auto flex-shrink-0 md:self-stretch">
        <SectionHeading />
      </div>
      <div className="w-full px-4 pt-12 md:w-auto md:px-0 md:pr-[60px] lg:pr-[120px] lg:pt-[149px]">
        <Accordion />
      </div>
    </section>
  );
}
