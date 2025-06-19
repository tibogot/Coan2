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
      <div className="card-inner h-[500px] w-full overflow-hidden bg-gray-200 p-6 text-black md:h-[400px] md:p-10">
        <div className="flex h-full flex-col md:flex-row">
          {/* LEFT */}
          <div className="flex h-full w-full flex-col md:w-3/4 md:pr-6">
            {/* Text */}
            <div>
              <Copy>
                <h6 className="text-lg md:text-base">Planning</h6>
              </Copy>

              <div className="mt-12" />

              <Copy>
                <p className="text-lg md:w-2/3 md:text-xl">
                  Creating an ordered timeline of events, staffing the project
                  and determining the necessary materials and equipments.
                </p>
              </Copy>
            </div>

            {/* Mobile Image */}
            <div className="mt-6 flex-grow overflow-hidden rounded-sm md:hidden">
              <img
                src="plan.webp"
                alt="Planning visual"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden h-full w-full overflow-hidden rounded-sm md:flex md:w-1/4">
            <img
              src="plan.webp"
              alt="Planning visual"
              className="h-full w-full object-cover"
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
      <div className="card-inner h-[500px] w-full overflow-hidden bg-black p-6 text-white md:h-[400px] md:p-10">
        <div className="flex h-full flex-col md:flex-row">
          {/* LEFT */}
          <div className="flex h-full w-full flex-col md:w-3/4 md:pr-6">
            {/* Text */}
            <div>
              <Copy>
                <h6 className="text-lg md:text-base">Design</h6>
              </Copy>

              <div className="mt-12" />

              <Copy>
                <p className="text-lg md:w-2/3 md:text-xl">
                  We work hard to develop innovative and cost-effective
                  solutions for our client both public and private.
                </p>
              </Copy>
            </div>

            {/* Mobile Image */}
            <div className="mt-6 flex-grow overflow-hidden rounded-sm md:hidden">
              <img
                src="design.webp"
                alt="Design visual"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden h-full w-full overflow-hidden rounded-sm md:flex md:w-1/4">
            <img
              src="design.webp"
              alt="Design visual"
              className="h-full w-full object-cover"
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
      <div className="card-inner h-[500px] w-full overflow-hidden bg-orange-400 p-6 text-white md:h-[400px] md:p-10">
        <div className="flex h-full flex-col md:flex-row">
          {/* LEFT: Text and Mobile Image */}
          <div className="flex h-full w-full flex-col md:w-3/4 md:pr-6">
            {/* Text section */}
            <div>
              <Copy>
                <h6 className="text-lg md:text-base">Operation</h6>
              </Copy>

              <div className="mt-12" />

              <Copy>
                <p className="text-lg md:w-2/3 md:text-xl">
                  We emphasize on a broad spectrum of services, competences,
                  processes and tools to assure the built environment will
                  perform the functions for which a facility was designed and
                  constructed.
                </p>
              </Copy>
            </div>

            {/* Image fills remaining height ONLY on mobile */}
            <div className="mt-6 flex-grow overflow-hidden rounded-sm md:hidden">
              <img
                src="operation.webp"
                alt="Operation visual"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Desktop Image only */}
          <div className="right hidden h-full w-full overflow-hidden rounded-sm md:flex md:w-1/4">
            <img
              src="operation.webp"
              alt="Operation visual"
              className="h-full w-full object-cover"
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
      <div className="card-inner h-[500px] w-full overflow-hidden bg-orange-500 p-6 text-white md:h-[400px] md:p-10">
        <div className="flex h-full flex-col md:flex-row">
          {/* LEFT */}
          <div className="flex h-full w-full flex-col md:w-3/4 md:pr-6">
            {/* Text */}
            <div>
              <Copy>
                <h6 className="text-lg md:text-base">Construction</h6>
              </Copy>

              <div className="mt-12" />

              <Copy>
                <p className="text-lg md:w-2/3 md:text-xl">
                  Innovative execution methods to deliver safe, high quality
                  project is the foundation of our business and success.
                </p>
              </Copy>
            </div>

            {/* Mobile Image */}
            <div className="mt-6 flex-grow overflow-hidden rounded-sm md:hidden">
              <img
                src="construction.webp"
                alt="Construction visual"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden h-full w-full overflow-hidden rounded-sm md:flex md:w-1/4">
            <img
              src="construction.webp"
              alt="Construction visual"
              className="h-full w-full object-cover"
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
            lenis.scrollTo(value!, { duration: 0 });
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
            <p className="mt-6 text-lg text-balance md:mt-14 md:w-3/4 md:text-xl">
              COAN West Africa Limited offers a complete spectrum of engineering
              and construction services designed to meet the diverse
              infrastructure needs of modern Nigeria. Our multidisciplinary
              approach ensures seamless project delivery from conception to
              completion.
            </p>
          </Copy>
        </div>
      </section>

      <section className="cards relative space-y-4 md:space-y-0">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </section>

      <section className="outro min-h-[40vh] px-4 py-10 md:min-h-[50vh] md:px-10 md:pb-30">
        <div className="md:w-3/4">
          <Copy>
            <h4 className="text-base text-orange-400 md:text-lg">
              Our mission
            </h4>
            <h2 className="mt-4 w-full text-2xl md:w-3/4 md:text-3xl lg:text-4xl">
              Transforming Communities Through Superior Infrastructure
            </h2>
          </Copy>
        </div>
        <div className="w-full text-base md:flex md:text-lg lg:text-xl">
          <div className="left md:w-3/4">
            <Copy>
              <p className="mt-8 md:mt-14 md:w-1/2">
                At COAN West Africa Limited, our mission extends beyond
                construction – we are nation builders committed to creating
                sustainable infrastructure that enhances quality of life,
                promotes economic development, and connects communities across
                Nigeria.
              </p>
            </Copy>
          </div>
          <div className="right mt-6 md:mt-0 md:w-1/2">
            {/* <Copy>
              <p className="mt-8 w-full text-lg md:mt-14 md:text-xl">
                To be the most trusted and innovative construction company in
                West Africa, setting new standards for quality, sustainability,
                and technological advancement in infrastructure development. We
                envision a future where our projects serve as benchmarks for
                excellence and contribute significantly to regional economic
                integration and development.
              </p>
              <br />
            </Copy> */}
          </div>
        </div>
        <div className="center-banner mt-8 rounded-sm bg-amber-400 md:mt-16">
          <div className="imgwrapper relative flex h-[300px] w-full items-center justify-center rounded-sm bg-amber-200 bg-[url(/grid-images/image-8.webp)] bg-cover bg-center text-white md:h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 px-4"></div>

            <div className="flex flex-col items-center justify-center px-4 text-center">
              <h5 className="text-3xl md:w-3/4 md:text-5xl">
                Leading West Africa's Infrastructure Revolution
              </h5>

              <div className="relative z-50 flex justify-center">
                <a href="/contact" className="relative z-50">
                  <Button variant="withArrow" className="mt-10">
                    Contact us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
