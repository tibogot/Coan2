import Copy from "../components/Copy2";
// import Polar from "../components/Polar";
import ProfilesGrid from "../components/ProfileGrid";
// import Button from "../components/Buttons";

const About = () => {
  return (
    <>
      {/* Hero Section */}

      <section className="font-NHD hero relative -mt-18 flex h-[100svh] w-full items-end bg-red-300 p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/about-img.webp)]"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        <Copy isHero>
          <h1 className="max-w-4xl text-3xl font-bold">
            Over 18 years grinding alongside founders with a chip
          </h1>
        </Copy>
      </section>

      {/* <Polar /> */}

      {/* About Section */}
      <section className="font-NHD secondsection overflow-visible px-4 py-10 md:px-10 md:pb-30">
        <Copy>
          <h4 className="text-orange-400">About us</h4>
        </Copy>
        <Copy>
          <h1 className="mt-4 w-full md:w-3/4">
            Engineering <span className="text-orange-400">Excellence,</span>
            <br />
            Technical Innovation and Integrated Construction
            <span className="text-orange-400">Solutions.</span>
          </h1>
        </Copy>
        <div className="mt-34 h-[800px] w-full rounded-sm">
          <img
            src="/about-img.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* <section className="font-NHD px-4 pt-10 pb-14 md:px-10 md:pb-30">
        <div className="md:flex">
          <div className="left md:w-1/2">
            <Copy>
              <h2 className="mt-4 w-full text-2xl md:w-3/4 md:text-3xl lg:text-4xl">
                Develop comprehensive solutions for each project
              </h2>
            </Copy>
          </div>
          <div className="right mt-6 flex justify-end md:mt-0 md:w-1/2">
            <Copy>
              <p className="mt-6 text-lg text-orange-400 md:mt-14">Le groupe</p>
            </Copy>
          </div>
        </div>
        <p className="mt-14 w-full text-xl md:w-1/4">
          COAN's professional employees play an integral role in successfully
          delivering some of the largest and most complex construction
          engineering projects in Africa.
        </p>
      </section> */}

      <section className="font-NHD relative flex w-full overflow-hidden px-4 pt-10 pb-24 md:px-10 md:pt-20">
        <div className="flex w-full flex-col gap-4 text-black">
          <Copy>
            <h4 className="text-orange-400">We're here to help.</h4>
            <h2 className="mt-4">Meet Our Management Team</h2>
            <p className="mt-14 w-full text-xl md:w-1/4">
              COAN's professional employees play an integral role in
              successfully delivering some of the largest and most complex
              construction engineering projects in Africa.
            </p>
          </Copy>
        </div>
      </section>

      <ProfilesGrid />

      <section className="font-NHD relative flex w-full overflow-hidden px-4 pt-10 pb-24 md:px-10 md:pt-20">
        <div className="flex w-full flex-col gap-4 text-black">
          <Copy>
            <h2 className="mt-4">Discover our team</h2>
            <p className="mt-14 w-full text-xl md:w-1/4">
              COAN's professional employees play an integral role in
              successfully delivering some of the largest and most complex
              construction engineering projects in Africa.
            </p>
          </Copy>
        </div>
      </section>
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
    </>
  );
};

export default About;
