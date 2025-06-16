import Copy from "../components/Copy2";
// import PulsingMap from "../components/MapSvg";

const Services = () => {
  return (
    <>
      <section className="font-NHD hero relative -mt-18 flex h-[100svh] w-full items-end bg-red-300 p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/grid-images/image-4.webp)]"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        <Copy isHero>
          <h1 className="max-w-4xl text-3xl font-bold">
            Comprehensive Engineering Solutions Across Civil, Electrical &
            Mechanical Disciplines
          </h1>
        </Copy>
      </section>
      <section className="font-NHD secondsection overflow-visible px-4 py-10 md:px-10 md:pb-30">
        <Copy>
          <h4 className="text-orange-400">Our services</h4>
        </Copy>
        <Copy>
          <h1 className="mt-4 w-full md:w-3/4">
            Discover the <span className="text-orange-400">services</span>{" "}
            <br />
            we have to <span className="text-orange-400">offer.</span>
          </h1>
        </Copy>
        <div className="wrapper mt-14 space-y-10 md:flex md:gap-10">
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
        </div>
        <div className="wrapper mt-10 space-y-10 md:flex md:gap-10">
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
        </div>
        <div className="wrapper mt-10 space-y-10 md:flex md:gap-10">
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
          <div className="h-[400px] grow rounded-lg bg-orange-400"></div>
        </div>
      </section>

      {/* <PulsingMap /> */}
    </>
  );
};

export default Services;
