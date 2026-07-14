import Image from "next/image";

export default function Mascots() {
  return (
    <div className="relative w-full max-w-[1304px] mx-auto mt-[-13px]">
      {/* Scalable Vector Div Below Mascots */}
      <div
        className="absolute left-1/2 z-0"
        style={{
          top: "57%",
          width: "150%",
          height: "1000px",
          transform: "translateX(-50%) rotate(5.54deg)",
          backgroundColor: "#000",
          boxShadow: "inset 0 20px 35px 0 rgba(255, 255, 255, 0.15)",
        }}
      />
      <Image
        src="/test/images/mascot.png"
        alt="Tunyt Mascots"
        width={1304}
        height={823}
        className="relative z-10 h-auto w-full object-contain"
        priority
      />
    </div>
  );
}
