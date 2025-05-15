// components/CautionTicker.tsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // ✅ import the hook

gsap.registerPlugin(useGSAP); // ✅ register the plugin

const CautionTicker: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!tickerRef.current || !contentRef.current) return;

      const contentWidth = contentRef.current.offsetWidth;

      gsap.to(tickerRef.current, {
        x: -contentWidth,
        duration: 100,
        ease: "linear",
        repeat: -1,
      });
    },
    { dependencies: [] },
  ); // 👈 only runs once

  const cautionText = "- CAUTION  ".repeat(50);

  return (
    <div className="w-full rotate-0 overflow-hidden border-black bg-orange-400 py-2">
      <div className="flex whitespace-nowrap" ref={tickerRef}>
        <div
          className="text-3xl font-bold tracking-wider text-white"
          ref={contentRef}
        >
          {cautionText}
        </div>
        <div className="ml-4 text-3xl font-bold tracking-wider text-white">
          {cautionText}
        </div>
      </div>
    </div>
  );
};

export default CautionTicker;
