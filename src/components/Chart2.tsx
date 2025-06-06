import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";
import Copy from "./Copy1";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Chart = () => {
  //@ts-ignore
  const containerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    // Refresh ScrollTrigger to sync with Lenis
    ScrollTrigger.refresh();

    const counters = [
      {
        selector: ".counter1",
        chartSelector: ".chart1",
        value: 600,
        maxHeight: isMobile ? 200 : 300, // Reduced height for mobile
      },
      {
        selector: ".counter2",
        chartSelector: ".chart2",
        value: 28,
        maxHeight: isMobile ? 250 : 500, // Reduced height for mobile
      },
      {
        selector: ".counter3",
        chartSelector: ".chart3",
        value: 460,
        maxHeight: isMobile ? 220 : 400, // Reduced height for mobile
      },
    ];

    // Set initial heights - different for mobile and desktop
    const initialHeight = isMobile ? "80px" : "120px";
    counters.forEach(({ chartSelector }) => {
      gsap.set(chartSelector, {
        height: initialHeight,
        // Prevent width changes and stabilize layout
        overflow: "hidden",
        willChange: "height", // Optimize for height changes only
        backfaceVisibility: "hidden", // Prevent flickering
        perspective: 1000, // Enable 3D acceleration
      });
    });

    // Store our specific ScrollTriggers for cleanup
    //@ts-ignore
    const chartScrollTriggers = [];

    counters.forEach(({ selector, chartSelector, value, maxHeight }) => {
      // Create a timeline for synchronized animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".chart-container",
          // Different scroll behavior for mobile vs desktop
          start: isMobile ? "top 80%" : "30% 80%",
          end: isMobile ? "bottom 20%" : "top+=55% 60%",
          scrub: isMobile ? 0.8 : 1, // Gentler scrub on mobile
          invalidateOnRefresh: true,
          refreshPriority: 0,
          // Prevent jumps by using onUpdate
          onUpdate: (self) => {
            // Ensure smooth progression without jumps
            const progress = self.progress;
            if (progress >= 0.98) {
              // Lock to final state to prevent jumps
              gsap.set(chartSelector, { height: `${maxHeight}px` });
              gsap.set(selector, { innerText: value });
            }
          },
          // Use pin spacer to prevent layout shifts
          ...(isMobile && {
            anticipatePin: 1,
            refreshPriority: 1,
          }),
          // markers: true,
        },
      });

      // Store the ScrollTrigger instance
      chartScrollTriggers.push(tl.scrollTrigger);

      // Animate counter number with easing that matches height
      tl.to(
        selector,
        {
          innerText: value,
          duration: 1,
          snap: { innerText: 1 },
          ease: "power2.out",
        },
        0,
      ); // Start at time 0

      // Animate bar height growth from bottom
      tl.to(
        chartSelector,
        {
          height: `${maxHeight}px`,
          duration: 1,
          ease: "power2.out",
          // Explicitly prevent any other property changes
          transformOrigin: "bottom",
          force3D: true, // Use GPU acceleration for smoother animation
        },
        0,
      ); // Start at time 0 (same time as counter)
    });

    return () => {
      // Only kill our specific ScrollTriggers
      //@ts-ignore
      chartScrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
    };
  }, [isMobile]); // Re-run when mobile state changes

  return (
    <section
    // @ts-ignore
      ref={containerRef}
      className={`chart-container font-NHD relative flex w-full flex-col overflow-hidden bg-black px-4 py-10 text-white md:px-10 ${
        isMobile ? "min-h-[80vh] pb-10" : "min-h-screen pb-20"
      }`}
    >
      <div className="w-full md:flex">
        <div className="left md:w-3/4">
          <Copy>
            <h2 className="md:w-3/4">
              Over 18 years grinding alongside founders with a chip.
            </h2>
          </Copy>
        </div>
        <div className="right md:w-1/2">
          <Copy>
            <p className="mt-14 text-xl text-balance md:w-3/4">
              MIMCO est un groupe d'investissement spécialisé dans l'immobilier
              value add paneuropéen. Le groupe structure et gère des véhicules
              d'investissement innovants au service d'une clientèle
              institutionnelle ainsi que de family offices et banques privées.
            </p>
          </Copy>
        </div>
      </div>

      {/* Chart */}
      <div
        className={`charts mt-10 flex w-full flex-1 items-end text-white ${
          isMobile ? "gap-2" : "gap-4 md:gap-10"
        }`}
      >
        <div
          className="chart1 flex w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-2 md:p-4"
          style={{
            // Prevent layout shifts and jumps
            boxSizing: "border-box",
            flexShrink: 0,
            overflow: "hidden",
            willChange: "height",
            transform: "translateZ(0)", // Force GPU layer
            ...(isMobile && { maxWidth: "calc(33.333% - 4px)" }),
          }}
        >
          <p className="mt-2 text-sm md:mt-4 md:text-base">Metals recovery</p>
          <h4 className="text-2xl tabular-nums md:text-4xl lg:text-9xl">
            <span className="counter1">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
        <div
          className="chart2 flex w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-2 md:p-4"
          style={{
            boxSizing: "border-box",
            flexShrink: 0,
            overflow: "hidden",
            willChange: "height",
            transform: "translateZ(0)", // Force GPU layer
            ...(isMobile && { maxWidth: "calc(33.333% - 4px)" }),
          }}
        >
          <p className="mt-2 text-sm md:mt-4 md:text-base">Metals recovery</p>
          <h4 className="text-2xl tabular-nums md:text-4xl lg:text-9xl">
            <span className="counter2">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
        <div
          className="chart3 flex w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-2 md:p-4"
          style={{
            boxSizing: "border-box",
            flexShrink: 0,
            overflow: "hidden",
            willChange: "height",
            transform: "translateZ(0)", // Force GPU layer
            ...(isMobile && { maxWidth: "calc(33.333% - 4px)" }),
          }}
        >
          <p className="mt-2 text-sm md:mt-4 md:text-base">Metals recovery</p>
          <h4 className="text-2xl tabular-nums md:text-4xl lg:text-9xl">
            <span className="counter3">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Chart;
