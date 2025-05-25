import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useLayoutEffect, useId } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Counter = () => {
  //@ts-ignore
  const containerRef = useRef();
  const componentId = useId().replace(/:/g, "");
  const myTriggers = useRef([]);

  // Use useLayoutEffect to ensure proper initialization order
  useLayoutEffect(() => {
    // Refresh ScrollTrigger to ensure it recalculates positions
    ScrollTrigger.refresh(true);

    // Force recalculation after a small delay
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    const counterSection = containerRef.current;
    if (!counterSection) return;

    // Force ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();

    // Use one ScrollTrigger for the entire section
    const masterTrigger = ScrollTrigger.create({
      //@ts-ignore

      trigger: counterSection,
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
      // markers: true,
      onRefresh: (self) => {
        // Update positions when ScrollTrigger refreshes
        self.refresh();
      },
    });
    //@ts-ignore

    myTriggers.current.push(masterTrigger);

    // Set up counter animations
    const counters = [
      { selector: `.counter1-${componentId}`, value: 600 },
      { selector: `.counter2-${componentId}`, value: 28 },
      { selector: `.counter3-${componentId}`, value: 460 },
    ];

    // Create animations tied to the master trigger's progress
    counters.forEach(({ selector, value }) => {
      const element = document.querySelector(selector);
      if (!element) return;

      const tween = gsap.fromTo(
        element,
        { innerText: 0 },
        {
          innerText: value,
          duration: 1,
          snap: { innerText: 1 },
          paused: true, // Start paused
        },
      );

      // Connect the animation to ScrollTrigger progress
      //@ts-ignore

      masterTrigger.animation = tween;
    });

    // Only clean up our specific triggers
    return () => {
      myTriggers.current.forEach((trigger) => {
        //@ts-ignore

        if (trigger && trigger.kill) {
          //@ts-ignore

          trigger.kill();
        }
      });
      myTriggers.current = [];
    };
  }, [componentId]);

  return (
    <>
      {/* Numbers Section */}
      <section
        //@ts-ignore

        ref={containerRef}
        className="num-container font-NHD flex w-full items-center justify-center px-4 py-12 md:px-10 md:py-12"
      >
        <div className="flex w-full flex-col gap-6 md:flex-row md:gap-10">
          {/* Card 1 */}
          <div className="num flex-1 rounded-md border border-black/10 p-4 md:p-6">
            <h4 className="text-5xl text-black tabular-nums md:text-7xl">
              <span className={`counter1-${componentId}`}>0</span>
              <span className="ml-1">%</span>
            </h4>
            <p className="mt-3 text-base text-orange-500 md:mt-4">
              Metals recovery
            </p>
            <p className="mt-2 w-full text-sm leading-tight text-black md:w-1/2 md:leading-5">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="num flex-1 rounded-md border border-black/10 p-4 md:p-6">
            <h4
              className={`counter2-${componentId} text-5xl text-black md:text-7xl`}
            >
              0
            </h4>
            <p className="mt-3 text-base text-orange-500 md:mt-4">
              Years of experience
            </p>
            <p className="mt-2 w-full text-sm leading-tight text-black sm:w-3/4 md:w-1/2 md:leading-5">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="num flex-1 rounded-md border border-black/10 p-4 md:p-6">
            <h4 className="text-5xl text-black tabular-nums md:text-7xl">
              <span className={`counter3-${componentId}`}>0</span>
              <span className="ml-1">+</span>
            </h4>
            <p className="mt-3 text-base text-orange-500 md:mt-4">Projects</p>
            <p className="mt-2 w-full text-sm leading-tight text-black md:w-1/2 md:leading-5">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
