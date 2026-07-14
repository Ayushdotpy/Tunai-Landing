import React from "react";
import { GlassModal } from "@/components/ui/GlassModal";

interface ContactSalesDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSalesDialog({ isOpen, onClose }: ContactSalesDialogProps) {
  return (
    <GlassModal
      isOpen={isOpen}
      onClose={onClose}
      width={420}
      padding={32}
      gap={24}
      ariaLabel="Contact Sales"
    >
      <div className="flex flex-col w-full text-white">
        <h2 className="font-geist text-[24px] font-bold tracking-[-0.48px] mb-2">
          Contact Sales
        </h2>
        <p className="font-geist text-[14px] text-white/60 mb-6 leading-relaxed">
          Tell us a little about your organization and our team will get back to you shortly with a tailored migration plan.
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-white/80">Full Name</label>
            <input 
              type="text" 
              required
              placeholder="John Doe"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-white/80">Work Email</label>
            <input 
              type="email" 
              required
              placeholder="john@organization.com"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-white/80">Event Volume</label>
            <select 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-white/30 transition-colors appearance-none"
              defaultValue=""
              required
            >
              <option value="" disabled className="bg-zinc-900 text-white/40">Select estimated attendees per month</option>
              <option value="1" className="bg-zinc-900">Less than 500</option>
              <option value="2" className="bg-zinc-900">500 - 5,000</option>
              <option value="3" className="bg-zinc-900">5,000 - 20,000</option>
              <option value="4" className="bg-zinc-900">20,000+</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full mt-4 bg-white text-black font-semibold text-[15px] py-3.5 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Request
          </button>
        </form>
      </div>
    </GlassModal>
  );
}
