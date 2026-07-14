import React from "react";

interface PricingCardsProps {
  activeMode: "host" | "guest";
}

export default function PricingCards({ activeMode }: PricingCardsProps) {
  // If guest pays, platform fee is charged to guest. Host gets full 1000.
  // If host pays, platform fee is deducted from host payout. Guest pays 1000.

  const guestPayable = activeMode === "guest" ? "1,050" : "1,000";
  const guestFee = activeMode === "guest" ? "+₹50" : "+₹0";

  const hostPayout = activeMode === "host" ? "950" : "1,000";
  const hostFee = activeMode === "host" ? "-₹50" : "-₹0";

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 w-full max-w-[800px]">
      {/* Guest Pay Card */}
      <div
        className="flex flex-col items-start w-full max-w-[355px] h-[260px] rounded-[20px] p-[30px] gap-[33px] border border-white/[0.08]"
        style={{
          backgroundImage:
            activeMode === "guest"
              ? "radial-gradient(110.67% 100% at 50.14% 100%, rgba(128,209,253,.65) 0%, rgba(128,209,253,.35) 35%, rgba(128,209,253,.12) 65%, rgba(128,209,253,0) 100%), linear-gradient(180deg, rgba(255,255,255,.02) 0%, rgba(255,255,255,.01) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,.02) 0%, rgba(255,255,255,.01) 100%)",
          backgroundRepeat: "no-repeat",
          boxShadow:
            activeMode === "guest"
              ? "inset 0 -5px 68px 0 rgba(128, 209, 253, 0.15), inset 0 -2px 15px 0 rgba(255, 255, 255, 0.24)"
              : "inset 0 -2px 15px 0 rgba(255, 255, 255, 0.24)",
        }}
      >
        <div
          className="font-mosvita text-[24px] font-bold text-white leading-none tracking-[-0.48px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Guest Pay
        </div>

        <div
          className="flex flex-col items-start gap-[28px] self-stretch w-full font-geist text-[20px] font-medium text-white leading-[110%] tracking-[-0.4px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          <div className="flex justify-between items-center w-full">
            <span>Ticket Total</span>
            <span>₹1,000</span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span>Platform Fee</span>
            <span>{guestFee}</span>
          </div>

          <div className="w-full h-[1px] bg-white/[0.08]" />

          <div className="flex justify-between items-center w-full relative z-10">
            <span>Total Payable</span>
            <span>₹{guestPayable}</span>
          </div>
        </div>
      </div>

      {/* Host Get Card */}
      <div
        className="flex flex-col items-start w-full max-w-[355px] h-[260px] rounded-[20px] p-[30px] gap-[33px] border border-white/[0.08]"
        style={{
          backgroundImage:
            activeMode === "host"
              ? "radial-gradient(110.67% 100% at 50.14% 100%, rgba(255,140,250,.7) 0%, rgba(255,140,250,.35) 28%, rgba(255,140,250,.12) 55%, rgba(255,140,250,0) 100%), linear-gradient(180deg, rgba(255,255,255,.02) 0%, rgba(255,255,255,.01) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,.02) 0%, rgba(255,255,255,.01) 100%)",
          backgroundRepeat: "no-repeat",
          boxShadow:
            activeMode === "host"
              ? "inset 0 -5px 68px 0 rgba(255, 140, 250, 0.15), inset 0 -2px 15px 0 rgba(255, 255, 255, 0.24)"
              : "inset 0 -2px 15px 0 rgba(255, 255, 255, 0.24)",
        }}
      >
        <div
          className="font-mosvita text-[24px] font-bold text-white leading-none tracking-[-0.48px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          You Get
        </div>

        <div
          className="flex flex-col items-start gap-[28px] self-stretch w-full font-geist text-[20px] font-medium text-white leading-[110%] tracking-[-0.4px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          <div className="flex justify-between items-center w-full">
            <span>Total Revenue</span>
            <span>₹1,000</span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span>Platform Fee</span>
            <span>{hostFee}</span>
          </div>

          <div className="w-full h-[1px] bg-white/[0.08]" />

          <div className="flex justify-between items-center w-full relative z-10">
            <span>Total Payout</span>
            <span>₹{hostPayout}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
