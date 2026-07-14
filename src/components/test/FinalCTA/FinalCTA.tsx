import Mascots from "./Mascots";
import CTAContent from "./CTAContent";

export default function FinalCTA() {
  return (
    <section className="relative z-10 flex w-full flex-col items-center bg-transparent px-4 pt-0 md:px-[68px] pb-12 overflow-hidden rounded-b-[40px]">
      <div className="relative z-10 w-full">
        <Mascots />
      </div>

      <div className="relative z-20 w-full">
        <CTAContent />
      </div>

      <div className="relative z-20 mt-32 w-full max-w-[1200px] border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Socials */}
        <div className="flex w-full md:w-1/3 items-center justify-center md:justify-start gap-6 text-white/60">
          <a href="mailto:contact@tunyt.com" aria-label="Email" className="hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="http://instagram.com/hostontunyt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://x.com/hostontunyt" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/hostontunyt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>

        {/* Logo */}
        <div className="flex w-full md:w-1/3 items-center justify-center opacity-100">
          <img src="/test/logo.svg" alt="Tunai Logo" height={28} className="h-[28px] w-auto" />
        </div>

        {/* Links */}
        <div className="flex w-full md:w-1/3 items-center justify-center md:justify-end gap-6 text-[14px] text-white/60 font-medium">
          <a href="#" className="hover:text-white transition-colors">Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="/discover" className="text-white font-semibold hover:opacity-100 transition-opacity">Discover Events</a>
        </div>
      </div>
    </section>
  );
}
