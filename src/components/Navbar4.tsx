import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ add useLocation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { UseLenis } from "./LenisContext"; // ✅ import your scroll context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const location = useLocation(); // ✅ get current pathname
  const lenis = UseLenis(); // ✅ use your scroll instance

  useGSAP(() => {
    gsap.set(overlayRef.current, { xPercent: -100 });
  }, []);

  const toggleMenu = () => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.to(overlay, {
      xPercent: isOpen ? -100 : 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
    setIsOpen(!isOpen);
  };
  //@ts-ignore
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      lenis?.scrollTo(0, { immediate: true }); // ✅ manually scroll if already on same path
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-[9999] flex h-18 w-full items-center bg-white px-4 select-none md:px-10">
        <div className="flex w-full items-center justify-between">
          <Link
            to="/"
            className="flex h-16 items-center"
            onClick={() => handleNavClick("/")}
          >
            <img
              src="/logo3.svg"
              alt="Company Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            <div className="flex space-x-6 text-base text-black">
              <Link
                to="/"
                className="hover:text-orange-500"
                onClick={() => handleNavClick("/")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-orange-500"
                onClick={() => handleNavClick("/about")}
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:text-orange-500"
                onClick={() => handleNavClick("/services")}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="hover:text-orange-500"
                onClick={() => handleNavClick("/gallery")}
              >
                Gallery
              </Link>
            </div>

            <div className="ml-4 flex-shrink-0 rounded-md bg-black/10 px-4 py-1.5">
              <Link
                to="/contact"
                className="text-base text-black"
                onClick={() => handleNavClick("/contact")}
              >
                Contact
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="group flex flex-col gap-[7px] focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[2px] w-7 bg-black transition-all duration-300 ${isOpen ? "translate-y-[9px] -rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-7 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-7 bg-black transition-all duration-300 ${isOpen ? "-translate-y-[9px] rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="bg-opacity-95 fixed inset-0 z-40 flex bg-black md:hidden"
      >
        <div className="w-1/2 bg-white px-20 py-32">
          <div className="flex flex-col space-y-8 text-3xl">
            <Link
              to="/"
              className="hover:text-gray-600"
              onClick={() => {
                handleNavClick("/");
                toggleMenu();
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-600"
              onClick={() => {
                handleNavClick("/about");
                toggleMenu();
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-600"
              onClick={() => {
                handleNavClick("/contact");
                toggleMenu();
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
