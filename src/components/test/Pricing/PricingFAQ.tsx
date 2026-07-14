"use client";

import React, { useState } from "react";
import AccordionItem from "../FAQ/AccordionItem";

const pricingFaqs = [
  {
    question: "What about Free Events?",
    answer:
      "tunyt does not charge anything for Free events, You can access the whole tunyt's suite Free of Cost. Only Paid QR tickets are entitled to platform fee",
  },
  {
    question: "What does the Platform fee include?",
    answer:
      "The platform fee covers pricing processing, ticketing infrastructure, automated emails, customer support for ticket buyers, and access to all of tunyt's event management tools.",
  },
  {
    question: "Can I connect my own Razorpay / Stripe?",
    answer:
      "Yes, you can connect your own pricing gateway. The platform fee still applies, but funds will be routed directly to your connected account.",
  },
  {
    question: "Are there any setup or hidden fees?",
    answer:
      "No. We believe in transparent pricing. There are absolutely no setup fees, monthly subscriptions, or hidden charges. You only pay the flat platform fee on paid tickets.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 1st item open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full flex-col items-center mt-20">
      <div className="flex w-full max-w-[590px] flex-col">
        {pricingFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
      
      <p className="mt-12 text-center font-geist text-[16px] font-medium leading-[2] tracking-[-0.32px] text-white/[0.44] px-4" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
        Simple, transparent pricing. No surprises. Just choose who pays the platform fee.
      </p>
    </div>
  );
}
