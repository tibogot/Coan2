import Copy from "../components/Copy1";
import PulsingMap from "../components/MapSvg";

const Services = () => {
  return (
    <>
      <section className="outro relative flex h-screen w-full items-center bg-red-300 p-4 md:p-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/bg-hero.jpg)]"></div>
        <Copy>
          <h1 className="max-w-4xl text-3xl font-bold">
            Creating standout brands for startups that bring joy and leave
            lasting impressions.
          </h1>
        </Copy>
      </section>
      <section className="relative -mt-18 h-[100svh] w-full overflow-hidden text-white">
        <div className="h-screen w-full bg-amber-400">AServices</div>;
      </section>
      <PulsingMap />
      <img src="banner.svg" alt="" />
    </>
  );
};

export default Services;
