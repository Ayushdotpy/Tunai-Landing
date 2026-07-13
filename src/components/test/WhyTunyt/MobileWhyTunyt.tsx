"use client";

import { useRef, useEffect } from "react";
import { useScroll, useSpring, useTransform, motion, MotionValue } from "framer-motion";
import type { Feature } from "./WhyTunyt";

interface MobileWhyTunytProps {
  features: Feature[];
}

export default function MobileWhyTunyt({ features }: MobileWhyTunytProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const currentFeatureRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Cushion the animation to make it slower, cinematic, and premium
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 30,
    mass: 3.5,
    restDelta: 0.001,
  });

  // Pill label transitions
  const p1_op = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const p1_y = useTransform(smoothProgress, [0, 0.25], ["0px", "-20px"]);

  const p2_op = useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.58], [0, 1, 1, 0]);
  const p2_y = useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.58], ["20px", "0px", "0px", "-20px"]);

  const p3_op = useTransform(smoothProgress, [0.48, 0.58, 0.68, 0.91], [0, 1, 1, 0]);
  const p3_y = useTransform(smoothProgress, [0.48, 0.58, 0.68, 0.91], ["20px", "0px", "0px", "-20px"]);

  const p4_op = useTransform(smoothProgress, [0.81, 0.91], [0, 1]);
  const p4_y = useTransform(smoothProgress, [0.81, 0.91], ["20px", "0px"]);

  // Arrow button dynamics
  const leftArrowOpacity = useTransform(smoothProgress, [0, 0.15, 0.22, 1.0], [0, 0, 1, 1]);
  const leftArrowPointerEvents = useTransform(smoothProgress, (p) => (p < 0.18 ? "none" : "auto"));

  const rightArrowOpacity = useTransform(smoothProgress, [0, 0.72, 0.78, 1.0], [1, 1, 0, 0]);
  const rightArrowPointerEvents = useTransform(smoothProgress, (p) => (p > 0.75 ? "none" : "auto"));

  // Fan rotation (theta of the entire hub)
  const fanTheta = useTransform(
    smoothProgress,
    [0, 0.22, 0.28, 0.48, 0.56, 1.0],
    [0, 0, -120, -120, -240, -240]
  );

  // Individual blade rotations
  const rotate1 = useTransform(fanTheta, (theta) => theta);
  const rotate2 = useTransform(fanTheta, (theta) => theta + 120);
  const rotate3 = useTransform(fanTheta, (theta) => theta + 240);

  // Individual blade opacities (inactive blades stay visible at 0.3 opacity to look like fan blades)
  const blade1Opacity = useTransform(
    smoothProgress,
    [0, 0.22, 0.28, 0.48, 0.56, 0.72, 0.78, 1.0],
    [1.0, 1.0, 0.3, 0.3, 0.3, 0.3, 0.0, 0.0]
  );

  const blade2Opacity = useTransform(
    smoothProgress,
    [0, 0.22, 0.28, 0.48, 0.56, 0.72, 0.78, 1.0],
    [0.3, 0.3, 1.0, 1.0, 0.3, 0.3, 0.0, 0.0]
  );

  const blade3Opacity = useTransform(
    smoothProgress,
    [0, 0.48, 0.56, 0.72, 0.78, 1.0],
    [0.3, 0.3, 1.0, 1.0, 1.0, 1.0]
  );

  // Only blade 3 translates up to the top of the screen on Slide 4
  const blade3Y = useTransform(
    smoothProgress,
    [0, 0.72, 0.78, 1.0],
    ["0px", "0px", "-68dvh", "-68dvh"]
  );

  const scrollToFeature = (targetIndex: number) => {
    if (!containerRef.current || targetIndex < 0 || targetIndex > 3) return;
    isAnimatingRef.current = true;
    currentFeatureRef.current = targetIndex;

    const absoluteTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetScroll = absoluteTop + targetIndex * window.innerHeight;
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    // Match scroll animation timing
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 1000);
  };

  const handlePrev = () => {
    const progress = scrollYProgress.get();
    let currentIndex = 0;
    if (progress < 0.25) currentIndex = 0;
    else if (progress < 0.5) currentIndex = 1;
    else if (progress < 0.75) currentIndex = 2;
    else currentIndex = 3;

    scrollToFeature(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    const progress = scrollYProgress.get();
    let currentIndex = 0;
    if (progress < 0.25) currentIndex = 0;
    else if (progress < 0.5) currentIndex = 1;
    else if (progress < 0.75) currentIndex = 2;
    else currentIndex = 3;

    scrollToFeature(Math.min(3, currentIndex + 1));
  };

  // Scroll Jack Logic for Mobile Touch and Pill sync
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const isInside = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInside) {
        const touchEndY = e.touches[0].clientY;
        const diffY = touchStartY - touchEndY;

        // Swipe threshold (swipe up -> next, swipe down -> prev)
        if (Math.abs(diffY) > 35) {
          const direction = diffY > 0 ? 1 : -1;
          const progress = -rect.top / (rect.height - window.innerHeight);

          let targetIndex = currentFeatureRef.current + direction;

          if (progress > 1.01 && direction === -1) {
            targetIndex = 3;
          } else if (progress < -0.01 && direction === 1) {
            targetIndex = 0;
          }

          if (targetIndex >= 0 && targetIndex <= 3) {
            e.preventDefault();
            if (!isAnimatingRef.current) {
              scrollToFeature(targetIndex);
            }
          }
        }
      }
    };

    const handleManualScroll = () => {
      if (!isAnimatingRef.current) {
        const rect = container.getBoundingClientRect();
        const progress = -rect.top / (rect.height - window.innerHeight);
        if (progress >= 0 && progress <= 1) {
          currentFeatureRef.current = Math.round(progress * 3);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleManualScroll);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleManualScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        
        {/* TEXT OVERLAYS */}
        {features.map((feature, i) => (
          <MobileTextItem key={i} feature={feature} index={i} progress={smoothProgress} />
        ))}

        {/* PHONE ANCHOR (FAN BLADES) */}
        <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
          
          {/* Blade 1 (Revenue) */}
          <motion.div
            style={{
              rotate: rotate1,
              opacity: blade1Opacity,
              transformOrigin: "center 780px",
              marginTop: "38dvh",
            }}
            className="absolute w-[280px] aspect-[682/1404] shrink-0"
          >
            <img src="/test/Screen1.svg" className="absolute inset-x-0 top-0 w-full h-auto object-contain" alt="Revenue" />
          </motion.div>

          {/* Blade 2 (Analytics) */}
          <motion.div
            style={{
              rotate: rotate2,
              opacity: blade2Opacity,
              transformOrigin: "center 780px",
              marginTop: "38dvh",
            }}
            className="absolute w-[280px] aspect-[682/1404] shrink-0"
          >
            <img src="/test/Screen2.svg" className="absolute inset-x-0 top-0 w-full h-auto object-contain" alt="Analytics" />
          </motion.div>

          {/* Blade 3 (Audience / Agentic AI) */}
          <motion.div
            style={{
              rotate: rotate3,
              y: blade3Y,
              opacity: blade3Opacity,
              transformOrigin: "center 780px",
              marginTop: "38dvh",
            }}
            className="absolute w-[280px] aspect-[682/1404] shrink-0"
          >
            <Blade3Screen progress={smoothProgress} />
          </motion.div>

        </div>

        {/* PILL NAVIGATION */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-3">
            {/* Left arrow */}
            <motion.button
              onClick={handlePrev}
              style={{ opacity: leftArrowOpacity, pointerEvents: leftArrowPointerEvents }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            {/* Central label container */}
            <div className="relative flex h-12 w-[140px] items-center justify-center overflow-hidden rounded-[30px] border border-white/10 bg-black/60 px-6 backdrop-blur-md">
              <motion.div style={{ opacity: p1_op, y: p1_y }} className="absolute font-medium text-white text-[15px]">Revenue</motion.div>
              <motion.div style={{ opacity: p2_op, y: p2_y }} className="absolute font-medium text-white text-[15px]">Analytics</motion.div>
              <motion.div style={{ opacity: p3_op, y: p3_y }} className="absolute font-medium text-white text-[15px]">Audience</motion.div>
              <motion.div style={{ opacity: p4_op, y: p4_y }} className="absolute font-medium text-white text-[15px]">Agentic AI</motion.div>
            </div>

            {/* Right arrow */}
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
  let input = [0, 0, 0, 0];
  if (index === 0) input = [0, 0.15, 0.22, 0.28];
  if (index === 1) input = [0.22, 0.28, 0.48, 0.56];
  if (index === 2) input = [0.48, 0.56, 0.72, 0.78];
  if (index === 3) input = [0.72, 0.78, 1.0, 1.1];

  const opacity = useTransform(progress, input, [0, 1, 1, 0]);
  const y = useTransform(progress, input, ["40px", "0px", "0px", "-40px"]);

  // Position: slides 1, 2, 3 at the top. Slide 4 at the bottom.
  const positionClass = index < 3
    ? "top-[70px]"
    : "bottom-[95px]";

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

function Blade3Screen({ progress }: { progress: MotionValue<number> }) {
  const opacity3 = useTransform(progress, [0, 0.72, 0.78, 1.0], [1, 1, 0, 0]);
  const opacity4 = useTransform(progress, [0, 0.72, 0.78, 1.0], [0, 0, 1, 1]);

  return (
    <>
      <motion.img
        src="/test/Screen3.svg"
        alt="Audience Screen"
        style={{ opacity: opacity3 }}
        className="absolute inset-x-0 top-0 w-full h-auto object-contain"
      />
      <motion.img
        src="/test/Screen4.svg"
        alt="Agentic AI Screen"
        style={{ opacity: opacity4 }}
        className="absolute inset-x-0 w-full h-auto object-contain bottom-0"
      />
    </>
  );
}
