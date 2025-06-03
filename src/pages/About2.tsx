import Copy from "../components/Copy1";

const About = () => {
  return (
    <>
      <section className="font-NHD hero relative -mt-18 flex h-screen w-full items-end bg-red-300 p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/about-img.webp)]"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        <Copy>
          <h1 className="max-w-4xl text-3xl font-bold">
            Creating standout brands for startups that bring joy and leave
            lasting impressions.
          </h1>
        </Copy>
      </section>
      <section className="relative h-[100svh] w-full overflow-hidden text-white">
        <div className="h-screen w-full bg-green-400">About</div>;
      </section>
    </>
  );
};

export default About;
