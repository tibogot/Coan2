// import { useEffect } from "react";
import Button from "../components/Buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Ticker from "../components/Ticker";
import ProfilesTicker from "../components/ProfilesTicker3";
import FAQ from "../components/FAQ";
// import Counter from "../components/Counter2";
import Copy from "../components/Copy2";
import GridComponent from "../components/GridComponent2";
import HomeCard from "../components/CardsScroll13";
import { useGSAP } from "@gsap/react";
import Chart from "../components/Chart2";
// import CounterDark from "../components/CounterDark";
// import CautionTicker from "../components/CautionTicker";

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
        // invalidateOnRefresh: true,
      },
    });

    // Hero image parallax

    gsap.to(".bgimg2", {
      yPercent: 20, // adjust this for stronger/weaker parallax
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top", // when .hero hits bottom of viewport
        end: "bottom top", // when .hero leaves top of viewport
        scrub: true,
      },
    });

    // Image Scale

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

    //Images Clip-Path

    tl2.to(".section2", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power1.out",
    });

    tl2.to(".section3", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power1.out",
    });

    gsap.to(".road-img", {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".pre-black",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    // ✅ Only clean up on unmount
    return () => {
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // ScrollTrigger.clearMatchMedia();
      tl2.kill();
      gsap.killTweensOf(".section1");
      gsap.killTweensOf(".bgimg2");
      gsap.killTweensOf(".road-img");
      // gsap.globalTimeline.clear();
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
          <div className="bgimg2 absolute inset-0 z-0 scale-100 bg-[url(/coan2bg.webp)] bg-cover bg-center bg-no-repeat" />
          <div className="relative z-10 flex h-full items-end md:items-center">
            <div className="flex w-full flex-col select-none">
              <div className="logobig w-full pb-6 md:w-1/2 md:pb-8">
                <img
                  src="./logo2.svg"
                  alt="Company Logo"
                  className="h-auto w-full"
                />
              </div>
              <Copy isHero>
                <p className="mx-2 text-base md:text-xl">
                  Construction Company West Africa
                </p>
              </Copy>
            </div>
          </div>
        </section>

        {/* 2nd Section  */}

        <section className="secondsection px-4 py-10 md:px-10 md:pb-30">
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
          <div className="mt-14 flex-row md:mt-30 md:flex">
            <div className="w-full md:w-1/2">
              <Copy>
                <h3 className="w-full md:w-1/2">A Tradition Of Excellence</h3>
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

                <Button className="mt-10" variant="withArrow">
                  Learn more
                </Button>
              </div>
            </Copy>
          </div>
        </section>

        {/* <Counter /> */}
        {/* <CautionTicker /> */}
        {/* <Ticker /> */}

        {/* Images Clip-Path */}

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
                  Offering
                  <span className="text-orange-400"> integrated</span>
                  <br /> services
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
                src="./grid-images/image-2.webp"
                alt="Section 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 px-4 text-center text-white">
                <h2>
                  Building the <span className="text-orange-400">future</span>
                  <br /> together
                </h2>
              </div>
            </div>
          </section>
        </div>

        <HomeCard />

        {/* Pre-black Section */}

        <section className="pre-black px-4 py-10 md:px-10 md:pb-30">
          <Copy>
            <h4 className="text-orange-400">Our vision</h4>
          </Copy>

          <div className="wrapper w-full md:flex">
            <div className="left flex flex-col justify-between md:w-1/2">
              <Copy>
                <h2 className="mt-4 w-full md:w-3/4">
                  {" "}
                  To be the most trusted and innovative construction company in
                  West Africa
                </h2>
              </Copy>
              <Copy>
                <p className="mt-10 w-full text-xl md:w-1/2">
                  Setting new standards for quality, sustainability, and
                  technological advancement in infrastructure development.
                </p>
              </Copy>
            </div>
            <div className="right grow">
              <div className="img-wrapper mt-10 h-[400px] w-full md:mt-4">
                <img
                  src="road.webp"
                  alt="road"
                  className="road-img h-full w-full scale-0 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Black Section   */}

        {/* Grid Dots */}

        <section className="flex w-full flex-col-reverse bg-black px-4 py-20 text-white md:flex md:flex-row md:px-10">
          <GridComponent />
          <div className="flex w-full flex-col items-start justify-start py-4 md:w-1/2 md:px-10">
            <h4 className="">Engineering Excellence</h4>
            <h2 className="mt-4 text-balance">
              Where <span className="text-orange-400">Innovation</span> Meets{" "}
              <span className="text-orange-400">Precision</span>
            </h2>
            <p className="mt-10 w-full pb-10 text-xl md:w-1/2">
              With over 18 years of expertise in civil and electrical
              engineering, we deliver transformative infrastructure projects
              that shape tomorrow's communities. <br /> Our commitment to
              technical excellence and sustainable solutions sets new industry
              standards.
            </p>

            <Button className="mt-10" variant="withArrow">
              Learn more
            </Button>
          </div>
        </section>

        <Chart />

        {/* Team Section */}

        <section className="relative flex w-full overflow-hidden px-4 pt-10 pb-24 md:px-10 md:pt-20">
          <div className="flex w-full flex-col gap-4 text-black">
            <Copy>
              <h4 className="text-orange-400">We're here to help.</h4>
              <h2 className="mt-4">Discover our team</h2>
              <p className="mt-14 w-full text-xl md:w-1/4">
                COAN's professional employees play an integral role in
                successfully delivering some of the largest and most complex
                construction engineering projects in Africa.
              </p>
            </Copy>
          </div>
        </section>

        <ProfilesTicker />

        {/* FAQ */}

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
                <h2 className="">
                  Building the Future with Precision
                  <br />& Expertise.
                </h2>
              </Copy>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
