"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingIcons() {
  const { scrollY } = useScroll();

  // Dramatically randomized parallax scrolling offsets.
  // All icons move up when scrolling down, but at wildly different speeds for a 3D effect.
  const y1 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -650]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -950]);
  const y5 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y6 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y7 = useTransform(scrollY, [0, 1000], [0, -800]);
  const y8 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "1165px", height: "503.971px" }}
      >
        <motion.div
          className="absolute w-[191.792px] h-[157.294px]"
          style={{
            left: "25px",
            top: "0px",
            rotate: "-9.443deg",
            y: y1,
          }}
        >
          <Image
            src="/test/icons/people1.png"
            alt="People"
            fill
            className="object-contain"
            style={{ opacity: 0.8, filter: "blur(8.4px)" }}
          />
          <Image
            src="/test/icons/people1.png"
            alt="People Layer 2"
            fill
            className="object-contain"
            style={{ opacity: 0.8, filter: "blur(54px)" }}
          />
        </motion.div>

        <motion.div
          className="absolute w-[62.584px] h-[62.584px]"
          style={{
            left: "276px",
            top: "60px",
            rotate: "-15deg",
            y: y2,
          }}
        >
          <Image
            src="/test/icons/star.png"
            alt="Star"
            fill
            className="object-contain"
          />
          <Image
            src="/test/icons/star2.png"
            alt="Star Layer 2"
            fill
            className="object-contain"
            style={{
              mixBlendMode: "overlay",
              filter: "blur(3.23px)",
            }}
          />
          <Image
            src="/test/icons/star.png"
            alt="Star Layer 3"
            fill
            className="object-contain"
            style={{ filter: "blur(21.15px)" }}
          />
        </motion.div>

        <motion.div
          className="absolute w-[103.457px] h-[96.811px]"
          style={{
            left: "170px",
            bottom: "155.52px",
            rotate: "-12.177deg",
            y: y3,
          }}
        >
          <Image
            src="/test/icons/analytics.png"
            alt="Analytics"
            fill
            className="object-contain"
            style={{ filter: "blur(1.62px)" }}
          />
          <Image
            src="/test/icons/analytics.png"
            alt="Analytics Layer 2"
            fill
            className="object-contain"
            style={{ filter: "blur(54px)" }}
          />
        </motion.div>

        <motion.div
          className="absolute w-[131.623px] h-[114.712px]"
          style={{
            left: "0px",
            bottom: "11.96px",
            rotate: "-15.679deg",
            y: y4,
          }}
        >
          <Image
            src="/test/icons/trophy.png"
            alt="Trophy"
            fill
            className="object-contain"
            style={{ opacity: 0.7, filter: "blur(4.16px)" }}
          />
          <Image
            src="/test/icons/trophy.png"
            alt="Trophy Layer 2"
            fill
            className="object-contain"
            style={{ opacity: 0.7, filter: "blur(54px)" }}
          />
        </motion.div>

        <motion.div
          className="absolute w-[123.589px] h-[107.711px]"
          style={{
            left: "1022px",
            top: "39px",
            rotate: "11.797deg",
            y: y5,
          }}
        >
          <Image
            src="/test/icons/calendar.png"
            alt="Calendar"
            fill
            className="object-contain"
            style={{ filter: "blur(3.92px)" }}
          />
          <Image
            src="/test/icons/calendar.png"
            alt="Calendar Layer 2"
            fill
            className="object-contain"
            style={{ filter: "blur(54px)" }}
          />
        </motion.div>

        <motion.div
          className="absolute w-[96px] h-[83.666px]"
          style={{
            left: "894px",
            bottom: "228.3px",
            y: y6,
          }}
        >
          <Image
            src="/test/icons/hourglass.png"
            alt="Hourglass"
            fill
            className="object-contain"
            style={{ filter: "blur(2.5px)" }}
          />
          <Image
            src="/test/icons/hourglass.png"
            alt="Hourglass Layer 2"
            fill
            className="object-contain"
            style={{ filter: "blur(54px)" }}
          />
        </motion.div>

        <motion.div
          className="absolute w-[154.428px] h-[134.587px]"
          style={{
            left: "942px",
            bottom: "0px",
            rotate: "-15deg",
            y: y7,
          }}
        >
          <Image
            src="/test/icons/money.png"
            alt="Money"
            fill
            className="object-contain"
            style={{ opacity: 0.8, filter: "blur(8.475px)" }}
          />
          <Image
            src="/test/icons/money.png"
            alt="Money Layer 2"
            fill
            className="object-contain"
            style={{ opacity: 0.8, filter: "blur(54px)" }}
          />
        </motion.div>

        <motion.div
          className="absolute w-[67px] h-[35px]"
          style={{
            left: "757px",
            bottom: "131.9px",
            rotate: "-16.125deg",
            y: y8,
          }}
        >
          <Image
            src="/test/icons/toggle.png"
            alt="Toggle"
            fill
            className="object-contain"
          />
          <Image
            src="/test/icons/toggle.png"
            alt="Toggle Layer 2"
            fill
            className="object-contain"
            style={{ filter: "blur(54px)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
