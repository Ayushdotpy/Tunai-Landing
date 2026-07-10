"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqs = [
  {
    question: "Why Choose tunyt Over Eventbrite or Luma?",
    answer:
      "tunyt provides a modern, seamless experience tailored for your events, focusing on better conversion rates and a cleaner aesthetic without hidden fees.",
  },
  {
    question: "Can I Migrate My Attendee List From Other Platforms?",
    answer:
      "Yes. You can import your attendee list from Other Platforms via .CSV file, so you don't have to start from scratch.",
  },
  {
    question: "Do Attendees Need to Create an Account?",
    answer:
      "No, attendees can checkout as guests for a frictionless registration experience, though creating an account offers additional benefits like saving tickets.",
  },
  {
    question: "How will tunyt help me before my event is live?",
    answer:
      "We automate the setup process, generate customized event pages, and help you build schedules and promotional materials in minutes.",
  },
  {
    question: "How will tunyt help me run my event?",
    answer:
      "tunyt monitors live registrations, tracks check-ins, and gives you real-time analytics so nothing slips through the cracks.",
  },
  {
    question: "What happens after my event ends?",
    answer:
      "You receive detailed insights and actionable data on what worked, attendee engagement, and recommendations for your next event.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full max-w-[590px] flex-col items-start">
      <div className="flex w-full flex-col border-t border-white/[0.08]">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
