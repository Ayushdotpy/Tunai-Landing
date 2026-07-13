"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Feature, TIMELINE } from "./WhyTunyt";

interface PhoneProps {
  features: Feature[];
  progress: MotionValue<number>;
}

export default function Phone({ features, progress }: PhoneProps) {
  // Animate phone width smoothly
  const widthVal = useTransform(
    progress,
    TIMELINE,
    [681.9309, 512.9309, 663, 599],
  );
  const width = useTransform(widthVal, (v) => `${v}px`);

  // Animate horizontal position (x)
  const xVal = useTransform(progress, TIMELINE, [606, 463.53, 171, 706]);
  const x = useTransform(xVal, (v) => `${v}px`);

  // Animate vertical position (y)
  const y = useTransform(progress, TIMELINE, [
    "calc(0vh + 115px)",
    "calc(0vh + 243px)",
    "calc(0vh + 125px)",
    "calc(100vh + -1273px)",
  ]);

  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
      <div className="relative mx-auto h-full w-full max-w-[1440px] scale-[0.55] md:scale-[0.75] lg:scale-100 origin-center">
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            x,
            y,
            width,
          }}
          className="z-40 flex items-center justify-center"
        >
          {/* Screen container spanning 100% of phone layout width */}
          <motion.div
            style={{ width: "100%" }}
            className="relative w-full aspect-[682/1404] overflow-hidden rounded-[40px] bg-[#0a0a0a]"
          >
            {features.map((feature, i) => (
              <ScreenItem
                key={i}
                src={feature.screen}
                index={i}
                progress={progress}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ScreenItem({
  src,
  index,
  progress,
}: {
  src: string;
  index: number;
  progress: MotionValue<number>;
}) {
  let input = [0, 0, 0, 0];
  let opacityOutput = [0, 0, 0, 0];
  let xOutput = ["0px", "0px", "0px", "0px"];

  if (index === 0) {
    input = [-0.1, 0.066, 0.266, 1.1];
    opacityOutput = [1, 1, 0, 0];
    xOutput = ["0px", "0px", "-20px", "-20px"];
  } else if (index === 1) {
    input = [0.066, 0.266, 0.396, 0.596];
    opacityOutput = [0, 1, 1, 0];
    xOutput = ["20px", "0px", "0px", "-20px"];
  } else if (index === 2) {
    input = [0.396, 0.596, 0.726, 0.926];
    opacityOutput = [0, 1, 1, 0];
    xOutput = ["20px", "0px", "0px", "-20px"];
  } else if (index === 3) {
    input = [0.726, 0.926, 1.0, 1.1];
    opacityOutput = [0, 1, 1, 1];
    xOutput = ["20px", "0px", "0px", "0px"];
  }

  const opacity = useTransform(progress, input, opacityOutput);
  const x = useTransform(progress, input, xOutput);

  const isLast = index === 3;

  return (
    <motion.img
      src={src}
      alt={`Screen ${index + 1}`}
      style={{ opacity, x }}
      className={`absolute inset-x-0 w-full h-auto ${isLast ? "bottom-0" : "top-0"}`}
    />
  );
}
