"use client";

import React from "react";

interface PricingToggleProps {
  activeMode: "host" | "guest";
  onChange: (mode: "host" | "guest") => void;
}

export default function PricingToggle({ activeMode, onChange }: PricingToggleProps) {
  const YouPayLabel = ({ className = "" }: { className?: string }) => (
    <span 
      className={`font-mosvita text-[40px] md:text-[67.899px] font-bold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.358px] transition-all duration-300 cursor-pointer ${activeMode === "host" ? "bg-gradient-to-r from-[#FFA5FC] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,140,250,0.3)]" : "text-white/24"} ${className}`}
      style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
      onClick={() => onChange("host")}
    >
      You Pay
    </span>
  );

  const GuestPayLabel = ({ className = "" }: { className?: string }) => (
    <span 
      className={`font-mosvita text-[40px] md:text-[67.899px] font-bold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.358px] transition-all duration-300 cursor-pointer ${activeMode === "guest" ? "bg-gradient-to-r from-[#80D1FD] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(128,209,253,0.3)]" : "text-white/24"} ${className}`}
      style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
      onClick={() => onChange("guest")}
    >
      Guest Pay
    </span>
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[14px] text-white/40 font-geist tracking-[-0.28px]">
        flat 5% platform fee, no hidden charges
      </span>
      <div className="flex flex-row items-center gap-[24px] md:gap-[32px] mt-[24px]">
        {/* Desktop Left Label */}
        <YouPayLabel className="hidden md:block" />

        {/* Toggle Pill */}
        <div 
          className="relative flex rounded-[60px] cursor-pointer w-[92px] h-[176px] md:w-[176px] md:h-[92px]"
          style={{
            background: "rgba(255, 255, 255, 0.01)",
            boxShadow: "inset 0 0 8px 0 rgba(128, 209, 253, 0.25), inset 0 0 21px 0 rgba(255, 255, 255, 0.15)"
          }}
          onClick={() => onChange(activeMode === "host" ? "guest" : "host")}
        >
          {/* Sliding Indicator */}
          <div 
            className={`absolute w-[76px] h-[76px] rounded-full overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activeMode === "guest" 
                ? "top-[92px] left-2 md:top-2 md:left-[92px] bg-gradient-to-b from-[#E5F5FF] to-[#A3E5FF] shadow-[0_0_20px_rgba(163,229,255,0.5)]" 
                : "top-2 left-2 md:top-2 md:left-2 bg-gradient-to-b from-[#FFF0FF] to-[#FFB8FF] shadow-[0_0_20px_rgba(255,140,250,0.5)]"
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="51.077" 
              height="63.211" 
              viewBox="0 0 72 76" 
              fill="none"
              className="absolute right-[1.92px] top-[9px] pointer-events-none"
            >
              <g filter="url(#filter0_f_149_3914)">
                <path d="M64.53 57.5C81.03 33 52.03 9 52.03 9C52.03 9 60.19 35.9512 52.03 49.5C44.2704 62.384 18.53 68.5 18.53 68.5C18.53 68.5 48.03 82 64.53 57.5Z" fill="white"/>
                <path d="M64.53 57.5C81.03 33 52.03 9 52.03 9C52.03 9 60.19 35.9512 52.03 49.5C44.2704 62.384 18.53 68.5 18.53 68.5C18.53 68.5 48.03 82 64.53 57.5Z" stroke="white" strokeWidth="1" />
              </g>
              <defs>
                <filter id="filter0_f_149_3914" x="0" y="-9.44287" width="87.1072" height="99.1533" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="8.5" result="effect1_foregroundBlur_149_3914"/>
                </filter>
              </defs>
            </svg>
          </div>
          
          {/* Inner labels layer */}
          <div 
            className="relative z-10 flex flex-col md:flex-row w-full h-full items-center justify-between py-[26px] md:py-0 md:px-[26px] font-mosvita text-[24px] font-bold leading-[1.1] tracking-[-0.48px]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            <span className={`w-[40px] h-[40px] flex items-center justify-center transition-colors duration-300 ${activeMode === "host" ? "text-[#C250BE]" : "text-[rgba(255,255,255,0.44)]"}`}>
              {activeMode === "host" ? "5%" : "₹0"}
            </span>
            <span className={`w-[40px] h-[40px] flex items-center justify-center transition-colors duration-300 ${activeMode === "guest" ? "text-[#006598]" : "text-[rgba(255,255,255,0.44)]"}`}>
              {activeMode === "host" ? "₹0" : "5%"}
            </span>
          </div>
        </div>

        {/* Mobile Labels (Right of toggle) */}
        <div className="flex flex-col md:hidden justify-between py-2 h-[176px]">
          <div className="h-[76px] flex items-center">
            <YouPayLabel />
          </div>
          <div className="h-[76px] flex items-center">
            <GuestPayLabel />
          </div>
        </div>

        {/* Desktop Right Label */}
        <GuestPayLabel className="hidden md:block" />
      </div>
    </div>
  );
}
