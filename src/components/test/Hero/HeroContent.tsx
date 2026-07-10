import Image from "next/image";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex h-full flex-col items-center px-6 pt-[193px] pb-[179px] text-center">
      <Image
        src="/test/logo.svg"
        alt="Tunyt"
        width={71}
        height={24}
        className="absolute left-1/2 top-[13px] -translate-x-1/2"
      />
      <div className="relative w-full max-w-[800px]">
        {/* Glowing Background Text */}
        <h1
          aria-hidden="true"
          className="absolute inset-0 z-0 text-center font-mosvita text-[42px] font-bold capitalize leading-[1.1] tracking-[-1.2px] text-white opacity-40 blur-[30px] md:text-[60px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Host What Brings
          <br />
          People Together
        </h1>

        {/* Main Text */}
        <h1
          className="relative z-10 text-center font-mosvita text-[42px] font-bold capitalize leading-[1.1] tracking-[-1.2px] text-white md:text-[60px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Host What Brings
          <br />
          People Together
        </h1>
      </div>

      <p className="mt-3 w-full max-w-[600px] text-center font-geist text-[14px] font-medium capitalize leading-[1.7] tracking-[-0.32px] text-white/60 md:text-[16px]">
        Create, Manage, And Grow Successful Events
        <br />
        From A Single Platform
      </p>

      <button
        className="mt-5 flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 font-inter text-[16px] font-semibold leading-[1.1] tracking-[-0.32px] text-[rgba(0,0,0,0.92)] transition hover:scale-[1.02]"
        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
      >
        Host Your First Event
        <Image
          src="/test/icons/party-popper.svg"
          alt="Party Popper"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}
