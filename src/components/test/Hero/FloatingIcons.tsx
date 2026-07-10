import Image from "next/image";
import React from "react";

type IconData = {
  src: string;
  alt: string;
  initial: React.CSSProperties;
  width?: number;
  height?: number;
  size?: number;
  bgSrc?: string;
  fgStyle?: React.CSSProperties;
};

const icons: IconData[] = [
  {
    src: "/test/icons/people1.png",
    alt: "People",
    initial: {
      top: "40px",
      left: "137px",
      transform: "rotate(-9.443deg)",
    },
    size: 247,
  },
  {
    src: "/test/icons/star.png",
    alt: "Star",
    initial: {
      top: "100px",
      left: "388px",
      transform: "rotate(-15deg)",
      filter: "blur(0.5px)",
    },
    size: 72,
  },
  {
    src: "/test/icons/analytics.png",
    alt: "Analytics",
    initial: { top: "272px", left: "282px" },
    size: 140,
  },
  {
    src: "/test/icons/trophy.png",
    alt: "Trophy",
    initial: { bottom: "75.99px", left: "112px" },
    size: 182,
  },
  {
    src: "/test/icons/calendar.png",
    alt: "Calendar",
    initial: { top: "79px", right: "113px" },
    size: 143,
  },
  {
    src: "/test/icons/hourglass.png",
    alt: "Hourglass",
    initial: { top: "232px", right: "288px" },
    size: 110,
  },
  {
    src: "/test/icons/toggle.png",
    alt: "Toggle",
    initial: { bottom: "195.93px", right: "447px" },
    size: 85,
  },
  {
    src: "/test/icons/money.png",
    alt: "Money",
    initial: { bottom: "64.03px", right: "152px" },
    size: 248,
  },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={icon.initial}
        >
          {icon.bgSrc && (
            <Image
              src={icon.bgSrc}
              alt={`${icon.alt} background`}
              width={icon.width || icon.size}
              height={icon.height || icon.size}
              className="absolute inset-0 object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
            />
          )}
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.width || icon.size}
            height={icon.height || icon.size}
            className="relative object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
            style={icon.fgStyle}
          />
        </div>
      ))}
    </div>
  );
}
