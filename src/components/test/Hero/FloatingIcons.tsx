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
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden w-full h-full">
      {/* 1. People (Top Left) */}
      <motion.div
        className="absolute left-[2%] top-[5%] md:left-[5%] md:top-[10%] w-[191.792px] h-[157.294px] scale-[0.5] md:scale-[0.7] lg:scale-100 origin-top-left"
        style={{
          rotate: "-9.443deg",
          y: y1,
        }}
      >
        <Image src="/test/icons/People1.png" alt="People" fill className="object-contain" style={{ opacity: 0.8, filter: "blur(8.4px)" }} />
        <Image src="/test/icons/People1.png" alt="People Layer 2" fill className="object-contain" style={{ opacity: 0.8, filter: "blur(54px)" }} />
      </motion.div>

      {/* 2. Star (Mid Top Left) */}
      <motion.div
        className="absolute left-[25%] top-[15%] md:left-[30%] w-[62.584px] h-[62.584px] hidden lg:block scale-[0.5] md:scale-[0.7] lg:scale-100 origin-center"
        style={{
          rotate: "-15deg",
          y: y2,
        }}
      >
        <Image src="/test/icons/star.png" alt="Star" fill className="object-contain" />
        <Image src="/test/icons/star2.png" alt="Star Layer 2" fill className="object-contain" style={{ mixBlendMode: "overlay", filter: "blur(3.23px)" }} />
        <Image src="/test/icons/star.png" alt="Star Layer 3" fill className="object-contain" style={{ filter: "blur(21.15px)" }} />
      </motion.div>

      {/* 3. Analytics (Mid Bottom Left) */}
      <motion.div
        className="absolute left-[15%] bottom-[30%] w-[103.457px] h-[96.811px] hidden md:block scale-[0.5] md:scale-[0.7] lg:scale-100 origin-center"
        style={{
          rotate: "-12.177deg",
          y: y3,
        }}
      >
        <Image src="/test/icons/Analytics.png" alt="Analytics" fill className="object-contain" style={{ filter: "blur(1.62px)" }} />
        <Image src="/test/icons/Analytics.png" alt="Analytics Layer 2" fill className="object-contain" style={{ filter: "blur(54px)" }} />
      </motion.div>

      {/* 4. Trophy (Bottom Left) */}
      <motion.div
        className="absolute left-[-2%] bottom-[2%] md:left-[2%] md:bottom-[5%] w-[131.623px] h-[114.712px] scale-[0.5] md:scale-[0.7] lg:scale-100 origin-bottom-left"
        style={{
          rotate: "-15.679deg",
          y: y4,
        }}
      >
        <Image src="/test/icons/Trophy.png" alt="Trophy" fill className="object-contain" style={{ opacity: 0.7, filter: "blur(4.16px)" }} />
        <Image src="/test/icons/Trophy.png" alt="Trophy Layer 2" fill className="object-contain" style={{ opacity: 0.7, filter: "blur(54px)" }} />
      </motion.div>

      {/* 5. Calendar (Top Right) */}
      <motion.div
        className="absolute right-[-5%] top-[10%] md:right-[5%] md:top-[15%] w-[123.589px] h-[107.711px] scale-[0.5] md:scale-[0.7] lg:scale-100 origin-top-right"
        style={{
          rotate: "11.797deg",
          y: y5,
        }}
      >
        <Image src="/test/icons/Calendar.png" alt="Calendar" fill className="object-contain" style={{ filter: "blur(3.92px)" }} />
        <Image src="/test/icons/Calendar.png" alt="Calendar Layer 2" fill className="object-contain" style={{ filter: "blur(54px)" }} />
      </motion.div>

      {/* 6. Hourglass (Mid Right) */}
      <motion.div
        className="absolute right-[20%] bottom-[45%] w-[96px] h-[83.666px] hidden md:block scale-[0.5] md:scale-[0.7] lg:scale-100 origin-center"
        style={{
          y: y6,
        }}
      >
        <Image src="/test/icons/Hourglass.png" alt="Hourglass" fill className="object-contain" style={{ filter: "blur(2.5px)" }} />
        <Image src="/test/icons/Hourglass.png" alt="Hourglass Layer 2" fill className="object-contain" style={{ filter: "blur(54px)" }} />
      </motion.div>

      {/* 7. Money (Bottom Right) */}
      <motion.div
        className="absolute right-[-5%] bottom-[2%] md:right-[5%] md:bottom-[5%] w-[154.428px] h-[134.587px] scale-[0.5] md:scale-[0.7] lg:scale-100 origin-bottom-right"
        style={{
          rotate: "-15deg",
          y: y7,
        }}
      >
        <Image src="/test/icons/Money.png" alt="Money" fill className="object-contain" style={{ opacity: 0.8, filter: "blur(8.475px)" }} />
        <Image src="/test/icons/Money.png" alt="Money Layer 2" fill className="object-contain" style={{ opacity: 0.8, filter: "blur(54px)" }} />
      </motion.div>

      {/* 8. Toggle (Mid Bottom Right) */}
      <motion.div
        className="absolute right-[25%] bottom-[20%] w-[67px] h-[35px] hidden lg:block scale-[0.5] md:scale-[0.7] lg:scale-100 origin-center"
        style={{
          rotate: "-16.125deg",
          y: y8,
        }}
      >
        <Image src="/test/icons/Toggle.png" alt="Toggle" fill className="object-contain" />
        <Image src="/test/icons/Toggle.png" alt="Toggle Layer 2" fill className="object-contain" style={{ filter: "blur(54px)" }} />
      </motion.div>
    </div>
  );
}
