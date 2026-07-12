import Image from "next/image";
import type React from "react";

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
  imageSize = 140, 
  imageStyle = {},
}: CategoryCardProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`relative isolate flex transition-transform duration-300 hover:scale-[1.02] overflow-hidden ${borderRadius} border ${borderColor} ${
        isHorizontal ? "flex-row" : "flex-col"
      } ${className}`}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 z-[-1]`}
        style={{
          background:
            bgGradient ||
            `radial-gradient(120% 120% at 50% 0%, ${glowColor}22 0%, #050505 100%)`,
          boxShadow: `0 0 40px -10px ${glowColor}15`,
        }}
      >
        {customBackground}


      </div>

      {/* Image Container — min-h-0 lets it actually shrink instead of forcing overflow */}
      <div className={`${!isHorizontal ? "w-full" : ""}`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Category Icon"
            width={imageSize}
            height={imageSize}
            unoptimized={true}
            className={imageClassName}
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
        className={`flex flex-col shrink-0 ${
          isHorizontal ? "flex-1" : "w-full"
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
