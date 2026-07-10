import React from "react";
import Image from "next/image";

export interface CategoryCardProps {
  subtitle?: string;
  title: React.ReactNode;
  imageSrc: string;
  glowColor?: string;
  align?: "left" | "right";
  className?: string;
  imageClassName?: string;
  layout?: "vertical" | "horizontal";
  titleClassName?: string;
  subtitleClassName?: string;
  bgGradient?: string;
  borderColor?: string;
  borderRadius?: string;
  customBackground?: React.ReactNode;
  imageSize?: number; // NEW: controls actual rendered px size of the icon
  imageStyle?: React.CSSProperties;
}

export default function CategoryCard({
  subtitle,
  title,
  imageSrc,
  glowColor = "#ffffff",
  align = "left",
  className = "",
  imageClassName = "",
  layout = "vertical",
  titleClassName = "text-white",
  subtitleClassName = "text-white/50",
  bgGradient,
  borderColor = "border-white/[0.08]",
  borderRadius = "rounded-[32px]",
  customBackground,
  imageSize = 140, // was hardcoded 240 — that's the main overflow culprit
  imageStyle = {},
}: CategoryCardProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`relative flex overflow-hidden border transition-transform duration-300 hover:scale-[1.02] ${
        isHorizontal ? "flex-row items-center pl-6" : "flex-col"
      } ${borderRadius} ${borderColor} ${className}`}
      style={{
        background:
          bgGradient ||
          `radial-gradient(120% 120% at 50% 0%, ${glowColor}22 0%, #050505 100%)`,
        boxShadow: `0 0 40px -10px ${glowColor}15`,
      }}
    >
      {customBackground}

      <div
        className={`pointer-events-none absolute h-[60%] w-[80%] rounded-full blur-[80px] ${
          isHorizontal
            ? "left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2"
            : "left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2"
        }`}
        style={{ backgroundColor: `${glowColor}40` }}
      />

      {/* Image Container — min-h-0 lets it actually shrink instead of forcing overflow */}
      <div
        className={`relative z-0 flex min-h-0 items-center justify-center ${
          isHorizontal ? "w-[100px] py-4" : "flex-1 px-6 pt-6 pb-2"
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Category Icon"
            width={imageSize}
            height={imageSize}
            unoptimized={true}
            className={`relative z-10 object-contain drop-shadow-2xl ${imageClassName}`}
            style={imageStyle}
          />
        ) : (
          <div
            className={`${isHorizontal ? "h-[60px]" : "h-[100px]"} w-full`}
          />
        )}
      </div>

      {/* Text Content */}
      <div
        className={`relative flex flex-col shrink-0 ${
          isHorizontal ? "flex-1 py-6 pr-6" : "w-full px-8 pb-6"
        } ${align === "right" ? "items-end text-right" : "items-start text-left"}`}
      >
        {subtitle && (
          <span
            className={`mb-1 text-[14px] font-medium leading-tight tracking-[-0.02em] ${subtitleClassName}`}
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            {subtitle}
          </span>
        )}
        <h3
          className={`text-[28px] font-bold leading-[1.1] tracking-[-0.02em] ${titleClassName}`}
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
