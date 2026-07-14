import React from "react";
import Image from "next/image";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4 pt-[140px] md:pt-[180px] lg:pt-[212px] gap-[20px]">
      <div className="flex flex-col items-center gap-[12px]">
        <h1
          className="text-white font-mosvita text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-[110%] capitalize max-w-[700px] w-full"
          style={{
            letterSpacing: "-1.2px",
            fontFeatureSettings: "'liga' off, 'clig' off",
            textShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
          }}
        >
          The Better Way To <br /> Host Events
        </h1>

        <p
          className="text-white font-geist text-[14px] md:text-[16px] font-medium leading-[170%] capitalize opacity-60 max-w-[500px] w-full"
          style={{
            letterSpacing: "-0.32px",
          }}
        >
          Create, Manage, And Grow Successful Events
          <br />
          From A Single Platform
        </p>
      </div>

      <button
        className="flex h-[48px] items-center justify-center gap-[10.5px] overflow-hidden rounded-[16px] transition-transform hover:scale-105 active:scale-95 w-full max-w-[290px]"
        style={{
          background:
            "linear-gradient(90deg, #D6D6D6 0%, #FFF 50%, #D6D6D6 100%)",
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
          className="flex items-center gap-2 whitespace-nowrap"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "110%",
            letterSpacing: "-0.32px",
            fontFeatureSettings: "'liga' off, 'clig' off",
          }}
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
