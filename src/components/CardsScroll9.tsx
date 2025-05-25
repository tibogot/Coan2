import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Mock Copy component
//@ts-ignore
function Copy({ children }) {
  return <div>{children}</div>;
}

function Card1() {
  return (
    <div className="card relative w-full" id="card-1">
      <div className="card-inner relative flex min-h-[400px] w-full bg-gray-200 p-4 md:p-10">
        <div className="left flex w-1/2 flex-col justify-between">
          <h2>Planning</h2>
          <p className="w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
        </div>
        <div className="right mt-2 w-1/2">
          <p className="w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
          <p className="mt-16 w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card relative w-full" id="card-2">
      <div className="card-inner relative flex min-h-[400px] w-full bg-black p-4 md:p-10">
        <div className="left flex w-1/2 flex-col justify-between text-white">
          <h2>Construction</h2>
          <p className="w-1/2">
            Innovative execution methods to deliver safe, high quality project
            is the foundation of our business and success.
          </p>
        </div>
        <div className="right mt-2 w-1/2">
          <p className="w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
          <p className="mt-16 w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

function Card3() {
  return (
    <div className="card relative w-full" id="card-3">
      <div className="card-inner relative flex min-h-[400px] w-full bg-orange-400 p-4 md:p-10">
        <div className="left flex w-1/2 flex-col justify-between text-white">
          <h2>Operation & Maintenance</h2>
          <p className="w-1/2">
            Innovative execution methods to deliver safe, high quality project
            is the foundation of our business and success.
          </p>
        </div>
        <div className="right mt-2 w-1/2">
          <p className="w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
          <p className="mt-16 w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="card relative w-full" id="card-4">
      <div className="card-inner relative flex min-h-[400px] w-full bg-orange-500 p-4 md:p-10">
        <div className="left flex w-1/2 flex-col justify-between text-white">
          <h2>Sewage network installation</h2>
          <p className="w-1/2">
            Innovative execution methods to deliver safe, high quality project
            is the foundation of our business and success.
          </p>
        </div>
        <div className="right mt-2 w-1/2">
          <p className="w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
          <p className="mt-16 w-1/2">
            Creating an ordered timeline of events, staffing the project and
            determining the necessary materials and equipments.
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default function HomeCard() {
  //@ts-ignore
  const container = useRef();
  const [domReady, setDomReady] = useState(false);

  // Force a refresh of ScrollTrigger on component mount
  useEffect(() => {
    // Short timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setDomReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (!container.current || !domReady) return;

      const cards = gsap.utils.toArray(".card");
      if (cards.length === 0) return;

      // Create a context for the intro pin
      const introPinCtx = gsap.context(() => {
        ScrollTrigger.create({
          //@ts-ignore
          trigger: cards[0],
          start: "top 35%",
          //@ts-ignore

          endTrigger: cards[cards.length - 1],
          end: "top 30%",
          pin: ".intro",
          pinSpacing: false,
        });
      });

      // Array to store all card animation contexts
      //@ts-ignore

      const cardContexts = [];

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        //@ts-ignore

        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard && cardInner) {
          // Create a context for each card's pin
          const pinCtx = gsap.context(() => {
            ScrollTrigger.create({
              //@ts-ignore

              trigger: card,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 65%",
              pin: true,
              pinSpacing: false,
            });
          });

          // Create a context for each card's animation
          const animCtx = gsap.context(() => {
            gsap.to(cardInner, {
              y: `-${(cards.length - index) * 14}vh`,
              ease: "none",
              scrollTrigger: {
                //@ts-ignore

                trigger: card,
                start: "top 35%",
                endTrigger: ".outro",
                end: "top 65%",
                scrub: true,
              },
            });
          });

          cardContexts.push(pinCtx, animCtx);
        }
      });

      // Return cleanup function
      return () => {
        // Clean up all contexts
        introPinCtx.revert();
        //@ts-ignore

        cardContexts.forEach((ctx) => ctx.revert());
      };
    },
    {
      scope: container,
      dependencies: [domReady], // Only run when DOM is ready
    },
  );

  return (
    //@ts-ignore
    <div className="overflow-x-hidden" ref={container}>
      <section className="intro px-4 pt-10 md:px-10 md:pb-30">
        <Copy>
          <h4 className="text-orange-400">About us</h4>
          <h1 className="mt-4 w-full md:w-3/4">
            A construction <span className="text-orange-400">company,</span>
            <br />
            offering integrated solution and
            <br />
            related
            <span className="text-orange-400"> services.</span>
          </h1>
        </Copy>
        <div className="mt-30 flex-row md:flex">
          <div className="w-full md:w-1/2">
            <Copy>
              <h3 className="w-full md:w-1/2">
                State-of-The-Art Construction Methods and Technologies
              </h3>
            </Copy>
          </div>
        </div>
      </section>

      <section className="cards relative">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </section>

      <section className="outro relative flex h-screen w-full items-center justify-center bg-red-300 p-4 md:p-10">
        {/* <div className="absolute top-0 left-0 h-full w-full bg-[url(/bg-hero.jpg)]"></div> */}
        <Copy>
          <h1 className="max-w-4xl text-center text-3xl font-bold">
            Creating standout brands for startups that bring joy and leave
            lasting impressions.
          </h1>
        </Copy>
      </section>
    </div>
  );
}
