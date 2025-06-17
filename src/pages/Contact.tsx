import Copy from "../components/Copy2";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="font-NHD hero relative -mt-18 flex h-[100svh] w-full items-end bg-red-300 p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/grid-images/image-16.webp)] bg-cover bg-center"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/20"></div>
        <Copy isHero>
          <h1 className="max-w-4xl text-3xl font-bold">
            Reach Out to Us for Your Next Infrastructure Project
          </h1>
        </Copy>
      </section>

      {/* Contact Form Section */}
      <section className="font-NHD overflow-visible px-4 py-10 md:px-10 md:pb-30">
        <Copy>
          <h4 className="text-orange-400">Contact us</h4>
        </Copy>
        <Copy>
          <h1 className="mt-4 w-full md:w-3/4">
            Get in <span className="text-orange-400">touch.</span>
          </h1>
        </Copy>

        <div className="mt-14">
          <form className="space-y-6 md:w-1/2">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-sm border-0 bg-gray-100 px-4 py-3 text-black"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-sm border-0 bg-gray-100 px-4 py-3 text-black"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-sm border-0 bg-gray-100 px-4 py-3 text-black"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full rounded-sm border-0 bg-gray-100 px-4 py-3 text-black"
                placeholder="Tell us about your project"
              ></textarea>
            </div>

            <button className="rounded-sm bg-orange-400 px-8 py-3 text-white transition hover:bg-orange-500">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          {/* <div className="mt-20 grid gap-10 border-t border-gray-200 pt-10 text-center md:grid-cols-3">
            <div>
              <h3 className="text-xl font-medium">Our Office</h3>
              <p className="mt-4 text-lg text-gray-600">
                22 Durban Street,
                <br />
                Wuse 2, Abuja.
                <br />
                Nigeria.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Contact Information</h3>
              <p className="mt-4 text-lg text-gray-600">
                Phone: +234 803 786 9334
                <br />
                Phone: +234 703 366 8523
                <br />
                Email: info@coan.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Business Hours</h3>
              <p className="mt-4 text-lg text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Map Section */}
      <section className="font-NHD px-4 md:px-10 md:py-20">
        {/* <Copy>
          <h4 className="text-orange-400">Our Location</h4>
          <h2 className="mt-4 w-full md:w-1/2">
            Visit our office for a personal consultation
          </h2>
        </Copy> */}

        <div className="mt-30 h-[600px] w-full overflow-hidden rounded-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8654697246088!2d7.4777893!3d9.0706397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5cd8d2c635%3A0x5f76a928c3911a6f!2sDurban%20St%2C%20Wuse%20900288%2C%20Abuja!5e0!3m2!1sen!2sng!4v1687087642345!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="my-20 mt-20 md:my-40">
          <div className="justify-between md:flex">
            <Copy>
              <p className="text-xl md:w-1/4">
                Located in the heart of Abuja, our office is easily accessible
                and ready to welcome you. Visit us to discuss your
                infrastructure projects and experience our commitment to
                engineering excellence firsthand.
              </p>

              <p className="mt-8 text-xl md:mt-0 md:w-1/4">
                Strategic base in Abuja's business district, enabling seamless
                collaboration with partners across West Africa. Our central
                location reflects our commitment to accessibility and regional
                excellence.{" "}
              </p>
            </Copy>
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="font-NHD relative h-[100svh] w-full">
        <div className="absolute inset-0 bg-[url(/grid-images/image-13.webp)] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white md:px-10">
          <Copy>
            <h2 className="max-w-3xl">
              Building Tomorrow's Infrastructure, Today
            </h2>
          </Copy>
        </div>
      </section>
    </>
  );
};

export default Contact;
