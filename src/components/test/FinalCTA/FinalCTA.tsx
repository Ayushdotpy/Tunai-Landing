import Mascots from "./Mascots";
import CTAContent from "./CTAContent";

export default function FinalCTA() {
  return (
    <section className="relative flex w-full flex-col items-center bg-black px-4 pt-0 md:px-[68px] pb-24 overflow-hidden rounded-b-[40px]">

      <div className="relative z-10 w-full">
        <Mascots />
      </div>

      <div className="relative z-20 w-full">
        <CTAContent />
      </div>
    </section>
  );
}
