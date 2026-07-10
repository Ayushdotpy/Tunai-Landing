import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import CategoryCard from "./CategoryCard";

const getEllipses = (color1: string, color2: string) => (
  <>
    {/* Large, Top-Left Ellipse */}
    <div
      className="pointer-events-none absolute left-[-20%] top-[-10%] h-[80%] w-[90%] rounded-full blur-[100px]"
      style={{ backgroundColor: color1 }}
    />
    {/* Smaller, Bottom-Right Ellipse */}
    <div
      className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[60%] w-[70%] rounded-full blur-[80px]"
      style={{ backgroundColor: color2 }}
    />
  </>
);

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
            imageSrc="/test/images/trophy.png?v=3"
            imageSize={236}
            imageClassName="absolute top-[1px] left-[48px]"
            glowColor="transparent"
            className="h-[398px] items-center"
            titleClassName="font-mosvita text-[48px] font-bold leading-[110%] tracking-[-0.96px] text-white max-w-[304px] mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#BD9A5E] opacity-30"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large, Top-Left Ellipse (from user specs) */}
                <div
                  className="pointer-events-none absolute left-[-20%] top-[-10%] w-[563px] h-[573px] rounded-[573px] bg-[#FFB432] opacity-20 blur-[75px]"
                  style={{ transform: "rotate(-45deg)" }}
                />
                {/* Smaller Ellipse (from user specs) */}
                <div
                  className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[343px] h-[350px] rounded-[350px] bg-[#FFB432] opacity-[0.56] blur-[75px]"
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
            imageSrc="/test/images/people.png?v=3"
            imageSize={248}
            imageClassName="absolute top-[-15px] left-[135px]"
            glowColor="transparent"
            className="h-[270px] justify-end items-center"
            titleClassName="font-mosvita text-[63.123px] font-bold leading-[110%] tracking-[-1.262px] text-white mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-white opacity-20 mix-blend-color-dodge"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Center/Top Ellipse */}
                <div className="pointer-events-none absolute left-1/2 top-[-80px] -translate-x-1/2 w-[465px] h-[473px] rounded-[473px] bg-[#FF00AE] opacity-20 blur-[75px]" />
                {/* Smaller Bottom-Center Ellipse */}
                <div className="pointer-events-none absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[283px] h-[289px] rounded-[289px] bg-[#FB00AB] opacity-[0.56] blur-[75px]" />
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
            imageSrc="/test/images/mail.png?v=3"
            imageSize={396}
            imageClassName="absolute top-[-43px] left-[-63px] drop-shadow-none"
            imageStyle={{
              width: "356.279px",
              height: "237.52px",
              transform: "rotate(-6.867deg)",
              aspectRatio: "3/2",
              mixBlendMode: "color-dodge",
              objectFit: "cover",
            }}
            glowColor="transparent"
            align="right"
            className="h-[267px] justify-end items-center pr-[44px] pl-[48px]"
            titleClassName="font-mosvita text-[62.935px] font-bold leading-[110%] tracking-[-1.259px] text-white mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#ABEFCF] opacity-40"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Ellipse (from user specs) */}
                <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[291px] h-[472.5px] rounded-[472.5px] bg-[#6AE99E] opacity-20 blur-[75px]" />
                {/* Smaller Ellipse (from user specs) */}
                <div className="pointer-events-none absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[177px] h-[288px] rounded-[288px] bg-[#6AE99E] opacity-50 blur-[75px]" />
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
            imageSrc="/test/images/music.png?v=3"
            imageSize={296}
            imageClassName="absolute top-[-5px] left-[95px]"
            glowColor="transparent"
            className="h-[401px] justify-end items-center pl-[4px]"
            titleClassName="font-mosvita text-[54.833px] font-bold leading-[110%] tracking-[-1.097px] text-white max-w-[321px] mix-blend-overlay"
            subtitleClassName="font-mosvita text-[24px] font-bold leading-[110%] tracking-[-0.48px] text-[#FF98FF] opacity-[0.34]"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Ellipse (from user specs) */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[378.5px] h-[500.39px] rounded-[500.39px] bg-[#5400D2] opacity-20 blur-[112px]" />
                {/* Smaller Ellipse (from user specs) */}
                <div className="pointer-events-none absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[378.5px] h-[378.5px] rounded-[378.5px] bg-[#5400D2] opacity-60 blur-[112px]" />
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
            imageSrc="/test/images/hat.png?v=3"
            imageSize={418}
            imageClassName="absolute top-[-30px] left-[-82px]"
            glowColor="transparent"
            align="right"
            className="h-[482px] justify-end items-center pt-[91px]"
            titleClassName="font-mosvita text-[50.036px] font-bold leading-[110%] tracking-[-1.001px] text-white text-right max-w-[330.595px] mix-blend-overlay"
            subtitleClassName="font-mosvita text-[22.541px] font-bold leading-[110%] tracking-[-0.451px] text-[#40FFFF] opacity-40"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <>
                {/* Large Ellipse (from user specs) */}
                <div className="pointer-events-none absolute left-1/2 top-[-100px] -translate-x-1/2 w-[673px] h-[685px] rounded-[685px] bg-[#00CDF1] opacity-20 blur-[75px]" />
                {/* Smaller Ellipse (from user specs) */}
                <div className="pointer-events-none absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[410px] h-[419px] rounded-[419px] bg-[#00CDF1] opacity-60 blur-[75px]" />
                {/* Extra tag image */}
                <Image
                  src="/test/images/tag.png?v=3"
                  alt="Tag Icon"
                  width={259}
                  height={259}
                  unoptimized={true}
                  className="absolute z-10 object-contain drop-shadow-2xl top-[-19px] left-[153px]"
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
            imageSrc="/test/images/star.png?v=3"
            glowColor="transparent"
            align="right"
            layout="horizontal"
            className="h-[186px] justify-center items-center px-[48px]"
            titleClassName="font-mosvita text-[48.223px] font-bold leading-[110%] tracking-[-0.964px] text-white text-right max-w-[336px] mix-blend-overlay"
            bgGradient="rgba(255, 255, 255, 0.08)"
            borderRadius="rounded-[20px]"
            customBackground={
              <div
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[291px] h-[472.5px] rounded-[472.5px] opacity-20 blur-[75px]"
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
