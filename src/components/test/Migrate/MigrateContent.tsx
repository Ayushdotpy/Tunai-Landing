"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactSalesDialog from "./ContactSalesDialog";

export default function MigrateContent() {
  const [isSalesDialogOpen, setIsSalesDialogOpen] = useState(false);

  return (
    <div 
      className="relative z-20 mx-auto flex flex-col items-center text-center gap-[38px] px-4 md:px-0 w-full max-w-[895px]"
    >
      <div className="flex flex-col items-center gap-2 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mosvita text-[32px] md:text-[56px] font-semibold leading-[1.2] md:leading-[1.4] tracking-[-1.12px] text-white w-full whitespace-normal md:whitespace-nowrap"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          Migrate to tunyt in less than <span className="text-[rgba(255,255,255,0.32)]">24 hours</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-geist text-[16px] md:text-[20px] font-normal leading-[1.5] md:leading-[2] tracking-[-0.4px] text-[rgba(255,255,255,0.64)] text-center space-y-1 md:space-y-2 w-full"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          <p>We'll handle the migration for you.</p>
          <p>Move your events, attendees, and workflows to tunyt in less than 24 hours.</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center"
      >
        <button 
          className="flex h-[52px] w-full items-center justify-center gap-[10.5px] overflow-hidden rounded-[16px] text-[15px] font-semibold text-black transition-transform hover:scale-[1.02] active:scale-95"
          style={{ background: "linear-gradient(90deg, #D6D6D6 0%, #FFF 50%, #D6D6D6 100%)" }}
          onClick={() => setIsSalesDialogOpen(true)}
        >
          <Image 
            src="/test/icons/button-vector.svg" 
            alt="" 
            width={64} 
            height={52} 
            className="h-full w-auto object-cover" 
          />
          
          <span className="flex items-center gap-[10.5px]">
            Contact Sales
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.1131 4C11.5153 5.03704 12.7748 6.24852 13.8603 7.60379C13.9534 7.72005 14 7.86002 14 8M10.1131 12C11.5153 10.963 12.7748 9.75148 13.8603 8.39621C13.9534 8.27995 14 8.13998 14 8M14 8H2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>

          <Image 
            src="/test/icons/button-vector.svg" 
            alt="" 
            width={64} 
            height={52} 
            className="h-full w-auto scale-x-[-1] object-cover" 
          />
        </button>
        
        <p 
          className="mt-2 text-center font-geist text-[14px] font-normal leading-[2] tracking-[-0.28px] text-white/[0.64]"
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          responds in less than 24 hours
        </p>
      </motion.div>

      <ContactSalesDialog 
        isOpen={isSalesDialogOpen} 
        onClose={() => setIsSalesDialogOpen(false)} 
      />
    </div>
  );
}
