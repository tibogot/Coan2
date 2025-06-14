import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Polar = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      // Pin the entire section but with longer duration for slower animation
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=200vh", // Longer pin duration for slower animation
        pin: container,
        pinSpacing: false,
      });

      // Animate cards stacking - slower, more gradual
      cards.forEach((card, index) => {
        if (index === 0) return; // Skip first card

        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: `+=${100 + index * 50}vh`, // Much longer duration for slower animation
          scrub: 4, // Increased scrub for smoother animation
          animation: gsap.fromTo(
            card,
            {
              y: index * 240, // Start offset
            },
            {
              y: 0, // End stacked
              ease: "none",
            },
          ),
        });
      });

      // Set z-index for proper stacking (highest index on top)
      gsap.set(card1Ref.current, { zIndex: 1 });
      gsap.set(card2Ref.current, { zIndex: 2 });
      gsap.set(card3Ref.current, { zIndex: 3 });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="font-NHD secondsection flex h-screen items-start overflow-hidden px-4 pt-30 md:px-10 md:pb-10"
    >
      <div ref={leftRef} className="left w-full flex-shrink-0 md:w-1/2">
        <h4 className="text-orange-400">About us</h4>
        <h1 className="mt-4 w-full md:w-3/4">
          A construction <span className="text-orange-400">company,</span>
          <br />
          offering integrated solution and related
          <span className="text-orange-400"> services.</span>
        </h1>
      </div>

      <div
        ref={rightRef}
        className="right relative mt-10 w-full flex-shrink-0 md:w-1/3"
      >
        {/* Card 1 */}
        <div
          ref={card1Ref}
          className="absolute top-0 right-0 left-0 h-[200px] rounded-lg bg-orange-400 p-6 text-white"
        >
          <h6 className="mb-2">Civil Engineering</h6>
          <p className="w-3/4">
            MIMCO est un groupe d'investissement spécialisé dans l'immobilier
            value add paneuropéen. Le groupe structure et gère des véhicules
            d'investissement
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          className="absolute top-0 right-0 left-0 h-[200px] rounded-lg bg-orange-400 p-6 text-white shadow-md"
        >
          <h6 className="mb-2">Electrical Engineering</h6>
          <p className="w-3/4">
            MIMCO est un groupe d'investissement spécialisé dans l'immobilier
            value add paneuropéen. Le groupe structure et gère des véhicules
            d'investissement
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          className="absolute top-0 right-0 left-0 h-[200px] rounded-lg bg-orange-400 p-6 text-white shadow-md"
        >
          <h6 className="mb-2">Mechanical</h6>
          <p className="w-3/4">
            MIMCO est un groupe d'investissement spécialisé dans l'immobilier
            value add paneuropéen. Le groupe structure et gère des véhicules
            d'investissement
          </p>
        </div>
      </div>
    </section>
  );
};

export default Polar;
