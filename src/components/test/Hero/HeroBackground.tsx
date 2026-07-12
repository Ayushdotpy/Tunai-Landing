import React from "react";
import Image from "next/image";

export default function HeroBackground() {
  // We'll create 5 concentric ellipses.
  // We can adjust these sizes based on the Figma exact dimensions later.
  const ellipses = [
    {
      width: "382px",
      height: "400px",
      border: "2px solid #FFF",
      opacity: 0.02,
      borderRadius: "400px",
    },
    {
      width: "532px",
      height: "558px",
      border: "2px solid #FFF",
      opacity: 0.02,
      borderRadius: "558px",
    },
    {
      width: "748px",
      height: "784px",
      border: "2px solid #FFF",
      opacity: 0.02,
      borderRadius: "784px",
    },
    {
      width: "944px",
      height: "988px",
      border: "2px solid #FFF",
      opacity: 0.02,
      borderRadius: "988px",
    },
    {
      width: "1100px",
      height: "1152px",
      border: "2px solid #FFF",
      opacity: 0.02,
      borderRadius: "1152px",
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      {/* Container to match Figma's exact positioning context if needed, but for now we'll just absolute position them relative to inset-0 */}
      <div className="relative h-[1024px] w-[1216px] shrink-0 scale-[0.5] md:scale-[0.75] lg:scale-100">
        {/* Concentric Ellipses */}
        {ellipses.map((ellipse, index) => (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: ellipse.width,
              height: ellipse.height,
              border: ellipse.border || "1px solid rgba(255, 255, 255, 0.1)",
              opacity: ellipse.opacity,
              borderRadius: ellipse.borderRadius || "50%",
            }}
          />
        ))}

        {/* Vector Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/test/icons/BGvector.svg"
            alt="Background Vector"
            width={1350}
            height={658}
            className="pointer-events-none"
            priority
          />
        </div>
      </div>
    </div>
  );
}
