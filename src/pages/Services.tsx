import Copy from "../components/Copy2";
import PulsingMap from "../components/MapSvg";

const Services = () => {
  return (
    <>
      <section className="font-NHD hero relative -mt-18 flex h-[100svh] w-full items-end bg-red-300 p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/services-img.webp)]"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        <Copy isHero>
          <h1 className="max-w-4xl text-3xl font-bold">
            Comprehensive Engineering Solutions Across Civil, Electrical &
            Mechanical Disciplines
          </h1>
        </Copy>
      </section>
      <section className="relative h-[100svh] w-full overflow-hidden text-white">
        <div className="h-screen w-full bg-green-400">About</div>;
      </section>

      <PulsingMap />
    </>
  );
};

export default Services;
