import Hero from "@/components/test/Hero/Hero";
import WhyTunyt from "@/components/test/WhyTunyt/WhyTunyt";
import GotYourBack from "@/components/test/GotYourBack/GotYourBack";
import Affiliates from "@/components/test/Affiliates/Affiliates";
import Pricing from "@/components/test/Pricing/Pricing";
import EventCategories from "@/components/test/EventCategories/EventCategories";
import FAQ from "@/components/test/FAQ/FAQ";
import Migrate from "@/components/test/Migrate/Migrate";
import FinalCTA from "@/components/test/FinalCTA/FinalCTA";
import Footer from "@/components/test/Footer/Footer";

export default function TestPage() {
  return (
    <main className="bg-black min-h-screen relative">
      {/* Fixed colorful background that acts as the reveal layer */}
      <div
        className="fixed inset-0 z-0 flex flex-col justify-end pointer-events-auto"
        style={{
          background:
            "linear-gradient(90deg, #FFFF93 -25.35%, #FFC27F 11.59%, #FEA8FB 48.52%, #A7FFFF 85.46%, #8DBFFC 122.4%), #FFF",
        }}
      >
        <Footer />
      </div>

      {/* Scrollable content layer that goes UP */}
      <div className="relative gap-0 z-10 bg-black rounded-b-[20px] md:rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <WhyTunyt />
        <GotYourBack />
        <Affiliates />
        <Pricing />
        <EventCategories />
        <FAQ />
        <Migrate />
        <FinalCTA />
      </div>

      {/* Spacer allows scrolling past the content to reveal the fixed footer.
          Height must exactly match the Footer height to avoid any empty gap. */}
      <div className="w-full h-[220px] md:h-[450px] lg:h-[538px] bg-transparent pointer-events-none"></div>
    </main>
  );
}
