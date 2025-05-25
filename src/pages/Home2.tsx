// import { useEffect } from "react";
// import Button from "../components/Buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Ticker from "../components/Ticker";
import ProfilesTicker from "../components/ProfilesTicker2";
import FAQ from "../components/FAQ";
import Counter from "../components/Counter2";
import Copy from "../components/Copy1";
import GridComponent from "../components/GridComponent2";
import HomeCard from "../components/CardsScroll10";
import { useGSAP } from "@gsap/react";
// import CounterDark from "../components/CounterDark";
import CautionTicker from "../components/CautionTicker";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    // Only set up your animations here, don't kill all triggers!
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bigimg-wrapper",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.to(".section1", {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".section1",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    tl2.to(".section2", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power1.out",
    });

    tl2.to(".section3", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power1.out",
    });
    // gsap.fromTo(
    //   ".card",
    //   { scale: 1 },
    //   {
    //     scale: 0.5,
    //     ease: "none",
    //     stagger: 0.5,
    //     // filter: "blur(0.5rem)",
    //     scrollTrigger: {
    //       trigger: ".cards-wrapper",
    //       start: "top top",
    //       scrub: 1,
    //       // pin: true,
    //     },
    //   },
    // );

    // ✅ Only clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
      tl2.kill();
      gsap.killTweensOf(".section1");
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <>
      <div className="wrapper font-NHD">
        {/* Splash */}
        {/* <div className="splash absolute top-0 left-0 z-[99999] flex h-screen w-full items-center justify-center bg-black select-none">
          <img src="./logo.svg" alt="" className="w-1/3" />
        </div> */}

        {/* Hero Section */}

        <section className="hero relative -mt-18 h-[100svh] w-full overflow-hidden p-4 text-white md:p-10">
          <div
            className="bgimg2 absolute inset-0 z-0 scale-100 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/coan2bg.webp')" }}
          />
          <div className="relative z-10 flex h-full items-end md:items-center">
            <div className="flex w-full flex-col select-none">
              <div className="logobig w-full pb-6 md:w-1/2 md:pb-8">
                <img
                  src="./logo2.svg"
                  alt="Company Logo"
                  className="h-auto w-full"
                />
              </div>
              <p className="mx-2 text-base md:text-xl">
                Construction Company West Africa
              </p>
            </div>
          </div>
        </section>

        {/* 2nd Section  */}

        <section className="secondsection px-4 pt-10 md:px-10 md:pb-30">
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
            <Copy>
              <div className="mt-10 w-full md:w-1/2">
                <p className="w-full text-lg md:w-3/4 md:text-xl">
                  COAN West Africa Limited is a construction company offering
                  integrated solutions and related services. COAN is known for
                  executing complex engineering solution that require the
                  highest level of technical expertise be it
                  <br />
                  <br />
                  Civil Engineering services - Bridge construction, Road and
                  Drain construction, Dam construction, Public and Private
                  building structures.
                  <br />
                  <br />
                  Electrical Engineering services - Power supply infrastructure,
                  Street lights installation, Telecommunication and ICT
                  infrastructure.
                  <br />
                  <br />
                  Mechanical Engineering services – Construction of Water supply
                  network, Sewer and Sewage network.
                </p>
              </div>
            </Copy>
          </div>
        </section>

        {/* <Counter /> */}

        <CautionTicker />

        {/* <img src="banner.svg" alt="" /> */}

        {/* <Ticker /> */}

        {/* Big img 1 */}
        <div className="p-0">
          <section className="bigimg-wrapper relative h-screen w-full overflow-hidden">
            {/* Section 1 (top) */}
            <div className="section1 absolute inset-0 z-30 origin-center scale-75">
              <img
                src="./5V6A0113-scaled.jpg"
                alt="Section 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 px-4 text-center text-white">
                <h2>
                  A construction{" "}
                  <span className="text-orange-400">company</span>
                  <br /> offering integrated{" "}
                  <span className="text-orange-400">solution</span>
                </h2>
              </div>
            </div>

            {/* Section 2 (middle) */}
            <div
              className="section2 absolute inset-0 z-40"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="./5V6A0592-scaled.jpg"
                alt="Section 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 px-4 text-center text-white">
                <h2>
                  Innovative{" "}
                  <span className="text-orange-400">engineering</span>
                  <br /> solutions
                </h2>
              </div>
            </div>

            {/* Section 3 (bottom) */}
            <div
              className="section3 absolute inset-0 z-50"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="./20210304_102705-2-scaled.jpg"
                alt="Section 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 px-4 text-center text-white">
                <h2>
                  Building the <span className="text-orange-400">future</span>
                  <br /> together
                </h2>
              </div>
            </div>
          </section>
        </div>
        {/* <section className="intro px-4 pt-10 md:px-10 md:pb-30">
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
        </section> */}
        {/* <section className="cards-wrapper flex w-full flex-col items-center justify-center gap-10 bg-blue-500 px-4 py-20 md:px-10">
          <div className="card sticky h-[80vh] w-full bg-amber-200"></div>
          <div className="card sticky h-[80vh] w-full bg-red-500"></div>
          <div className="card sticky h-[80vh] w-full bg-pink-500"></div>
        </section> */}
        {/* <section className="relative flex h-screen w-full flex-col items-center justify-center bg-orange-500 px-4 py-20 text-white md:px-10">
          <Copy>
            <h1 className="w-full max-w-2xl text-center text-3xl font-bold">
              Creating standout brands for startups that bring joy and leave
              lasting impressions.
            </h1>
          </Copy>
        </section> */}

        <HomeCard />
        {/* <section className="outro relative flex h-screen w-full items-center justify-center bg-red-300 p-4 md:p-10">
          <div className="absolute top-0 left-0 h-full w-full bg-[url(/bg-hero.jpg)]"></div>
          <Copy>
            <h1 className="max-w-4xl text-center text-3xl font-bold">
              Creating standout brands for startups that bring joy and leave
              lasting impressions.
            </h1>
          </Copy>
        </section> */}

        {/* <section className="font-NHD relative h-[100svh] w-full overflow-hidden bg-black"></section> */}

        <div className="w-full flex-row bg-black py-20 text-white md:flex">
          <GridComponent />
          <div className="flex w-full flex-col items-start justify-center px-4 py-8 md:w-1/2 md:px-10">
            <Copy>
              <h2>
                A construction <span className="text-orange-400">company,</span>
                <br /> offering integrated{" "}
                <span className="text-orange-400">solution</span> and related
                services.
              </h2>{" "}
              <p className="mt-10 w-1/2 text-base">
                COAN's professional employees play an integral role in
                successfully delivering.
              </p>
            </Copy>
          </div>
        </div>
        <section className="font-NHD relative min-h-screen w-full justify-between overflow-hidden bg-black px-4 py-10 text-white md:flex md:px-10">
          <div className="left w-1/2">
            <Copy delay={0.0}>
              <h4>About us</h4>
            </Copy>

            <Copy>
              <h2 className="mt-4 w-full">
                A construction company, offering integrated solution and related
                services.
              </h2>
            </Copy>

            <Copy>
              <p className="mt-10 w-full pb-10 text-xl text-balance">
                MIMCO est un groupe d'investissement spécialisé dans
                l'immobilier value add paneuropéen.
                <br />
                Le groupe structure et gère des véhicules d'investissement
                innovants au service d'une clientèle institutionnelle ainsi que
                de family offices et banques privées.
              </p>
            </Copy>
          </div>
          <div className="right flex w-1/2 pl-10 select-none">
            <img
              src="./bgimg2.webp"
              alt=""
              className="sideimg1 w-full object-cover"
            />
          </div>
        </section>
        {/* <CounterDark /> */}

        <section className="relative flex w-full overflow-hidden px-4 pt-24 pb-24 md:px-10">
          <div className="flex w-full flex-col gap-4 text-black">
            <Copy>
              <p className="text-lg text-orange-400">We're here to help.</p>
              <h2>Discover our team</h2>
              <p className="mt-24 w-full text-base md:w-1/2">
                COAN's professional employees play an integral role in
                successfully delivering some of the largest and most complex
                construction engineering projects in Africa.
              </p>
            </Copy>
          </div>
        </section>

        <ProfilesTicker />

        {/* <ProfilesTickerR /> */}

        <FAQ />

        {/* Last Image */}

        <section className="font-NHD relative h-[100svh] w-full overflow-hidden">
          <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1710582307396-5ca7b4390aa8?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="w-1/4">
              <img
                src="/coanlogobig.svg"
                alt="Company Logo"
                className="object-contain"
              />
            </div>

            {/* Text Container */}
            <div className="absolute top-20 z-10 flex w-full justify-start px-4 text-white md:px-10">
              <Copy>
                <h1 className="">
                  Building the Future with Precision
                  <br />& Expertise.
                </h1>
              </Copy>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
