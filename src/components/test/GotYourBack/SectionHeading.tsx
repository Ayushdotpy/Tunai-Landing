"use client";

import { motion } from "framer-motion";

export default function SectionHeading() {
  return (
    <div className="relative z-20 mx-auto flex w-full max-w-[1280px] flex-col items-start justify-start px-4 md:px-6 text-left">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Glow effect */}
        <h2
          aria-hidden="true"
          className="absolute inset-0 z-0 text-left font-mosvita text-[42px] font-bold leading-[1.1] tracking-[-1.358px] text-white opacity-30 blur-[30px] md:text-[67.899px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          tunyt Got Your Back
        </h2>

        {/* Main Heading */}
        <h2
          className="relative z-10 text-left font-mosvita text-[42px] font-bold leading-[1.1] tracking-[-1.358px] text-white md:text-[67.899px]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #FFF 0%, #80D1FD 50%, #DC91D9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            tunyt
          </span>{" "}
          Got Your Back
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-4 max-w-[600px] text-left font-geist text-[16px] font-medium leading-[1.4] tracking-[-0.32px] opacity-[0.72] text-transparent bg-clip-text"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          backgroundImage:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.44) 86.56%, #80D1FD 90.7%, #DC91D9 99.99%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        tunyt's AI handles the details, helps you improve, and gets better with
        every event
      </motion.p>
    </div>
  );
}
