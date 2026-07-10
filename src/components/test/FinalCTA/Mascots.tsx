import Image from "next/image";

export default function Mascots() {
  return (
    <div className="relative w-full max-w-[1304px] mx-auto mt-[-13px]">
      <Image
        src="/test/images/mascot.png"
        alt="Tunyt Mascots"
        width={1304}
        height={823}
        className="h-auto w-full object-contain"
        priority
      />
    </div>
  );
}
