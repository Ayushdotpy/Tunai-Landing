"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CategoryCards() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mx-auto mt-12 md:mt-20 grid w-full max-w-[1280px] grid-cols-1 gap-6 px-4 md:px-6 md:grid-cols-3"
    >
      {/* ---------------- CARD 1: BEFORE ---------------- */}
      <motion.div
        variants={cardVariants}
        className="group relative mx-auto flex w-full max-w-[397px] h-[340px] md:h-[407px] flex-col overflow-hidden rounded-[32px] md:rounded-[44px] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
        style={{
          background:
            "radial-gradient(135.38% 51.98% at 50.13% 23.83%, #000 0%, #0F0F0F 100%)",
        }}
      >
        <div className="relative z-0 flex w-full justify-center px-[42px] pb-0">
          <div
            className="absolute left-0 top-0 z-10 w-full h-[105px]"
            style={{
              background:
                "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
          <motion.div
            animate={{ y: [-8, 8] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-full transition-transform duration-500 ease-out"
          >
            <Image
              src="/test/images/Before.png"
              alt="Saves You Time"
              width={400}
              height={400}
              className="relative z-0 h-auto w-full object-contain object-top"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 flex w-full flex-col items-start gap-1 pb-[24px] md:pb-[33px] pl-[24px] md:pl-[42px] pr-[24px] md:pr-[53px] pt-8">
          <span
            className="self-stretch font-geist text-[12px] font-medium leading-none tracking-[-0.24px] text-[rgba(255,255,255,0.44)]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Before
          </span>
          <h3
            className="self-stretch font-geist text-[22px] md:text-[28px] font-semibold leading-[1.4] tracking-[-0.56px] text-white"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Saves You Time
          </h3>
          <p
            className="self-stretch font-geist text-[14px] md:text-[16px] font-medium leading-[1.4] tracking-[-0.32px] text-white opacity-[0.44]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Automates setup, customises pages, and builds schedules in minutes
          </p>
        </div>
      </motion.div>

      {/* ---------------- CARD 2: DURING ---------------- */}
      <motion.div
        variants={cardVariants}
        className="group relative mx-auto flex w-full max-w-[397px] h-[340px] md:h-[407px] flex-col overflow-hidden rounded-[32px] md:rounded-[44px] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
        style={{
          background:
            "radial-gradient(135.38% 51.98% at 50.13% 23.83%, #000 0%, #0F0F0F 100%)",
        }}
      >
        <div className="relative z-0 flex w-full justify-center pl-[42px] pr-[41px] pt-[30px] pb-0">
          <motion.div
            animate={{ y: [-8, 8] }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-full transition-transform duration-500 ease-out"
          >
            <Image
              src="/test/images/During.png"
              alt="Watches Your Back"
              width={400}
              height={400}
              className="relative z-0 h-auto w-full object-contain object-top"
            />
          </motion.div>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-10 h-[286px] w-full"
          style={{
            background:
              "radial-gradient(142.84% 49.78% at 49.87% 0%, rgba(0, 0, 0, 0.00) 24.57%, #000 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 z-20 flex w-full flex-col items-start gap-1 pb-[24px] md:pb-[33px] pl-[24px] md:pl-[42px] pr-[24px] md:pr-[53px] pt-8">
          <span
            className="self-stretch font-geist text-[12px] font-medium leading-none tracking-[-0.24px] text-[rgba(255,255,255,0.44)]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            During
          </span>
          <h3
            className="self-stretch font-geist text-[22px] md:text-[28px] font-semibold leading-[1.4] tracking-[-0.56px] text-white"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Watches Your Back
          </h3>
          <p
            className="self-stretch font-geist text-[14px] md:text-[16px] font-medium leading-[1.4] tracking-[-0.32px] text-white opacity-[0.44]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Monitors registrations, attendance, and performance so nothing slips
            through
          </p>
        </div>
      </motion.div>

      {/* ---------------- CARD 3: AFTER ---------------- */}
      <motion.div
        variants={cardVariants}
        className="group relative mx-auto flex w-full max-w-[397px] h-[340px] md:h-[407px] flex-col overflow-hidden rounded-[32px] md:rounded-[44px] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
        style={{
          background:
            "radial-gradient(135.38% 51.98% at 50.13% 23.83%, #000 0%, #0F0F0F 100%)",
        }}
      >
        <div className="relative z-0 flex w-full justify-center pl-[42px] pr-[32px] pb-0">
          <div
            className="absolute left-0 top-0 z-10 w-full h-[105px]"
            style={{
              background:
                "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
          <motion.div
            animate={{ y: [-8, 8] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-full transition-transform duration-500 ease-out"
          >
            <Image
              src="/test/images/After.png"
              alt="Helps You Improve"
              width={400}
              height={400}
              className="relative z-0 h-auto w-full object-contain object-top"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 flex w-full flex-col items-start gap-1 pb-[24px] md:pb-[33px] pl-[24px] md:pl-[42px] pr-[24px] md:pr-[53px] pt-8">
          <span
            className="self-stretch font-geist text-[12px] font-medium leading-none tracking-[-0.24px] text-[rgba(255,255,255,0.44)]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            After
          </span>
          <h3
            className="self-stretch font-geist text-[22px] md:text-[28px] font-semibold leading-[1.4] tracking-[-0.56px] text-white"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Helps You Improve
          </h3>
          <p
            className="self-stretch font-geist text-[14px] md:text-[16px] font-medium leading-[1.4] tracking-[-0.32px] text-white opacity-[0.44]"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            Turns event data into clear insights, tells you what worked and what
            to do next
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
