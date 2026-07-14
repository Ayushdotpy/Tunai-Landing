import Image from "next/image";

export default function CTAContent() {
  return (
    <div className="relative z-20 flex w-full flex-col items-center justify-center text-center mt-[-40px] md:mt-[-80px] lg:mt-[-120px]">
      <div className="relative w-full max-w-[800px] mx-auto">
        {/* Glowing Background Text */}
        <h2
          aria-hidden="true"
          className="absolute inset-0 z-0 text-center font-mosvita text-[40px] font-bold capitalize leading-[1.1] tracking-[-1.358px] text-white opacity-60 blur-[47px] md:text-[67.899px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off", whiteSpace: "nowrap" }}
        >
          Let's Bring
          <br />
          People Together
        </h2>

        {/* Main Text */}
        <h2
          className="relative z-10 text-center font-mosvita text-[40px] font-bold capitalize leading-[1.1] tracking-[-1.358px] text-white md:text-[67.899px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off", whiteSpace: "nowrap" }}
        >
          Let's Bring
          <br />
          People Together
        </h2>
      </div>

      <button
        className="mt-8 flex h-[48px] items-center justify-center gap-[10.5px] overflow-hidden rounded-[16px] transition hover:scale-[1.02]"
        style={{
          background: "linear-gradient(90deg, #D6D6D6 0%, #FFF 50%, #D6D6D6 100%)",
          color: "rgba(0, 0, 0, 0.92)",
        }}
      >
        <Image 
          src="/test/icons/button-vector.svg" 
          alt="" 
          width={64} 
          height={48} 
          className="h-full w-auto object-cover" 
        />
        <span 
          className="flex items-center gap-[6px] font-inter text-[16px] font-semibold leading-[1.1] tracking-[-0.32px] whitespace-nowrap"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Host Your First Event
          <Image
            src="/test/icons/party-popper.svg"
            alt="Party Popper"
            width={16}
            height={16}
          />
        </span>
        <Image 
          src="/test/icons/button-vector.svg" 
          alt="" 
          width={64} 
          height={48} 
          className="h-full w-auto scale-x-[-1] object-cover" 
        />
      </button>
    </div>
  );
}
