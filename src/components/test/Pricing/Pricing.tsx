"use client";

import React, { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingCards from "./PricingCards";
import PricingFAQ from "./PricingFAQ";

export default function Pricing() {
  const [activeMode, setActiveMode] = useState<"host" | "guest">("guest");

  return (
    <section className="relative flex w-full flex-col items-center bg-black overflow-hidden py-24 md:py-32 px-4">
      {/* Ambient background glow blob */}
      <div
        className={`absolute top-[-178px] left-1/2 -translate-x-1/2 w-[1281px] h-[299px] rounded-full opacity-30 blur-[200px] pointer-events-none z-0 transition-colors duration-500 ${activeMode === "guest" ? "bg-[#80D1FD]" : "bg-[#FF8CFA]"}`}
      />

      <div className="relative z-10 w-full max-w-[1440px] flex flex-col items-center">
        {/* Toggle Section */}
        <PricingToggle activeMode={activeMode} onChange={setActiveMode} />

        {/* Cards Section */}
        <PricingCards activeMode={activeMode} />

        {/* FAQ Section */}
        <PricingFAQ />
      </div>
    </section>
  );
}
