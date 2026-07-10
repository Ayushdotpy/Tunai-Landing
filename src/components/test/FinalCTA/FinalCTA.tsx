import Mascots from "./Mascots";
import CTAContent from "./CTAContent";

export default function FinalCTA() {
  return (
    <section className="relative flex w-full flex-col items-center bg-black px-4 pt-0 md:px-[68px] pb-24 overflow-hidden rounded-b-[40px]">
      {/* Vector Div Below Mascots */}
      <div
        className="absolute left-1/2 z-0"
        style={{
          bottom: "0", // Approximate offset so mascots sit on the curve
          width: "1642.5px",
          height: "569px",
          transform: "translateX(-50%) rotate(4.04deg)",
          backgroundColor: "#000",
          border: "1px solid #000",
          boxShadow: "inset 0 20px 35px 0 rgba(255, 255, 255, 0.15)",
        }}
      />

      <div className="relative z-10 w-full">
        <Mascots />
      </div>

      <div className="relative z-20 w-full">
        <CTAContent />
      </div>
    </section>
  );
}
