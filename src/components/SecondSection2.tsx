import Button from "../components/Buttons";
import FlyingPaths from "../components/MapAnim2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Copy from "./Copy1";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const svgLineRef = useRef(null);
  const svgLineRef1 = useRef(null);
  const containerRef = useRef(null);
  const [domReady, setDomReady] = useState(false);

  // Wait for DOM to be fully ready
  useEffect(() => {
    // Short timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setDomReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      // Make sure the DOM elements are available
      if (
        !svgLineRef.current ||
        !sectionRef.current ||
        !svgLineRef1.current ||
        !sectionRef1.current
      )
        return;

      // Create separate instances for counter animations
      //@ts-ignore

      const countersContexts = [];

      const counters = [
        { selector: ".counter1", value: 600 },
        { selector: ".counter2", value: 28 },
        { selector: ".counter3", value: 460 },
      ];

      counters.forEach(({ selector, value }) => {
        const element = document.querySelector(selector);
        if (!element) return;

        const ctx = gsap.context(() => {
          gsap.to(selector, {
            scrollTrigger: {
              trigger: selector,
              start: "top 80%",
              end: "bottom 80%",
              scrub: 1,
              once: false,
            },
            innerText: value,
            duration: 2,
            snap: { innerText: 1 },
          });
        });

        countersContexts.push(ctx);
      });

      // Create the animation contexts for SVG lines
      const lineCtx1 = gsap.context(() => {
        gsap.fromTo(
          svgLineRef.current,
          {
            scaleY: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
              once: false,
            },
          },
        );
      });

      const lineCtx2 = gsap.context(() => {
        gsap.fromTo(
          svgLineRef1.current,
          {
            scaleY: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef1.current,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
              once: false,
            },
          },
        );
      });

      // Return cleanup function
      return () => {
        // Clean up all the contexts
        //@ts-ignore
        countersContexts.forEach((ctx) => ctx.revert());
        lineCtx1.revert();
        lineCtx2.revert();
      };
    },
    {
      scope: containerRef,
      dependencies: [domReady], // Only run when the DOM is ready
    },
  );

  return (
    <div ref={containerRef}>
      {/* Top Section */}
      <section className="relative flex w-full overflow-hidden px-10 py-24">
        <div className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-4 text-center text-5xl text-black">
          <Copy>
            <h2>
              A construction <span className="text-orange-500">company,</span>{" "}
              <br /> offering integrated{" "}
              <span className="text-orange-500">solution </span>
              and related services.
            </h2>
          </Copy>
        </div>
      </section>

      {/* Section with Text and Image Split */}
      <section
        ref={sectionRef}
        className="font-NHD relative flex w-full overflow-hidden px-10 py-20"
      >
        {/* Left Section (Text) */}
        <div className="left flex w-full flex-col gap-4 p-10 text-black">
          <h6>WHO WE ARE</h6>
          <p className="mt-4 w-3/4 text-xl">
            COAN West Africa Limited is a construction company offering
            integrated solutions and related services. COAN is known for
            executing complex engineering solutions that require the highest
            level of technical expertise, be it Civil, Electrical, and
            Mechanical Engineering Services.
          </p>
          <Button className="mt-10" variant="primary">
            Read More
          </Button>
        </div>

        {/* Middle Divider */}
        <div className="relative w-[4px] bg-black/10">
          <svg
            className="scrolling-border absolute top-0 left-0 h-full w-full text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              ref={svgLineRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Right Section (Flying Paths Image or Animation) */}
        <div className="right relative flex h-[500px] w-full items-center justify-center p-10">
          <FlyingPaths />
        </div>
      </section>

      {/* Numbers Section */}
      <section className="num-container font-NHD flex w-full items-center justify-center px-10 py-20">
        <div className="flex w-full gap-10">
          {/* Card 1 */}
          <div className="num flex-1 rounded-md border border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter1">0</span>
              <span className="ml-1">%</span>
            </h3>
            <p className="mt-4 text-orange-500">Metals recovery</p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="num flex-1 rounded-md border border-black/10 p-6">
            <h3 className="counter2 text-6xl text-black">0</h3>
            <p className="mt-4 text-orange-500">Years of experience</p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="num flex-1 rounded-md border border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter3">0</span>
              <span className="ml-1">+</span>
            </h3>
            <p className="mt-4 text-orange-500">Projects</p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Final Split Section with Image & Text */}
      <section
        ref={sectionRef1}
        className="font-NHD relative flex w-full overflow-hidden px-10 py-20"
      >
        {/* Left Section (Image) */}
        <div className="right relative flex h-[500px] w-full items-center justify-center px-10">
          <img
            src="/chart.png"
            alt="Chart"
            className="max-h-full object-contain"
          />
        </div>

        {/* Middle Divider */}
        <div className="relative w-[4px] bg-black/10">
          <svg
            className="scrolling-border absolute top-0 left-0 h-full w-full text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              ref={svgLineRef1}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Right Section (Text) */}
        <div className="left flex w-full flex-col gap-4 p-10 text-black">
          <h6>WHO WE ARE</h6>
          <p className="mt-4 w-3/4 text-xl">
            COAN West Africa Limited is a construction company offering
            integrated solutions and related services. COAN is known for
            executing complex engineering solutions that require the highest
            level of technical expertise, be it Civil, Electrical, and
            Mechanical Engineering Services.
          </p>
          <p className="w-3/4 text-xl">
            COAN West Africa Limited is a construction company offering
            integrated solutions and related services. COAN is known for
            executing complex engineering solutions that require the highest
            level of technical expertise, be it Civil, Electrical, and
            Mechanical Engineering Services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
