export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.12),transparent_65%)]" />

      <svg
        viewBox="0 0 1350 658"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 h-[61vh] w-auto -translate-x-1/2 -translate-y-1/2 overflow-visible"
      >
        <g opacity="0.4" filter="url(#filter0_f_9_71)">
          <path
            d="M193.784 169H1155.78L795.248 243.034L689.779 692.679L583.369 243.034L193.784 169Z"
            fill="url(#paint0_linear_9_71)"
          />
          <path
            d="M193.784 169H1155.78L795.248 243.034L689.779 692.679L583.369 243.034L193.784 169Z"
            fill="url(#paint1_linear_9_71)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_9_71"
            x="0"
            y="-24.7839"
            width="1349.57"
            height="911.247"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="96.8921" result="effect1_foregroundBlur_9_71" />
          </filter>
          <linearGradient
            id="paint0_linear_9_71"
            x1="193.784"
            y1="370.859"
            x2="1155.78"
            y2="370.859"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.278846" stopColor="#FFE348" />
            <stop offset="0.501518" stopColor="#FFE348" stopOpacity="0.32" />
            <stop offset="0.639423" stopColor="#FFE348" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9_71"
            x1="193.784"
            y1="370.859"
            x2="1155.78"
            y2="370.859"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.322115" stopColor="#C88C3E" />
            <stop offset="0.501518" stopColor="#DC91D9" />
            <stop offset="0.639423" stopColor="#80D1FD" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-1/2 top-1/2 h-[1152px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[1152px] border-[2px] border-white/[0.02]" />

      <div className="absolute left-1/2 top-1/2 h-[988px] w-[944px] -translate-x-1/2 -translate-y-1/2 rounded-[988px] border-[2px] border-white/[0.02]" />

      <div className="absolute left-1/2 top-1/2 h-[784px] w-[748px] -translate-x-1/2 -translate-y-1/2 rounded-[784px] border-[2px] border-white/[0.02]" />

      <div className="absolute left-1/2 top-1/2 h-[558px] w-[532px] -translate-x-1/2 -translate-y-1/2 rounded-[558px] border-[2px] border-white/[0.02]" />

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[382px] -translate-x-1/2 -translate-y-1/2 rounded-[400px] border-[2px] border-white/[0.02]" />
    </>
  );
}
