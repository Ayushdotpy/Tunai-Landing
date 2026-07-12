export default function SectionHeading() {
  return (
    <div className="flex w-full justify-center pt-[40px] pb-[40px] md:pt-[80px] md:pb-[85px] px-4 md:px-0">
      <div className="relative">
        {/* Glowing Background Text */}
        <h2
          aria-hidden="true"
          className="absolute inset-0 z-0 text-center font-mosvita text-[24px] md:text-[32px] font-bold leading-[1.1] tracking-[-0.64px] text-white opacity-80 blur-[9.5px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Switch to tunyt and...
        </h2>
        
        {/* Main Text */}
        <h2
          className="relative z-10 text-center font-mosvita text-[24px] md:text-[32px] font-bold leading-[1.1] tracking-[-0.64px] text-white"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Switch to tunyt and...
        </h2>
      </div>
    </div>
  );
}
