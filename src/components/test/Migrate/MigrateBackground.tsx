import React from "react";

export default function MigrateBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute top-[-332px] left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center"
        style={{ width: "1824px", height: "1536px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="1865"
          viewBox="0 0 1440 1865"
          fill="none"
        >
          <g filter="url(#filter0_n_129_1843)">
            <path
              opacity="0.02"
              d="M727.5 567C884.837 567 1012.5 700.577 1012.5 865.5C1012.5 1030.42 884.837 1164 727.5 1164C570.163 1164 442.5 1030.42 442.5 865.5C442.5 700.577 570.163 567 727.5 567Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              opacity="0.02"
              d="M727.5 447C946.967 447 1125 633.629 1125 864C1125 1094.37 946.967 1281 727.5 1281C508.033 1281 330 1094.37 330 864C330 633.629 508.033 447 727.5 447Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              opacity="0.02"
              d="M727.5 277.5C1036.44 277.5 1287 540.018 1287 864C1287 1187.98 1036.44 1450.5 727.5 1450.5C418.562 1450.5 168 1187.98 168 864C168 540.018 418.562 277.5 727.5 277.5Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              opacity="0.02"
              d="M727.5 124.5C1117.63 124.5 1434 455.52 1434 864C1434 1272.48 1117.63 1603.5 727.5 1603.5C337.374 1603.5 21 1272.48 21 864C21 455.52 337.374 124.5 727.5 124.5Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              opacity="0.02"
              d="M720 1.5C1174.74 1.5 1543.5 387.588 1543.5 864C1543.5 1340.41 1174.74 1726.5 720 1726.5C265.258 1726.5 -103.5 1340.41 -103.5 864C-103.5 387.588 265.258 1.5 720 1.5Z"
              stroke="white"
              strokeWidth="3"
            />
            <g opacity="0.4" filter="url(#filter1_f_129_1843)">
              <path
                d="M-1.5 582H1441.5L900.695 693.051L742.493 1367.52L582.877 693.051L-1.5 582Z"
                fill="url(#paint0_linear_129_1843)"
              />
              <path
                d="M-1.5 582H1441.5L900.695 693.051L742.493 1367.52L582.877 693.051L-1.5 582Z"
                fill="url(#paint1_linear_129_1843)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_n_129_1843"
              x="-192"
              y="0"
              width="1824"
              height="1864.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feTurbulence
                type="fractalNoise"
                baseFrequency="1.3333333730697632 1.3333333730697632"
                stitchTiles="stitch"
                numOctaves="3"
                result="noise"
                seed="2595"
              />
              <feColorMatrix
                in="noise"
                type="luminanceToAlpha"
                result="alphaNoise"
              />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA
                  type="discrete"
                  tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                />
              </feComponentTransfer>
              <feComposite
                operator="in"
                in2="shape"
                in="coloredNoise1"
                result="noise1Clipped"
              />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite
                operator="in"
                in2="noise1Clipped"
                in="color1Flood"
                result="color1"
              />
              <feMerge result="effect1_noise_129_1843">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <filter
              id="filter1_f_129_1843"
              x="-292.176"
              y="291.324"
              width="2024.35"
              height="1366.87"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="145.338"
                result="effect1_foregroundBlur_129_1843"
              />
            </filter>
            <linearGradient
              id="paint0_linear_129_1843"
              x1="-1.5"
              y1="884.788"
              x2="1441.5"
              y2="884.788"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.278846" stopColor="#FFE348" />
              <stop offset="0.501518" stopColor="#FFE348" stopOpacity="0.32" />
              <stop offset="0.639423" stopColor="#FFE348" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_129_1843"
              x1="-1.5"
              y1="884.788"
              x2="1441.5"
              y2="884.788"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.322115" stopColor="#C88C3E" />
              <stop offset="0.501518" stopColor="#DC91D9" />
              <stop offset="0.639423" stopColor="#80D1FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
