import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Copy from "./Copy1";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Chart = () => {
  //@ts-ignore
  const containerRef = useRef();

  useGSAP(() => {
    // Force ScrollTrigger refresh for Lenis compatibility
    ScrollTrigger.refresh();

    // Additional refresh after a short delay to ensure Lenis is ready
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const isMobile = window.innerWidth < 768;

    const counters = [
      {
        selector: ".counter1",
        chartSelector: ".chart1",
        value: 60,
        maxHeight: isMobile ? 100 : 300, // Shorter
      },
      {
        selector: ".counter2",
        chartSelector: ".chart2",
        value: 34,
        maxHeight: isMobile ? 180 : 500, // Tallest - much more noticeable difference
      },
      {
        selector: ".counter3",
        chartSelector: ".chart3",
        value: 98,
        maxHeight: isMobile ? 140 : 400, // Middle height
      },
    ];

    // Set initial heights - mobile first approach
    const initialHeight = isMobile ? "60px" : "120px";
    counters.forEach(({ chartSelector }) => {
      gsap.set(chartSelector, {
        height: initialHeight,
        overflow: "hidden",
        willChange: "height",
        backfaceVisibility: "hidden",
        perspective: 1000,
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
          // Mobile first scroll behavior - adjusted for Lenis
          start: isMobile ? "top 80%" : "30% 80%",
          end: isMobile ? "bottom 50%" : "top+=55% 60%",
          scrub: isMobile ? 1 : 1,
          invalidateOnRefresh: true,
          refreshPriority: -1, // Lower priority to work better with Lenis
          // Prevent jumps by using onUpdate
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= 0.98) {
              gsap.set(chartSelector, { height: `${maxHeight}px` });
              gsap.set(selector, { innerText: value });
            }
          },
          // Enable markers to debug positioning
          //   markers: true,
        },
      });

      // Store the ScrollTrigger instance
      chartScrollTriggers.push(tl.scrollTrigger);

      // Animate counter number
      tl.to(
        selector,
        {
          innerText: value,
          duration: 1,
          snap: { innerText: 1 },
          ease: "power2.out",
        },
        0,
      );

      // Animate bar height growth from bottom
      tl.to(
        chartSelector,
        {
          height: `${maxHeight}px`,
          duration: 1,
          ease: "power2.out",
          transformOrigin: "bottom",
          force3D: true,
        },
        0,
      );
    });

    return () => {
      // Only kill our specific ScrollTriggers
      //@ts-ignore
      chartScrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
    };
  }, []);

  return (
    <section
      // @ts-ignore
      ref={containerRef}
      className="chart-container font-NHD relative flex min-h-[70vh] w-full flex-col overflow-hidden bg-black px-4 py-10 pb-10 text-white md:min-h-screen md:px-10 md:pb-20"
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
            <p className="mt-14 text-xl text-balance md:mt-0 md:w-3/4">
              MIMCO est un groupe d'investissement spécialisé dans l'immobilier
              value add paneuropéen. Le groupe structure et gère des véhicules
              d'investissement innovants au service d'une clientèle
              institutionnelle ainsi que de family offices et banques privées.
            </p>
          </Copy>
        </div>
      </div>

      {/* Chart */}
      <div className="charts mt-6 flex w-full flex-1 items-end gap-4 text-white md:mt-10">
        {" "}
        <div
          className="chart1 flex-1 flex-col justify-end rounded-sm bg-orange-400 p-2 md:p-4"
          style={{
            boxSizing: "border-box",
            flexShrink: 0,
            overflow: "hidden",
            willChange: "height",
            transform: "translateZ(0)",
          }}
        >
          <p className="mt-2 text-xs md:mt-4 md:text-base">
            Completed projects
          </p>
          <h4 className="text-xl tabular-nums md:text-4xl lg:text-9xl">
            <span className="counter1">0</span>
            <span className="ml-1">+</span>
          </h4>
        </div>
        <div
          className="chart2 flex-1 flex-col justify-end rounded-sm bg-orange-400 p-2 md:p-4"
          style={{
            boxSizing: "border-box",
            flexShrink: 0,
            overflow: "hidden",
            willChange: "height",
            transform: "translateZ(0)",
          }}
        >
          <p className="mt-2 text-xs md:mt-4 md:text-base">
            Years of experience
          </p>
          <h4 className="text-xl tabular-nums md:text-4xl lg:text-9xl">
            <span className="counter2">0</span>
            <span className="ml-1">+</span>
          </h4>
        </div>
        <div
          className="chart3 flex-1 flex-col justify-end rounded-sm bg-orange-400 p-2 md:p-4"
          style={{
            boxSizing: "border-box",
            flexShrink: 0,
            overflow: "hidden",
            willChange: "height",
            transform: "translateZ(0)",
          }}
        >
          <p className="mt-2 text-xs md:mt-4 md:text-base">
            Clients satisfaction
          </p>
          <h4 className="text-xl tabular-nums md:text-4xl lg:text-9xl">
            <span className="counter3">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Chart;
