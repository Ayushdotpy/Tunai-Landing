"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring, useTransform, motion, MotionValue, animate, useMotionValueEvent } from "framer-motion";
import type { Feature } from "./WhyTunyt";

interface MobileWhyTunytProps {
  features: Feature[];
}

export default function MobileWhyTunyt({ features }: MobileWhyTunytProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create discrete steps so the animation never pauses in between
  const steppedProgress = useTransform(scrollYProgress, (v): number => {
    if (v < 0.166) return 0;
    if (v < 0.5) return 0.333;
    if (v < 0.833) return 0.666;
    return 1;
  });

  const smoothProgress = useSpring(steppedProgress, { damping: 25, stiffness: 120 });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(steppedProgress, "change", (latest) => {
    if (latest === 0) setActiveIndex(0);
    else if (latest === 0.333) setActiveIndex(1);
    else if (latest === 0.666) setActiveIndex(2);
    else setActiveIndex(3);
  });

  // Pill label transitions
  const p1_op = useTransform(smoothProgress, [0, 0.333], [1, 0]);
  const p1_y = useTransform(smoothProgress, [0, 0.333], ["0px", "-20px"]);

  const p2_op = useTransform(smoothProgress, [0, 0.333, 0.666], [0, 1, 0]);
  const p2_y = useTransform(smoothProgress, [0, 0.333, 0.666], ["20px", "0px", "-20px"]);

  const p3_op = useTransform(smoothProgress, [0.333, 0.666, 1], [0, 1, 0]);
  const p3_y = useTransform(smoothProgress, [0.333, 0.666, 1], ["20px", "0px", "-20px"]);

  const p4_op = useTransform(smoothProgress, [0.666, 1], [0, 1]);
  const p4_y = useTransform(smoothProgress, [0.666, 1], ["20px", "0px"]);

  // Arrow button dynamics
  const leftArrowOpacity = useTransform(smoothProgress, [0, 0.333], [0, 1]);
  const leftArrowPointerEvents = useTransform(smoothProgress, (p) => (p < 0.1 ? "none" : "auto"));

  const rightArrowOpacity = useTransform(smoothProgress, [0.666, 1], [1, 0]);
  const rightArrowPointerEvents = useTransform(smoothProgress, (p) => (p > 0.9 ? "none" : "auto"));

  // ----------------------------------------------------
  // Phone 1 (Revenue)
  // ----------------------------------------------------
  const phone1_x = useTransform(smoothProgress, [0, 0.333, 0.666, 1], ["0vw", "-100vw", "-100vw", "-100vw"]);
  const phone1_rotate = useTransform(smoothProgress, [0, 0.333, 0.666, 1], [0, -15, -15, -15]);
  const phone1_opacity = useTransform(smoothProgress, [0, 0.333, 0.666, 1], [1, 0, 0, 0]);

  // ----------------------------------------------------
  // Phone 2 (Analytics)
  // ----------------------------------------------------
  const phone2_x = useTransform(smoothProgress, [0, 0.333, 0.666, 1], ["100vw", "0vw", "-100vw", "-100vw"]);
  const phone2_rotate = useTransform(smoothProgress, [0, 0.333, 0.666, 1], [15, 0, -15, -15]);
  const phone2_opacity = useTransform(smoothProgress, [0, 0.333, 0.666, 1], [0, 1, 0, 0]);

  // ----------------------------------------------------
  // Phone 3 (Audience)
  // ----------------------------------------------------
  const phone3_x = useTransform(smoothProgress, [0, 0.333, 0.666, 1], ["100vw", "100vw", "0vw", "0vw"]);
  const phone3_y = useTransform(smoothProgress, [0, 0.333, 0.666, 1], ["0dvh", "0dvh", "0dvh", "-100dvh"]);
  const phone3_rotate = useTransform(smoothProgress, [0, 0.333, 0.666, 1], [15, 15, 0, 0]);
  const phone3_opacity = useTransform(smoothProgress, [0, 0.333, 0.666, 1], [0, 0, 1, 0]);

  // ----------------------------------------------------
  // Phone 4 (Agentic AI)
  // ----------------------------------------------------
  const phone4_y = useTransform(smoothProgress, [0, 0.333, 0.666, 1], ["40dvh", "40dvh", "40dvh", "0dvh"]);
  const phone4_opacity = useTransform(smoothProgress, [0, 0.333, 0.666, 1], [0, 0, 0, 1]);

  const scrollToFeature = (targetIndex: number) => {
    if (!containerRef.current || targetIndex < 0 || targetIndex > 3) return;

    const absoluteTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetScroll = absoluteTop + targetIndex * window.innerHeight;
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  const handlePrev = () => scrollToFeature(Math.max(0, activeIndex - 1));
  const handleNext = () => scrollToFeature(Math.min(3, activeIndex + 1));

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        
        {/* TEXT OVERLAYS */}
        {features.map((feature, i) => (
          <MobileTextItem key={i} feature={feature} index={i} progress={smoothProgress} />
        ))}

        {/* PHONES CONTAINER */}
        <div className="absolute top-0 w-full h-[70dvh] flex justify-center pointer-events-none z-0 overflow-hidden">
          
          <motion.div
            style={{ x: phone1_x, rotate: phone1_rotate, opacity: phone1_opacity, marginTop: "28dvh" }}
            className="absolute w-[85vw] max-w-[380px] aspect-[682/1404] shrink-0 flex items-center justify-center origin-bottom"
          >
            <img src="/test/images/Revenue.png" className="absolute inset-0 z-30 w-full h-full object-contain" alt="Revenue" />
          </motion.div>

          <motion.div
            style={{ x: phone2_x, rotate: phone2_rotate, opacity: phone2_opacity, marginTop: "28dvh" }}
            className="absolute w-[85vw] max-w-[380px] aspect-[682/1404] shrink-0 flex items-center justify-center origin-bottom"
          >
            <img src="/test/images/Analytics.png" className="absolute inset-0 z-30 w-full h-full object-contain" alt="Analytics" />
          </motion.div>

          <motion.div
            style={{ x: phone3_x, y: phone3_y, rotate: phone3_rotate, opacity: phone3_opacity, marginTop: "28dvh" }}
            className="absolute w-[85vw] max-w-[380px] aspect-[682/1404] shrink-0 flex items-center justify-center origin-bottom"
          >
            <img src="/test/images/Audience.png" className="absolute inset-0 z-30 w-full h-full object-contain" alt="Audience" />
          </motion.div>
        </div>

        <div className="absolute top-[18dvh] w-full h-[46dvh] flex justify-center pointer-events-none z-0 overflow-hidden">
          <motion.div
            style={{ y: phone4_y, opacity: phone4_opacity }}
            className="absolute bottom-0 w-[85vw] max-w-[380px] aspect-[682/1404] shrink-0 flex items-center justify-center"
          >
            <img src="/test/images/AgenticAI.png" className="absolute inset-0 z-30 w-full h-full object-contain" alt="Agentic AI" />
          </motion.div>
        </div>

        {/* PILL NAVIGATION */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-3">
            <motion.button
              onClick={handlePrev}
              style={{ opacity: leftArrowOpacity, pointerEvents: leftArrowPointerEvents }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            <div className="relative flex h-12 w-[140px] items-center justify-center overflow-hidden rounded-[30px] border border-white/10 bg-black/60 px-6 backdrop-blur-md">
              <motion.div style={{ opacity: p1_op, y: p1_y }} className="absolute font-medium text-white text-[15px]">Revenue</motion.div>
              <motion.div style={{ opacity: p2_op, y: p2_y }} className="absolute font-medium text-white text-[15px]">Analytics</motion.div>
              <motion.div style={{ opacity: p3_op, y: p3_y }} className="absolute font-medium text-white text-[15px]">Audience</motion.div>
              <motion.div style={{ opacity: p4_op, y: p4_y }} className="absolute font-medium text-white text-[15px]">Agentic AI</motion.div>
            </div>

            <motion.button
              onClick={handleNext}
              style={{ opacity: rightArrowOpacity, pointerEvents: rightArrowPointerEvents }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileTextItem({ feature, index, progress }: { feature: Feature, index: number, progress: MotionValue<number> }) {
  const input = [0, 0.333, 0.666, 1];

  let opacityOutput = [0, 0, 0, 0];
  let yOutput = ["40px", "40px", "40px", "40px"];

  if (index === 0) {
    opacityOutput = [1, 0, 0, 0];
    yOutput = ["0px", "-40px", "-40px", "-40px"];
  } else if (index === 1) {
    opacityOutput = [0, 1, 0, 0];
    yOutput = ["40px", "0px", "-40px", "-40px"];
  } else if (index === 2) {
    opacityOutput = [0, 0, 1, 0];
    yOutput = ["40px", "40px", "0px", "-40px"];
  } else if (index === 3) {
    opacityOutput = [0, 0, 0, 1];
    yOutput = ["40px", "40px", "40px", "0px"];
  }

  const opacity = useTransform(progress, input, opacityOutput);
  const y = useTransform(progress, input, yOutput);

  const positionClass = index === 3
    ? "bottom-[10dvh]"
    : "top-[70px]";

  return (
    <motion.div
      className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[500px] flex flex-col items-center text-center gap-3 px-6 z-10 ${positionClass}`}
      style={{ opacity, y }}
    >
      <h3 className="font-mosvita text-[28px] sm:text-[32px] font-semibold leading-[1.2] text-white" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
        {feature.title}
      </h3>
      <p className="font-sans text-[15px] sm:text-[16px] font-medium leading-[1.5] text-[#707070]">
        {feature.description}
      </p>
    </motion.div>
  );
}

