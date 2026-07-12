import React from "react";
import Image from "next/image";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4 pt-[212px] gap-[20px]">
      <div className="flex flex-col items-center gap-[12px]">
        <h1 
          className="text-white"
        style={{
          width: "491px",
          fontFamily: "Mosvita, sans-serif",
          fontSize: "60px",
          fontWeight: 700,
          lineHeight: "110%",
          letterSpacing: "-1.2px",
          textTransform: "capitalize",
          fontFeatureSettings: "'liga' off, 'clig' off",
          textShadow: "0 0 30px rgba(255, 255, 255, 0.4)"
        }}
      >
        Host What Brings<br />People Together
      </h1>
      
        <p 
          className="text-white"
        style={{
          width: "329px",
          fontFamily: "Geist, sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "170%",
          letterSpacing: "-0.32px",
            textTransform: "capitalize",
            opacity: 0.6
          }}
        >
          Create, Manage, And Grow Successful Events<br />
          From A Single Platform
        </p>
      </div>

      <button 
        className="flex items-center justify-center gap-2 px-8 transition-transform hover:scale-105 active:scale-95"
        style={{
          height: "48px",
          width: "290px",
          borderRadius: "16px",
          background: "linear-gradient(90deg, #D6D6D6 0%, #FFF 50%, #D6D6D6 100%)",
          color: "rgba(0, 0, 0, 0.92)",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "110%",
          letterSpacing: "-0.32px",
          fontFeatureSettings: "'liga' off, 'clig' off"
        }}
      >
        Host Your First Event
        <Image src="/test/icons/party-popper.svg" alt="Party Popper" width={16} height={16} />
      </button>
    </div>
  );
}
