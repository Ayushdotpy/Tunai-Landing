import SectionHeading from "./SectionHeading";
import CategoryCards from "./JourneyCard";

export default function HostAnything() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-black py-24">
      <SectionHeading />
      <CategoryCards />
    </section>
  );
}
