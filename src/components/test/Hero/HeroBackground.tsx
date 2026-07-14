import React from "react";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      <div className="relative h-[658px] w-[1350px] shrink-0 scale-[0.5] md:scale-[0.75] lg:scale-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="1350" height="658" viewBox="0 0 1350 658" fill="none" className="absolute top-0 left-0">
          <g filter="url(#filter0_n_129_886)">
            <path opacity="0.02" d="M679.784 159C784.675 159 869.784 248.052 869.784 358C869.784 467.949 784.675 557 679.784 557C574.893 557 489.784 467.949 489.784 358C489.784 248.052 574.893 159 679.784 159Z" stroke="white" strokeWidth="2"/>
            <path opacity="0.02" d="M679.784 79.0002C826.095 79.0002 944.784 203.42 944.784 357C944.784 510.581 826.095 635 679.784 635C533.473 635 414.784 510.581 414.784 357C414.784 203.42 533.473 79.0002 679.784 79.0002Z" stroke="white" strokeWidth="2"/>
            <path opacity="0.02" d="M679.784 -33.9998C885.743 -33.9998 1052.78 141.012 1052.78 357C1052.78 572.988 885.743 748 679.784 748C473.826 748 306.784 572.988 306.784 357C306.784 141.012 473.826 -33.9998 679.784 -33.9998Z" stroke="white" strokeWidth="2"/>
            <path opacity="0.02" d="M679.784 -136C939.868 -136 1150.78 84.6804 1150.78 357C1150.78 629.32 939.868 850 679.784 850C419.701 850 208.784 629.32 208.784 357C208.784 84.6804 419.701 -136 679.784 -136Z" stroke="white" strokeWidth="2"/>
            <path opacity="0.02" d="M674.784 -218C977.945 -218 1223.78 39.3925 1223.78 357C1223.78 674.608 977.945 932 674.784 932C371.623 932 125.784 674.608 125.784 357C125.784 39.3925 371.623 -218 674.784 -218Z" stroke="white" strokeWidth="2"/>
            <g opacity="0.4" filter="url(#filter1_f_129_886)">
              <path d="M193.784 169H1155.78L795.248 243.034L689.779 692.679L583.369 243.034L193.784 169Z" fill="url(#paint0_linear_129_886)"/>
              <path d="M193.784 169H1155.78L795.248 243.034L689.779 692.679L583.369 243.034L193.784 169Z" fill="url(#paint1_linear_129_886)"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_n_129_886" x="66.7844" y="-219" width="1216" height="1243" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="2595"/>
              <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
              </feComponentTransfer>
              <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped"/>
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood"/>
              <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1"/>
              <feMerge result="effect1_noise_129_886">
                <feMergeNode in="shape"/>
                <feMergeNode in="color1"/>
              </feMerge>
            </filter>
            <filter id="filter1_f_129_886" x="1.52588e-05" y="-24.7839" width="1349.57" height="911.247" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="96.8921" result="effect1_foregroundBlur_129_886"/>
            </filter>
            <linearGradient id="paint0_linear_129_886" x1="193.784" y1="370.859" x2="1155.78" y2="370.859" gradientUnits="userSpaceOnUse">
              <stop offset="0.278846" stopColor="#FFE348"/>
              <stop offset="0.501518" stopColor="#FFE348" stopOpacity="0.32"/>
              <stop offset="0.639423" stopColor="#FFE348"/>
            </linearGradient>
            <linearGradient id="paint1_linear_129_886" x1="193.784" y1="370.859" x2="1155.78" y2="370.859" gradientUnits="userSpaceOnUse">
              <stop offset="0.322115" stopColor="#C88C3E"/>
              <stop offset="0.501518" stopColor="#DC91D9"/>
              <stop offset="0.639423" stopColor="#80D1FD"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
