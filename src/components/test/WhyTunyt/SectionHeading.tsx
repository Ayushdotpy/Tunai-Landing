export default function SectionHeading() {
  return (
    <div className="flex w-full justify-center pt-[80px] pb-[85px]">
      <div className="relative">
        {/* Glowing Background Text */}
        <h2
          aria-hidden="true"
          className="absolute inset-0 z-0 text-center font-mosvita text-[32px] font-bold leading-[1.1] tracking-[-0.64px] text-white opacity-80 blur-[9.5px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Switch to tunyt and...
        </h2>
        
        {/* Main Text */}
        <h2
          className="relative z-10 text-center font-mosvita text-[32px] font-bold leading-[1.1] tracking-[-0.64px] text-white"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Switch to tunyt and...
        </h2>
      </div>
    </div>
  );
}
