import SectionHeading from "./SectionHeading";
import Dashboard from "./Dashboard";

export default function Affiliates() {
  return (
    <section className="relative flex w-full flex-col items-center bg-black overflow-hidden lg:h-[954px]">
      {/* Desktop Glow behind Dashboard */}
      <div 
        className="hidden lg:block absolute bottom-[114px] right-0 z-0 pointer-events-none"
        style={{
          width: "978.672px",
          height: "520.611px",
          opacity: 0.24,
          background: "linear-gradient(71deg, #FFE348 6.42%, #74CAFF 93.58%)",
          filter: "blur(200px)",
        }}
      />

      {/* Desktop Dashboard (Anchored to screen right) */}
      <div className="hidden lg:block absolute bottom-0 right-0 z-10">
        <Dashboard />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1440px] h-full flex flex-col lg:flex-row items-start px-4 md:px-6 lg:pt-[80px] lg:px-[114px] pt-16 pb-0 lg:py-0">
        
        {/* Left Side: Heading */}
        <div className="w-full lg:w-auto relative z-20">
          <SectionHeading />
        </div>
        
        {/* Right Side: Dashboard (Mobile) */}
        <div className="lg:hidden mt-12 w-full relative z-10 flex justify-start">
          <Dashboard />
        </div>
        
      </div>
    </section>
  );
}
