import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="relative h-[800px] sm:h-[100svh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+800px)] sm:h-[calc(100vh+100svh)]">
        <footer className="font-NHD sticky top-[calc(100vh-800px)] flex h-[800px] flex-col justify-between bg-[#0F0F0F] px-4 pt-24 pb-4 text-white sm:top-[calc(100vh-100svh)] sm:h-[100svh] sm:px-10 sm:pt-32 sm:pb-6">
          {/* Top Section */}
          <div className="flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col gap-6 sm:gap-10 md:flex-row md:justify-between">
              <div className="md:w-1/2">
                <h2 className="text-xl sm:text-2xl">
                  Sign up to our newsletter for
                  <br />
                  guidance, support and promotions.
                </h2>
              </div>

              <div className="md:w-1/3">
                <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center">
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full rounded-md bg-[#1F1F1F] px-4 py-2 text-white sm:py-3 md:flex-1"
                  />
                  <button className="rounded-md bg-white px-6 py-2 text-black transition hover:bg-gray-300 sm:py-3">
                    Submit
                  </button>
                </div>

                <div className="mt-4 flex justify-center gap-3 sm:mt-6 sm:justify-start sm:gap-4">
                  {[FacebookLogo, TiktokLogo, InstagramLogo, YoutubeLogo].map(
                    (Icon, index) => (
                      <div
                        key={index}
                        className="cursor-pointer rounded-md bg-[#1F1F1F] p-2 transition hover:bg-gray-700 sm:p-3"
                      >
                        <Icon
                          size={20}
                          className="text-white hover:text-gray-400"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <hr className="border-gray-700" />

            <div className="grid grid-cols-2 gap-6 text-sm sm:flex sm:flex-wrap sm:gap-10">
              <div className="flex flex-col space-y-2 sm:space-y-3">
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
                <Link to="/about" className="hover:text-orange-500">
                  About
                </Link>
                <Link to="/services" className="hover:text-orange-500">
                  Services
                </Link>
                <Link to="/gallery" className="hover:text-orange-500">
                  Gallery
                </Link>
              </div>
              <div>
                <h5 className="mb-2 font-semibold">ADDRESS</h5>
                <p className="mb-2 text-gray-300">
                  22 Durban Street, Wuse 2, Abuja. Nigeria.
                </p>
                <p className="text-gray-300">+234 803 786 9334</p>
                <p className="text-gray-300">+234 703 366 8523</p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Logo and Copyright */}
          <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-gray-700 pt-4 sm:flex-row sm:items-end sm:gap-0 sm:pt-6">
            <div className="w-1/2 sm:w-1/3">
              <img
                src="/logo2.svg"
                alt="Logo"
                className="w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-xs text-gray-400 sm:flex-row sm:gap-6 sm:text-sm">
              <p className="text-center sm:text-left">
                &copy; {new Date().getFullYear()} COAN West Africa Limited.
                <span className="hidden sm:inline"> All Rights Reserved</span>
              </p>
              <div className="hidden gap-6 sm:flex">
                <p className="cursor-pointer hover:text-white">
                  Terms & conditions
                </p>
                <p className="cursor-pointer hover:text-white">
                  Privacy & cookies
                </p>
                <p className="cursor-pointer hover:text-white">
                  Cookie declaration
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
