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
    // Refresh ScrollTrigger to sync with Lenis
    ScrollTrigger.refresh();

    const counters = [
      {
        selector: ".counter1",
        chartSelector: ".chart1",
        value: 600,
        maxHeight: 300,
      },
      {
        selector: ".counter2",
        chartSelector: ".chart2",
        value: 28,
        maxHeight: 500,
      },
      {
        selector: ".counter3",
        chartSelector: ".chart3",
        value: 460,
        maxHeight: 400,
      },
    ];

    // Set initial heights to minimum (just enough for content)
    counters.forEach(({ chartSelector }) => {
      gsap.set(chartSelector, { height: "120px" }); // Minimum height for text content
    });

    // Store our specific ScrollTriggers for cleanup
    //@ts-ignore
    const chartScrollTriggers = [];

    counters.forEach(({ selector, chartSelector, value, maxHeight }) => {
      // Create a timeline for synchronized animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chartSelector,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: 0,
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
          duration: 2,
          snap: { innerText: 1 },
        },
        0,
      ); // Start at time 0

      // Animate bar height growth from bottom
      tl.to(
        chartSelector,
        {
          height: `${maxHeight}px`,
          duration: 2,
          ease: "power2.out",
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
  }, []);

  return (
    <section className="font-NHD relative flex min-h-screen w-full flex-col overflow-hidden bg-black px-4 py-20 text-white md:px-10">
      <div className="w-full md:flex">
        <div className="left w-1/2">
          <Copy>
            <h2 className="w-3/4">
              Over 18 years grinding alongside founders with a chip.
            </h2>
          </Copy>
        </div>
        <div className="right w-1/2">
          <Copy>
            <p className="text-xl text-balance">
              MIMCO est un groupe d'investissement spécialisé dans l'immobilier
              value add paneuropéen. Le groupe structure et gère des véhicules
              d'investissement innovants au service d'une clientèle
              institutionnelle ainsi que de family offices et banques privées.
            </p>
          </Copy>
        </div>
      </div>

      {/* Chart */}
      <div className="charts mt-10 flex w-full flex-1 items-end gap-10">
        <div className="chart1 flex w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-4">
          <p className="mt-3 text-base text-white md:mt-4">Metals recovery</p>
          <h4 className="text-5xl text-white tabular-nums md:text-9xl">
            <span className="counter1">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
        <div className="chart2 flex w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-4">
          <p className="mt-3 text-base text-white md:mt-4">Metals recovery</p>
          <h4 className="text-5xl text-white tabular-nums md:text-9xl">
            <span className="counter2">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
        <div className="chart3 flex w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-4">
          <p className="mt-3 text-base text-white md:mt-4">Metals recovery</p>
          <h4 className="text-5xl text-white tabular-nums md:text-9xl">
            <span className="counter3">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Chart;
