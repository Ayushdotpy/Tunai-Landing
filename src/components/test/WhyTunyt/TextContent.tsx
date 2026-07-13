"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Feature, TIMELINE } from "./WhyTunyt";

interface TextContentProps {
  features: Feature[];
  progress: MotionValue<number>;
}

export default function TextContent({ features, progress }: TextContentProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {features.map((feature, i) => (
          <TextItem key={i} feature={feature} index={i} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function TextItem({
  feature,
  index,
  progress,
}: {
  feature: Feature;
  index: number;
  progress: MotionValue<number>;
}) {
  let enterStart = 0,
    active = 0,
    exitEnd = 0;

  if (index === 0) {
    enterStart = -0.33;
    active = 0;
    exitEnd = TIMELINE[1];
  } else if (index === 1) {
    enterStart = TIMELINE[0];
    active = TIMELINE[1];
    exitEnd = TIMELINE[2];
  } else if (index === 2) {
    enterStart = TIMELINE[1];
    active = TIMELINE[2];
    exitEnd = TIMELINE[3];
  } else if (index === 3) {
    enterStart = TIMELINE[2];
    active = TIMELINE[3];
    exitEnd = 1.33;
  }

  const input = [enterStart, active, exitEnd];

  const opacity = useTransform(progress, input, [0, 1, 0]);
  const y = useTransform(progress, input, ["40px", "0px", "-40px"]);
  const blur = useTransform(progress, input, [8, 0, 8]);

  const getLayoutClasses = (layout: string) => {
    switch (layout) {
      case "left":
        return "left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 text-left w-[90%] md:w-[400px]";
      case "center":
        return "left-1/2 -translate-x-1/2 top-[10%] text-center w-[90%] md:w-[600px]";
      case "right":
        return "right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 text-left w-[90%] md:w-[400px]";
      default:
        return "";
    }
  };

  return (
    <motion.div
      className={`absolute flex flex-col gap-4 ${getLayoutClasses(
        feature.textLayout
      )}`}
      style={{ opacity, y, filter: useTransform(blur, (v) => `blur(${v}px)`) }}
    >
      <h3 className="font-mosvita text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[-0.32px] text-white">
        {feature.title}
      </h3>
      <p className="font-sans text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-[#707070]">
        {feature.description}
      </p>
    </motion.div>
  );
}
