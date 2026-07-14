"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import Phone from "./Phone";
import TextContent from "./TextContent";
import SectionHeading from "./SectionHeading";
import MobileWhyTunyt from "./MobileWhyTunyt";

export const TIMELINE = [0, 0.33, 0.66, 1];

export interface Feature {
  title: string;
  description: string;
  screen: string;
  textLayout: "left" | "center" | "right";
}

const features: Feature[] = [
  {
    title: "Own Your Revenue 100%",
    description:
      "Get paid your way. Connect your own Razorpay/ Stripe account, skip payout cycles, and keep 100% of your revenue.",
    screen: "/test/images/Revenue.png",
    textLayout: "left",
  },
  {
    title: "Analytics but in Human Language",
    description:
      "Analytics can help you fix what is broken at the right moment, and with tunyt’s AI, you can easily understand what is wrong, and fix it quick.",
    screen: "/test/images/Analytics.png",
    textLayout: "center",
  },
  {
    title: "Never Start from 0 Again",
    description:
      "Every attendee, every event, in one place. Build a single attendee database, invite past guests, manage approvals, waitlists, and communicate at scale.",
    screen: "/test/images/Audience.png",
    textLayout: "right",
  },
  {
    title: "Never Host Alone Again",
    description:
      "Think of tunyt as a teammate, not a tool. Ask questions, assign tasks, and take action across your event, from registrations and attendee management to communications and analytics.",
    screen: "/test/images/AgenticAI.png",
    textLayout: "left",
  },
];

export default function WhyTunyt() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Natural scroll mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create discrete steps so the animation never pauses in between
  const steppedProgress = useTransform(scrollYProgress, (v): number => {
    if (v < 0.166) return 0;
    if (v < 0.5) return 0.33;
    if (v < 0.833) return 0.66;
    return 1;
  });

  // Premium Apple/Linear spring smoothing
  const smoothProgress = useSpring(steppedProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.8,
    restDelta: 0.001,
  });

  const scrollToFeature = (targetIndex: number) => {
    if (!containerRef.current) return;

    const absoluteTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetScroll = absoluteTop + targetIndex * window.innerHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  // --------------------------------------------------------
  // Pill Navigation (Framer HTML match)
  // --------------------------------------------------------
  const p1_op = useTransform(smoothProgress, [0, 0.33], [1, 0]);
  const p1_y = useTransform(smoothProgress, [0, 0.33], ["0px", "-20px"]);

  const p2_op = useTransform(smoothProgress, [0, 0.33, 0.66], [0, 1, 0]);
  const p2_y = useTransform(smoothProgress, [0, 0.33, 0.66], ["20px", "0px", "-20px"]);

  const p3_op = useTransform(smoothProgress, [0.33, 0.66, 1], [0, 1, 0]);
  const p3_y = useTransform(smoothProgress, [0.33, 0.66, 1], ["20px", "0px", "-20px"]);

  const p4_op = useTransform(smoothProgress, [0.66, 1], [0, 1]);
  const p4_y = useTransform(smoothProgress, [0.66, 1], ["20px", "0px"]);

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

  return (
    <section className="relative w-full bg-black">
      {/* 1. Normal document flow heading */}
      <div className="relative z-10 w-full ">
        <SectionHeading />
      </div>

      {/* MOBILE TRACK */}
      <div className="block lg:hidden">
        <MobileWhyTunyt features={features} />
      </div>

      {/* 2. Sticky scroll-jacking track (DESKTOP) */}
      <div
        ref={containerRef}
        className="relative h-[400vh] w-full hidden lg:block"
      >
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          {/* Overlapping, continuous text transitions */}
          <TextContent features={features} progress={smoothProgress} />

          {/* Constantly floating phone with crossfading screens */}
          <Phone features={features} progress={smoothProgress} />

          {/* PILL NAVIGATION */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 md:h-12 md:w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="relative flex h-12 md:h-14 w-[140px] md:w-[180px] items-center justify-center overflow-hidden rounded-[30px] border border-white/10 bg-black/60 px-6 md:px-8 backdrop-blur-md">
                <motion.div
                  style={{ opacity: p1_op, y: p1_y }}
                  className="absolute font-medium text-white"
                >
                  Revenue
                </motion.div>
                <motion.div
                  style={{ opacity: p2_op, y: p2_y }}
                  className="absolute font-medium text-white"
                >
                  Analytics
                </motion.div>
                <motion.div
                  style={{ opacity: p3_op, y: p3_y }}
                  className="absolute font-medium text-white"
                >
                  Audience
                </motion.div>
                <motion.div
                  style={{ opacity: p4_op, y: p4_y }}
                  className="absolute font-medium text-white"
                >
                  Agentic AI
                </motion.div>
              </div>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 md:h-12 md:w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
