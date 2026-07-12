"use client";

import { useRef, useEffect } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import Phone from "./Phone";
import TextContent from "./TextContent";
import SectionHeading from "./SectionHeading";

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
    screen: "/test/Screen1.svg",
    textLayout: "left",
  },
  {
    title: "Get Analytics that Talks",
    description:
      "Know what's working before it's too late. Track registrations, attendance, conversions, and identify exactly where growth opportunities exist.",
    screen: "/test/Screen2.svg",
    textLayout: "center",
  },
  {
    title: "Never Start from 0 Again",
    description:
      "Every attendee, every event, in one place. Build a single attendee database, invite past guests, manage approvals, waitlists, and communicate at scale.",
    screen: "/test/Screen3.svg",
    textLayout: "right",
  },
  {
    title: "Never Host Alone Again",
    description:
      "Think of tunyt as a teammate, not a tool. Ask questions, assign tasks, and take action across your event, from registrations and attendee management to communications and analytics.",
    screen: "/test/Screen4.svg",
    textLayout: "left",
  },
];

export default function WhyTunyt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const currentFeatureRef = useRef(0);

  // Natural scroll mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Premium Apple/Linear spring smoothing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.8,
    restDelta: 0.001,
  });

  const scrollToFeature = (targetIndex: number) => {
    if (!containerRef.current) return;
    isAnimatingRef.current = true;
    currentFeatureRef.current = targetIndex;

    const absoluteTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetScroll = absoluteTop + targetIndex * window.innerHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 850);
  };

  // Scroll Jacking Logic for Wheel, Touch, and Pill sync
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const isInside = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInside) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const progress = -rect.top / (rect.height - window.innerHeight);

        let targetIndex = currentFeatureRef.current + direction;

        // Special case: returning from below/above
        if (progress > 1.01 && direction === -1) {
          targetIndex = 3;
        } else if (progress < -0.01 && direction === 1) {
          targetIndex = 0;
        }

        if (targetIndex >= 0 && targetIndex <= 3) {
          // Prevent standard scroll to allow snapping
          e.preventDefault();

          if (!isAnimatingRef.current) {
            scrollToFeature(targetIndex);
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const isInside = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInside) {
        const touchEndY = e.touches[0].clientY;
        const diffY = touchStartY - touchEndY;

        // Swipe threshold
        if (Math.abs(diffY) > 30) {
          const direction = diffY > 0 ? 1 : -1;
          const progress = -rect.top / (rect.height - window.innerHeight);

          let targetIndex = currentFeatureRef.current + direction;

          // Special case: returning from below/above
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

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleManualScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleManualScroll);
    };
  }, []);

  // --------------------------------------------------------
  // Pill Navigation (Framer HTML match)
  // --------------------------------------------------------
  const p1_op = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const p1_y = useTransform(smoothProgress, [0, 0.25], ["0px", "-20px"]);

  const p2_op = useTransform(
    smoothProgress,
    [0.15, 0.25, 0.35, 0.58],
    [0, 1, 1, 0],
  );
  const p2_y = useTransform(
    smoothProgress,
    [0.15, 0.25, 0.35, 0.58],
    ["20px", "0px", "0px", "-20px"],
  );

  const p3_op = useTransform(
    smoothProgress,
    [0.48, 0.58, 0.68, 0.91],
    [0, 1, 1, 0],
  );
  const p3_y = useTransform(
    smoothProgress,
    [0.48, 0.58, 0.68, 0.91],
    ["20px", "0px", "0px", "-20px"],
  );

  const p4_op = useTransform(smoothProgress, [0.81, 0.91], [0, 1]);
  const p4_y = useTransform(smoothProgress, [0.81, 0.91], ["20px", "0px"]);

  return (
    <section className="relative w-full bg-black">
      {/* 1. Normal document flow heading */}
      <div className="relative z-10 w-full">
        <SectionHeading />
      </div>

      {/* 2. Sticky scroll-jacking track */}
      <div ref={containerRef} className="relative h-[400vh] w-full">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          {/* Overlapping, continuous text transitions */}
          <TextContent features={features} progress={smoothProgress} />

          {/* Constantly floating phone with crossfading screens */}
          <Phone features={features} progress={smoothProgress} />

          {/* PILL NAVIGATION */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  scrollToFeature(Math.max(0, currentFeatureRef.current - 1))
                }
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
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
              <div className="relative flex h-14 w-[180px] items-center justify-center overflow-hidden rounded-[30px] border border-white/10 bg-black/60 px-8 backdrop-blur-md">
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
                onClick={() =>
                  scrollToFeature(Math.min(3, currentFeatureRef.current + 1))
                }
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
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
