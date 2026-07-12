import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import FloatingIcons from "./FloatingIcons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[480px] md:h-[580px] lg:h-[658px] w-full overflow-hidden bg-black">
      <Image
        src="/test/logo.svg"
        alt="Tunyt Logo"
        width={71}
        height={34}
        className="absolute top-[13px] left-1/2 -translate-x-1/2 z-50 object-contain"
      />
      <HeroBackground />
      <FloatingIcons />
      <HeroContent />
    </section>
  );
}
