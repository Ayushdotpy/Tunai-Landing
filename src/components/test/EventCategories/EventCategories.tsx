import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function EventCategories() {
  return (
    <section className="w-full relative z-10 flex flex-col items-center justify-center pb-12 md:pb-20">
      <SectionHeading />

      {/* ── Big wrapper div containing the 3-column grid ── */}
      <div className="mt-8 md:mt-12 grid w-full max-w-[1200px] grid-cols-1 gap-4 md:gap-6 px-4 md:px-6 md:grid-cols-3 xl:px-0">
        {/* ═══════════════ Column 1 ═══════════════ */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* ── Card 1: Hackathons & Competitions ── */}
          <div
            className="relative isolate flex flex-col transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[20px] border border-white/[0.08] h-[320px] md:h-[398px] justify-end items-center px-[24px] md:px-[43px] pb-[18px] md:pb-[22px]"
          >
            {/* Background layer */}
            <div className="absolute inset-0 z-[-1]" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
              {/* Large, Bottom-Left Ellipse */}
              <div
                className="pointer-events-none absolute left-[-126px] bottom-[-151px] w-[563px] h-[573px] rounded-[573px] bg-[#FFB432] opacity-20 blur-[75px]"
                style={{ transform: "rotate(-45deg)" }}
              />
              {/* Smaller Ellipse */}
              <div
                className="pointer-events-none absolute left-[110px] bottom-[-74px] w-[343px] h-[350px] rounded-[350px] bg-[#FFB432] opacity-[0.56] blur-[75px]"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src="/test/images/trophy.png"
                alt="Category Icon"
                width={236}
                height={236}
                unoptimized={true}
                className="absolute top-[1px] left-1/2"
                style={{
                  width: "clamp(160px, 60%, 236.117px)",
                  height: "auto",
                  transform: "translateX(-50%) rotate(165deg)",
                  aspectRatio: "103/94",
                  mixBlendMode: "color-dodge",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col shrink-0 w-full items-start text-left">
              <span
                className="mb-1 font-mosvita text-[18px] md:text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#BD9A5E] opacity-30"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                Host
              </span>
              <h3
                className="font-mosvita text-[36px] md:text-[48px] font-bold leading-[110%] tracking-[-0.96px] text-white max-w-[304px] mix-blend-overlay"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                <span className="relative block">
                  <span className="invisible">
                    <span className="whitespace-nowrap">Hackathons &</span>
                    <br />
                    <span className="whitespace-nowrap">Competitions</span>
                  </span>
                  {[...Array(2)].map((_, i) => (
                    <span key={i} className="absolute inset-0 mix-blend-overlay">
                      <span className="whitespace-nowrap">Hackathons &</span>
                      <br />
                      <span className="whitespace-nowrap">Competitions</span>
                    </span>
                  ))}
                </span>
              </h3>
            </div>
          </div>

          {/* ── Card 2: Meetups ── */}
          <div
            className="relative isolate flex flex-col transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[20px] border border-white/[0.08] h-[220px] md:h-[270px] justify-end items-center pl-[16px] md:pl-[22px] pr-[60px] md:pr-[112px] pb-[12px] md:pb-[14px]"
          >
            {/* Background layer */}
            <div className="absolute inset-0 z-[-1]" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
              {/* Large Center/Top Ellipse */}
              <div className="pointer-events-none absolute left-[-30px] top-[-49px] w-[465px] h-[473px] rounded-[473px] bg-[#FF00AE] opacity-20 blur-[75px]" />
              {/* Smaller Bottom-Center Ellipse */}
              <div className="pointer-events-none absolute top-[135px] left-[61px] w-[283px] h-[289px] rounded-[289px] bg-[#FB00AB] opacity-[0.56] blur-[75px]" />
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src="/test/images/people.png"
                alt="Category Icon"
                width={212}
                height={212}
                unoptimized={true}
                className="absolute top-[-1px] right-0 md:left-[135px]"
                style={{
                  width: "clamp(140px, 55%, 212.204px)",
                  height: "auto",
                  aspectRatio: "129/115",
                  mixBlendMode: "screen",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col shrink-0 w-full items-start text-left">
              <span
                className="mb-1 font-mosvita text-[18px] md:text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-white opacity-20 mix-blend-color-dodge"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                Host
              </span>
              <h3
                className="font-mosvita text-[44px] md:text-[63.123px] font-bold leading-[110%] tracking-[-1.262px] text-white mix-blend-overlay"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                <span className="relative block">
                  <span className="invisible">
                    <span className="whitespace-nowrap">Meetups</span>
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`absolute inset-0 mix-blend-overlay ${i === 0 ? "opacity-50" : ""}`}
                    >
                      <span className="whitespace-nowrap">Meetups</span>
                    </span>
                  ))}
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* ═══════════════ Column 2 ═══════════════ */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* ── Card 3: RSVPs ── */}
          <div
            className="relative isolate flex flex-col transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[20px] border border-white/[0.08] h-[220px] md:h-[267px] justify-end items-center pl-[100px] md:pl-[175px] pr-[20px] md:pr-[25px] pb-[5px]"
          >
            {/* Background layer */}
            <div className="absolute inset-0 z-[-1]" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
              {/* Large Ellipse */}
              <div className="pointer-events-none absolute left-1/2 top-[-36px] -translate-x-1/2 w-[291px] h-[472.5px] rounded-[472.5px] bg-[#6AE99E] opacity-20 blur-[75px]" />
              {/* Smaller Ellipse */}
              <div className="pointer-events-none absolute top-[148.5px] left-[105px] w-[177px] h-[288px] rounded-[288px] bg-[#6AE99E] opacity-50 blur-[75px]" />
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src="/test/images/mail.png"
                alt="Category Icon"
                width={356}
                height={237}
                unoptimized={true}
                className="absolute top-[-20px] left-[-40px]"
                style={{
                  width: "clamp(240px, 90%, 356px)",
                  height: "auto",
                  aspectRatio: "3/2",
                  transform: "rotate(-6.867deg)",
                  mixBlendMode: "color-dodge",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col shrink-0 w-full items-end text-right">
              <span
                className="mb-1 font-mosvita text-[18px] md:text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#ABEFCF] opacity-40"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                Manage
              </span>
              <h3
                className="font-mosvita text-[44px] md:text-[62.935px] font-bold leading-[110%] tracking-[-1.259px] text-white"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                <span className="relative block">
                  <span className="invisible">
                    <span className="whitespace-nowrap">RSVPs</span>
                  </span>
                  <span className="absolute inset-0 mix-blend-overlay opacity-70">
                    <span className="whitespace-nowrap">RSVPs</span>
                  </span>
                  <span className="absolute inset-0 mix-blend-overlay">
                    <span className="whitespace-nowrap">RSVPs</span>
                  </span>
                </span>
              </h3>
            </div>
          </div>

          {/* ── Card 4: Parties & Music Nights ── */}
          <div
            className="relative isolate flex flex-col transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[20px] border border-white/[0.08] h-[320px] md:h-[401px] justify-end items-center pl-[24px] md:pl-[33px] pr-[20px] md:pr-[28px] pb-[14px] md:pb-[17px]"
          >
            {/* Background layer */}
            <div className="absolute inset-0 z-[-1]" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
              {/* Large Ellipse */}
              <div className="pointer-events-none absolute left-[4px] top-[0px] w-[378.5px] h-[500.39px] rounded-[500.39px] bg-[#5400D2] opacity-20 blur-[112px]" />
              {/* Smaller Ellipse */}
              <div className="pointer-events-none absolute left-[4px] top-[122px] w-[378.5px] h-[378.5px] rounded-[378.5px] bg-[#5400D2] opacity-60 blur-[112px]" />
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src="/test/images/music.png"
                alt="Category Icon"
                width={296}
                height={296}
                unoptimized={true}
                className="absolute top-[-5px] left-[50px] md:left-[95px]"
                style={{
                  width: "clamp(200px, 75%, 296px)",
                  height: "auto",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col shrink-0 w-full items-start text-left">
              <span
                className="mb-1 font-mosvita text-[18px] md:text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#FF98FF] opacity-[0.34]"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                Throw
              </span>
              <h3
                className="font-mosvita text-[38px] md:text-[54.833px] font-bold leading-[110%] tracking-[-1.097px] text-white max-w-[321px] mix-blend-overlay"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                <span className="relative block">
                  <span className="invisible">
                    <span className="whitespace-nowrap">Parties &</span>
                    <br />
                    <span className="whitespace-nowrap">Music Nights</span>
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`absolute inset-0 mix-blend-overlay ${i === 0 ? "opacity-30" : ""}`}
                    >
                      <span className="whitespace-nowrap">Parties &</span>
                      <br />
                      <span className="whitespace-nowrap">Music Nights</span>
                    </span>
                  ))}
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* ═══════════════ Column 3 ═══════════════ */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* ── Card 5: University Events & Fests ── */}
          <div
            className="relative isolate flex flex-col transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[20px] border border-white/[0.08] h-[380px] md:h-[482px] justify-end items-center pt-[60px] md:pt-[91px] pr-[20px] md:pr-[29px] pb-[16px] md:pb-[21px]"
          >
            {/* Background layer */}
            <div className="absolute inset-0 z-[-1]" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
              {/* Large Ellipse */}
              <div className="pointer-events-none absolute left-1/2 top-[91px] -translate-x-1/2 w-[673px] h-[685px] rounded-[685px] bg-[#00CDF1] opacity-20 blur-[75px]" />
              {/* Smaller Ellipse */}
              <div className="pointer-events-none absolute top-[357px] left-1/2 -translate-x-1/2 w-[410px] h-[419px] rounded-[419px] bg-[#00CDF1] opacity-60 blur-[75px]" />
              {/* Extra tag image */}
              <Image
                src="/test/images/tag.png"
                alt="Tag Icon"
                width={210}
                height={210}
                unoptimized={true}
                className="absolute z-10 object-contain drop-shadow-2xl top-[25px] left-[40%] md:left-[172px] rotate-[30deg] w-[140px] md:w-[210px] h-auto"
              />
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src="/test/images/hat.png"
                alt="Category Icon"
                width={348}
                height={348}
                unoptimized={true}
                className="absolute top-[80px] md:top-[101px] left-[-30px] md:left-[-52px] mix-blend-overlay -rotate-[15deg]"
                style={{
                  width: "clamp(240px, 80%, 348px)",
                  height: "auto",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col shrink-0 w-full items-end text-right">
              <span
                className="mb-1 font-mosvita text-[16px] md:text-[22.541px] font-bold leading-[110%] tracking-[-0.451px] text-[#40FFFF] opacity-40"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                Organise
              </span>
              <h3
                className="font-mosvita text-[36px] md:text-[50.036px] font-bold leading-[110%] tracking-[-1.001px] text-white text-right max-w-[330.595px] mix-blend-overlay"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                <span className="relative block">
                  <span className="invisible">
                    <span className="whitespace-nowrap">University</span>
                    <br />
                    <span className="whitespace-nowrap">Events & Fests</span>
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`absolute inset-0 mix-blend-overlay ${i === 0 ? "opacity-40" : ""}`}
                    >
                      <span className="whitespace-nowrap">University</span>
                      <br />
                      <span className="whitespace-nowrap">Events & Fests</span>
                    </span>
                  ))}
                </span>
              </h3>
            </div>
          </div>

          {/* ── Card 6: and Your Next Event ── */}
          <div
            className="relative isolate flex flex-row transition-transform duration-300 hover:scale-[1.02] overflow-hidden rounded-[20px] border border-white/[0.08] h-[160px] md:h-[186px] items-end pl-[16px] md:pl-[25px] pr-[16px] md:pr-[26px] pb-[10px] md:pb-[12px]"
          >
            {/* Background layer */}
            <div className="absolute inset-0 z-[-1]" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
              {/* Gradient Ellipse */}
              <div
                className="pointer-events-none absolute left-[48px] top-[0px] w-[291px] h-[472.5px] rounded-[472.5px] opacity-20 blur-[75px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFF93 0%, #FFC27F 25%, #FEA8FB 50%, #A7FFFF 75%, #8DA5FC 100%), #FCF000",
                }}
              />
            </div>

            {/* Image */}
            <div>
              <Image
                src="/test/images/star.png"
                alt="Category Icon"
                width={189}
                height={189}
                unoptimized={true}
                className="absolute left-[0px] bottom-[0.67px]"
                style={{
                  width: "clamp(130px, 50%, 189.147px)",
                  height: "auto",
                  filter: "blur(0.72px)",
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col shrink-0 flex-1 items-end text-right">
              <h3
                className="font-mosvita text-[36px] md:text-[48.223px] font-bold leading-[110%] tracking-[-0.964px] text-white text-right mix-blend-overlay"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
              >
                <span className="relative block">
                  <span className="invisible">
                    <span className="whitespace-nowrap">and Your</span>
                    <br />
                    <span className="whitespace-nowrap">Next Event</span>
                  </span>
                  {[...Array(2)].map((_, i) => (
                    <span key={i} className="absolute inset-0 mix-blend-overlay">
                      <span className="whitespace-nowrap">and Your</span>
                      <br />
                      <span className="whitespace-nowrap">Next Event</span>
                    </span>
                  ))}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
