import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Counter = () => {
  //@ts-ignore
  const containerRef = useRef();

  useGSAP(() => {
    const counters = [
      { selector: ".counter1", value: 600 },
      { selector: ".counter2", value: 28 },
      { selector: ".counter3", value: 460 },
    ];

    counters.forEach(({ selector, value }) => {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          // markers: true,
        },
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
              <span className="counter1">0</span>
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
            <h4 className="counter2 text-5xl text-black md:text-7xl">0</h4>
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
              <span className="counter3">0</span>
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
