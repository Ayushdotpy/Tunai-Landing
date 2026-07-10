import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <HeroBackground />

      <FloatingIcons />

      <HeroContent />
    </section>
  );
}
