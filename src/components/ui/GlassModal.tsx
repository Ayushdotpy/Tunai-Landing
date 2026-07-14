"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  minHeight?: number;
  width?: string | number;
  padding?: number;
  gap?: number;
  alignItems?: "end" | "center";
}

export function GlassModal({
  isOpen,
  onClose,
  children,
  ariaLabel,
  ariaLabelledBy,
  minHeight,
  width = 306,
  padding = 0,
  gap = 0,
  alignItems = "center",
}: GlassModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    /* Overlay */
    <div
      className={`fixed inset-0 z-[9999] flex justify-center ${
        alignItems === "end" ? "items-end sm:items-center" : "items-center"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/[0.44] backdrop-blur-[13.5px]"
        onClick={onClose}
      />

      {/* Card */}
      <div
        className="relative z-10 flex flex-col overflow-hidden shrink-0"
        style={{
          width,
          maxWidth: "calc(100vw - 32px)",
          maxHeight: "92dvh",
          minHeight,
          padding,
          gap,
          backgroundColor: "rgba(0, 0, 0, 0.52)",
          backdropFilter: "blur(84px)",
          WebkitBackdropFilter: "blur(84px)",
          borderRadius: 24,
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
