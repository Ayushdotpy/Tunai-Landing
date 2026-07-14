interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left outline-none"
      >
        <span
          className={`font-geist text-[16px] md:text-[20px] font-medium leading-[2] tracking-[-0.32px] md:tracking-[-0.4px] transition-colors duration-200 ${
            isOpen
              ? "text-[rgba(255,255,255,0.84)]"
              : "text-[rgba(255,255,255,0.44)] hover:text-white/80"
          }`}
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-white" : "text-white/60"
          }`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className="pb-6 font-geist text-[14px] md:text-[16px] font-medium leading-[2] tracking-[-0.28px] md:tracking-[-0.32px] text-[rgba(255,255,255,0.44)] w-full"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
