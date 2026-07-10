export default function SectionHeading() {
  return (
    <div className="flex w-full flex-col items-start pt-12 md:pl-[60px] lg:pl-[120px] lg:pt-[149px] md:h-full md:justify-between">
      <h2
        className="w-full max-w-[387px] font-mosvita text-[40px] font-bold leading-[1.1] tracking-[-1.28px] text-white md:text-[64px] lg:text-[67.899px] lg:tracking-[-1.358px]"
        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
      >
        You&apos;re <br />
        Probably <br />
        Wondering...
      </h2>

      <div className="mt-12 md:mt-24 lg:mt-32 flex flex-col items-start gap-4">
        <span className="font-geist text-[16px] font-medium tracking-[-0.32px] text-white/[0.32]">
          Your Question isn&apos;t Answered?
        </span>
        <a
          href="#book-call"
          className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 font-geist text-[16px] font-medium text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
        >
          Book a Free Call
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
