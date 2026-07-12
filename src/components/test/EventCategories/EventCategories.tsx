import Image from "next/image";
import CategoryCard from "./CategoryCard";
import SectionHeading from "./SectionHeading";

export default function EventCategories() {
  return (
    <section className="w-full relative z-10 flex flex-col items-center justify-center pb-20">
      <SectionHeading />
      <div className="mt-12 grid w-full max-w-[1200px] grid-cols-1 gap-6 px-6 md:grid-cols-3 xl:px-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <CategoryCard
            subtitle="Host"
            title={
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
            }
            imageSrc="/test/images/trophy.png"
            imageSize={236}
            imageClassName="absolute top-[1px] left-1/2"
            imageStyle={{
              width: "236.117px",
              height: "215.486px",
              transform: "translateX(-50%) rotate(165deg)",
              aspectRatio: "103/94",
              mixBlendMode: "color-dodge",
            }}
            glowColor="transparent"
            className="h-[398px] justify-end items-center px-[43px] pb-[22px]"
            titleClassName="font-mosvita text-[48px] font-bold leading-[110%] tracking-[-0.96px] text-white max-w-[304px] mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#BD9A5E] opacity-30"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large, Top-Left Ellipse (from user specs) */}
                <div
                  className="pointer-events-none absolute left-[-126px] bottom-[-151px] w-[563px] h-[573px] rounded-[573px] bg-[#FFB432] opacity-20 blur-[75px]"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* Smaller Ellipse (from user specs) */}
                <div
                  className="pointer-events-none absolute left-[110px] bottom-[-74px] w-[343px] h-[350px] rounded-[350px] bg-[#FFB432] opacity-[0.56] blur-[75px]"
                  style={{ transform: "rotate(-45deg)" }}
                />
              </>
            }
          />
          <CategoryCard
            subtitle="Host"
            title={
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
            }
            imageSrc="/test/images/people.png"
            imageSize={212}
            imageClassName="absolute top-[-1px] left-[135px]"
            imageStyle={{
              width: "212.204px",
              height: "189.172px",
              aspectRatio: "129/115",
              mixBlendMode: "screen",
            }}
            glowColor="transparent"
            align="left"
            className="h-[270px] justify-end items-center pl-[22px] pr-[112px] pb-[14px]"
            titleClassName="font-mosvita text-[63.123px] font-bold leading-[110%] tracking-[-1.262px] text-white mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-white opacity-20 mix-blend-color-dodge"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Center/Top Ellipse */}
                <div className="pointer-events-none absolute left-[-30px] top-[-49px] w-[465px] h-[473px] rounded-[473px] bg-[#FF00AE] opacity-20 blur-[75px]" />
                {/* Smaller Bottom-Center Ellipse */}
                <div className="pointer-events-none absolute top-[135px] left-[61px] w-[283px] h-[289px] rounded-[289px] bg-[#FB00AB] opacity-[0.56] blur-[75px]" />
              </>
            }
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <CategoryCard
            subtitle="Manage"
            title={
              <span className="relative block">
                <span className="invisible">
                  <span className="whitespace-nowrap">RSVPs</span>
                </span>
                {[...Array(2)].map((_, i) => (
                  <span
                    key={i}
                    className={`absolute inset-0 mix-blend-overlay ${i === 0 ? "opacity-70" : ""}`}
                  >
                    <span className="whitespace-nowrap">RSVPs</span>
                  </span>
                ))}
              </span>
            }
            imageSrc="/test/images/mail.png"
            imageSize={280}
            imageClassName="absolute top-[-30px] left-[-40px]"
            imageStyle={{
              width: "260px",
              height: "173px",
              aspectRatio: "3/2",
              transform: "rotate(-6.867deg)",
              mixBlendMode: "color-dodge",
              objectFit: "contain",
            }}
            glowColor="transparent"
            align="right"
            className="h-[267px] justify-end items-center pl-[175px] pr-[25px] pb-[5px]"
            titleClassName="font-mosvita text-[62.935px] font-bold leading-[110%] tracking-[-1.259px] text-white mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#ABEFCF] opacity-40"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Ellipse (from user specs) */}
                <div className="pointer-events-none absolute left-1/2 top-[-36px] -translate-x-1/2 w-[291px] h-[472.5px] rounded-[472.5px] bg-[#6AE99E] opacity-20 blur-[75px]" />
                {/* Smaller Ellipse (from user specs) */}
                <div className="pointer-events-none absolute top-[148.5px] left-[105px] w-[177px] h-[288px] rounded-[288px] bg-[#6AE99E] opacity-50 blur-[75px]" />
              </>
            }
          />
          <CategoryCard
            subtitle="Throw"
            title={
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
            }
            imageSrc="/test/images/music.png"
            imageSize={296}
            imageClassName="absolute top-[-5px] left-[95px]"
            glowColor="transparent"
            align="left"
            className="h-[401px] justify-end items-center pl-[33px] pr-[28px] pb-[17px]"
            titleClassName="font-mosvita text-[54.833px] font-bold leading-[110%] tracking-[-1.097px] text-white max-w-[321px] mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#FF98FF] opacity-[0.34]"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Ellipse (from user specs) */}
                <div className="pointer-events-none absolute left-[4px] top-[0px] w-[378.5px] h-[500.39px] rounded-[500.39px] bg-[#5400D2] opacity-20 blur-[112px]" />
                {/* Smaller Ellipse (from user specs) */}
                <div className="pointer-events-none absolute left-[4px] top-[122px] w-[378.5px] h-[378.5px] rounded-[378.5px] bg-[#5400D2] opacity-60 blur-[112px]" />
              </>
            }
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <CategoryCard
            subtitle="Organise"
            title={
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
            }
            imageSrc="/test/images/hat.png"
            imageSize={348}
            imageClassName="absolute top-[101px] left-[-52px] mix-blend-overlay -rotate-[15deg]"
            glowColor="transparent"
            align="right"
            className="h-[482px] justify-end items-center pt-[91px] pr-[29px] pb-[21px]"
            titleClassName="font-mosvita text-[50.036px] font-bold leading-[110%] tracking-[-1.001px] text-white text-right max-w-[330.595px] mix-blend-overlay"
            subtitleClassName="font-mosvita text-[22.541px] font-bold leading-[110%] tracking-[-0.451px] text-[#40FFFF] opacity-40"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Ellipse (from user specs) */}
                <div className="pointer-events-none absolute left-1/2 top-[91px] -translate-x-1/2 w-[673px] h-[685px] rounded-[685px] bg-[#00CDF1] opacity-20 blur-[75px]" />
                {/* Smaller Ellipse (from user specs) */}
                <div className="pointer-events-none absolute top-[357px] left-1/2 -translate-x-1/2 w-[410px] h-[419px] rounded-[419px] bg-[#00CDF1] opacity-60 blur-[75px]" />
                {/* Extra tag image */}
                <Image
                  src="/test/images/tag.png"
                  alt="Tag Icon"
                  width={210}
                  height={210}
                  unoptimized={true}
                  className="absolute z-10 object-contain drop-shadow-2xl top-[25px] left-[172px] rotate-[30deg]"
                />
              </>
            }
          />
          <CategoryCard
            title={
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
            }
            imageSrc="/test/images/star.png"
            imageSize={189}
            imageClassName="absolute left-[0px] bottom-[0.67px]"
            imageStyle={{
              width: "189.147px",
              height: "189.147px",
              filter: "blur(0.72px)",
            }}
            glowColor="transparent"
            align="right"
            layout="horizontal"
            className="h-[186px] items-end pl-[25px] pr-[26px] pb-[12px]"
            titleClassName="font-mosvita text-[48.223px] font-bold leading-[110%] tracking-[-0.964px] text-white text-right mix-blend-overlay"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <div
                className="pointer-events-none absolute left-[48px] top-[0px] w-[291px] h-[472.5px] rounded-[472.5px] opacity-20 blur-[75px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFF93 0%, #FFC27F 25%, #FEA8FB 50%, #A7FFFF 75%, #8DA5FC 100%), #FCF000",
                }}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
