import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { UseLenis } from "./LenisContext";
import Copy from "../components/Copy1";
import Button from "../components/Buttons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Card1() {
  return (
    <div className="card relative w-full" id="card-1">
      <div className="card-inner relative flex h-[400px] w-full flex-col bg-orange-400 p-4 text-white md:h-[400px] md:flex-row md:p-10">
        <div className="left mb-4 flex w-full flex-col justify-between md:mb-0 md:w-3/4">
          <Copy>
            <h6 className="text-lg md:text-base">Planning</h6>
          </Copy>
          <div className="p">
            <Copy>
              <p className="w-full text-lg md:w-1/3 md:text-xl">
                Creating an ordered timeline of events, staffing the project and
                determining the necessary materials and equipments.
              </p>
            </Copy>
          </div>
        </div>
        <div className="right flex h-32 w-full bg-amber-200 md:h-auto md:w-1/4">
          <div className="img-wrap h-full w-full rounded-sm">
            <img
              src="plan.webp"
              alt="Planning visual"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card relative w-full" id="card-2">
      <div className="card-inner relative flex h-[400px] w-full flex-col bg-orange-400 p-4 text-white md:h-[400px] md:flex-row md:p-10">
        <div className="left mb-4 flex w-full flex-col justify-between md:mb-0 md:w-3/4">
          <Copy>
            <h6 className="text-lg md:text-base">Design</h6>
          </Copy>
          <div className="p">
            <Copy>
              <p className="w-full text-lg md:w-1/3 md:text-xl">
                We work hard to develop innovative and cost-effective solutions
                for our client both public and private.
              </p>
            </Copy>
          </div>
        </div>
        <div className="right flex h-32 w-full md:h-auto md:w-1/4">
          <div className="img-wrap h-full w-full rounded-sm bg-amber-200">
            <img
              src="design.webp"
              alt="Planning visual"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="card relative w-full" id="card-3">
      <div className="card-inner relative flex h-[400px] w-full flex-col bg-orange-400 p-4 text-white md:h-[400px] md:flex-row md:p-10">
        <div className="left mb-4 flex w-full flex-col justify-between md:mb-0 md:w-3/4">
          <Copy>
            <h2 className="text-xl md:text-2xl">Operation & Maintenance</h2>
          </Copy>
          <div className="p">
            <Copy>
              <p className="w-full text-lg md:w-1/3 md:text-xl">
                We emphasize on a broad spectrum of services, competences,
                processes and tools to assure the built environment will perform
                the functions for which a facility was designed and constructed.
              </p>
            </Copy>
          </div>
        </div>
        <div className="right flex h-32 w-full md:h-auto md:w-1/4">
          <div className="img-wrap h-full w-full rounded-sm bg-amber-200">
            <img
              src="operation.webp"
              alt="Planning visual"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="card relative w-full" id="card-4">
      <div className="card-inner relative flex h-[400px] w-full flex-col bg-orange-400 p-4 text-white md:h-[400px] md:flex-row md:p-10">
        <div className="left mb-4 flex w-full flex-col justify-between md:mb-0 md:w-3/4">
          <Copy>
            <h2 className="text-xl md:text-2xl">Construction</h2>
          </Copy>
          <div className="p">
            <Copy>
              <p className="w-full text-lg md:w-1/3 md:text-xl">
                Innovative execution methods to deliver safe, high quality
                project is the foundation of our business and success.
              </p>
            </Copy>
          </div>
        </div>
        <div className="right flex h-32 w-full md:h-auto md:w-1/4">
          <div className="img-wrap h-full w-full rounded-sm bg-amber-200">
            <img
              src="construction.webp"
              alt="Planning visual"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeCard() {
  const lenis = UseLenis();
  const container = useRef<HTMLDivElement>(null);
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
      if (!container.current || !domReady || !lenis) return;

      // Only run animations on desktop (md breakpoint and above)
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      if (!mediaQuery.matches) {
        return;
      }

      const cards = gsap.utils.toArray(".card") as Element[];
      if (cards.length === 0) return;

      // Tell ScrollTrigger to use Lenis for scroll calculations
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value?: number) {
          if (arguments.length && lenis) {
            //@ts-ignore
            lenis.scrollTo(value!, { duration: 0, disableLerp: true });
          }
          return lenis ? lenis.scroll : window.pageYOffset;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      // Update ScrollTrigger on Lenis scroll
      const handleScroll = () => {
        ScrollTrigger.update();
      };

      lenis.on("scroll", handleScroll);

      // Desktop settings only
      const startPosition = "top 35%";
      const endPosition = "top 30%";
      const cardEndPosition = "top 65%";
      const yOffset = 14;

      // Create a context for the intro pin
      const introPinCtx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: cards[0],
          start: startPosition,
          endTrigger: cards[cards.length - 1],
          end: endPosition,
          pin: ".intro",
          pinSpacing: false,
          scroller: document.body,
        });
      });

      // Array to store all card animation contexts
      const cardContexts: gsap.Context[] = [];

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        const cardInner = card.querySelector(".card-inner") as HTMLElement;

        if (!isLastCard && cardInner) {
          // Create a context for each card's pin
          const pinCtx = gsap.context(() => {
            ScrollTrigger.create({
              trigger: card,
              start: startPosition,
              endTrigger: ".outro",
              end: cardEndPosition,
              pin: true,
              pinSpacing: false,
              scroller: document.body,
            });
          });

          // Create a context for each card's animation
          const animCtx = gsap.context(() => {
            gsap.to(cardInner, {
              y: `-${(cards.length - index) * yOffset}vh`,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: startPosition,
                endTrigger: ".outro",
                end: cardEndPosition,
                scrub: true,
                scroller: document.body,
              },
            });
          });

          cardContexts.push(pinCtx, animCtx);
        }
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();

      // Return cleanup function
      return () => {
        // Clean up Lenis listener
        if (lenis) {
          lenis.off("scroll", handleScroll);
        }

        // Clean up all contexts
        introPinCtx.revert();
        cardContexts.forEach((ctx) => ctx.revert());
      };
    },
    {
      scope: container,
      dependencies: [domReady, lenis],
    },
  );

  return (
    <div className="overflow-x-hidden" ref={container}>
      <section className="intro min-h-[40vh] px-4 pt-10 pb-14 md:flex md:min-h-[50vh] md:px-10 md:pb-30">
        <div className="left md:w-3/4">
          <Copy>
            <h4 className="text-base text-orange-400 md:text-lg">Services</h4>
            <h2 className="mt-4 w-full text-2xl md:w-3/4 md:text-3xl lg:text-4xl">
              Develop comprehensive solutions for each project
            </h2>
          </Copy>
        </div>
        <div className="right mt-6 md:mt-0 md:w-1/2">
          <Copy>
            <p className="mt-6 text-lg md:mt-14 md:w-1/2 md:text-lg lg:text-xl">
              Transform your landscape with our comprehensive civil engineering
              solutions. From foundation design to complex structural systems,
              our civil engineers handle projects of all scales with meticulous
              attention to detail.
            </p>
          </Copy>
        </div>
      </section>

      <section className="cards relative space-y-0 md:space-y-0">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </section>

      <section className="outro min-h-[40vh] px-4 py-10 md:min-h-[50vh] md:px-10 md:pb-30">
        <div className="md:w-3/4">
          <Copy>
            <h4 className="text-base text-orange-400 md:text-lg">Services</h4>
            <h2 className="mt-4 w-full text-2xl md:text-3xl lg:text-4xl">
              A consultative approach
            </h2>
          </Copy>
        </div>
        <div className="w-full text-base md:flex md:text-lg lg:text-xl">
          <div className="left md:w-3/4">
            <Copy>
              <p className="mt-8 md:mt-14 md:w-1/2">
                MIMCO est un groupe d'investissement spécialisé dans
                l'immobilier value add paneuropéen. Le groupe structure et gère
                des véhicules d'investissement{" "}
              </p>
            </Copy>
          </div>
          <div className="right mt-6 md:mt-0 md:w-1/2">
            <Copy>
              <p className="mt-8 w-full text-lg md:mt-14 md:text-xl">
                MIMCO est un groupe d'investissement spécialisé dans
                l'immobilier value add paneuropéen. Le groupe structure et gère
                des véhicules d'investissement. <br /> MIMCO est un groupe
                d'investissement spécialisé dans l'immobilier value add
                paneuropéen. Le groupe structure et gère des véhicules
                d'investissement{" "}
              </p>
              <br />
              <p className="w-full text-lg md:text-xl">
                MIMCO est un groupe d'investissement spécialisé dans
                l'immobilier value add paneuropéen. Le groupe structure et gère
                des véhicules d'investissement{" "}
              </p>
            </Copy>
          </div>
        </div>
        <div className="center-banner mt-8 rounded-sm bg-amber-400 md:mt-16">
          <div className="imgwrapper relative flex h-[300px] w-full items-center justify-center rounded-sm bg-amber-200 bg-[url(/grid-images/image-4.webp)] bg-cover bg-center text-white md:h-[400px]">
            <div className="flex flex-col items-center justify-center px-4 text-center">
              <h5 className="text-3xl md:w-3/4 md:text-5xl">
                Nous cultivons notre passion au travers de projets audacieux.
              </h5>{" "}
              <Button className="mt-6 md:mt-10" variant="withArrow">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
