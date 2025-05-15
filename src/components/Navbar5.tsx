import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { UseLenis } from "./LenisContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const navRef = useRef(null);
  const textRef = useRef(null);
  const location = useLocation();
  const lenis = UseLenis();

  // Helper function to check if element is currently visible

  //@ts-ignore
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= 0;
  };

  useGSAP(() => {
    gsap.set(overlayRef.current, { xPercent: -100 });

    // Initialize nav background state
    //@ts-ignore

    const navBg = navRef.current?.querySelector(".nav-bg");
    if (navBg) {
      // Check if we're on a page with hero section
      const heroSection = document.querySelector(".hero");
      if (heroSection && isElementInViewport(heroSection)) {
        // If we're at the hero, background should be hidden
        gsap.set(navBg, { scaleY: 0 });
      } else {
        // Otherwise show the white background
        gsap.set(navBg, { scaleY: 1 });
      }
    }
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
      lenis?.scrollTo(0, { immediate: true });
    }
  };

  // Setup navbar color based on current page and hero visibility
  useEffect(() => {
    const setupNavbarObserver = () => {
      const heroSection = document.querySelector(".hero");
      if (!heroSection || !navRef.current || !textRef.current) {
        // If no hero section on this page, ensure navbar is white with black text
        if (navRef.current && textRef.current) {
          const nav = navRef.current;
          //@ts-ignore

          const navBg = nav.querySelector(".nav-bg");
          //@ts-ignore

          const links = textRef.current.querySelectorAll("a, span");

          // Make sure the white background is fully visible
          gsap.to(navBg, {
            scaleY: 1,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(links, {
            color: "#000000",
            duration: 0.4,
            ease: "power2.out",
          });
        }
        return;
      }

      const nav = navRef.current;
      //@ts-ignore

      const navBg = nav.querySelector(".nav-bg");
      //@ts-ignore

      const links = textRef.current.querySelectorAll("a, span");

      // Set initial state based on if hero is currently visible
      const heroVisible = isElementInViewport(heroSection);
      if (heroVisible) {
        gsap.set(navBg, { scaleY: 0 });
        gsap.set(links, { color: "#ffffff" });
      } else {
        gsap.set(navBg, { scaleY: 1 });
        gsap.set(links, { color: "#000000" });
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Animate white background out and text to white
            gsap.to(navBg, {
              scaleY: 0,
              duration: 0.6,
              ease: "power3.out",
            });

            gsap.to(links, {
              color: "#ffffff",
              duration: 0.4,
              ease: "power2.out",
            });
          } else {
            // Animate white background in and text to black
            gsap.to(navBg, {
              scaleY: 1,
              duration: 0.6,
              ease: "power3.out",
            });

            gsap.to(links, {
              color: "#000000",
              duration: 0.4,
              ease: "power2.out",
            });
          }
        },
        {
          root: null,
          threshold: 0.1,
        },
      );

      observer.observe(heroSection);
      return () => observer.disconnect();
    };

    // Helper function to check if element is currently visible
    //@ts-ignore

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= 0;
    };

    // Small timeout to ensure DOM is ready after navigation
    const timer = setTimeout(() => {
      setupNavbarObserver();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-run when location changes

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-[9999] flex h-18 w-full items-center overflow-hidden px-4 select-none md:px-10"
      >
        {/* White background overlay that slides in from top */}
        <div className="nav-bg absolute inset-0 origin-top bg-white"></div>
        <div
          ref={textRef}
          className="relative z-10 flex w-full items-center justify-between"
        >
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
            <div className="flex space-x-6 text-base">
              <Link to="/" onClick={() => handleNavClick("/")}>
                Home
              </Link>
              <Link to="/about" onClick={() => handleNavClick("/about")}>
                About
              </Link>
              <Link to="/services" onClick={() => handleNavClick("/services")}>
                Services
              </Link>
              <Link to="/gallery" onClick={() => handleNavClick("/gallery")}>
                Gallery
              </Link>
            </div>

            <div className="ml-4 flex-shrink-0 rounded-md bg-black/10 px-4 py-1.5">
              <Link to="/contact" onClick={() => handleNavClick("/contact")}>
                Contact
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="group flex flex-col gap-[7px] focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {[...Array(3)].map((_, idx) => (
              <span
                key={idx}
                className={`h-[2px] w-7 transition-all duration-300 ${
                  isOpen
                    ? idx === 0
                      ? "translate-y-[9px] -rotate-45"
                      : idx === 1
                        ? "opacity-0"
                        : "-translate-y-[9px] rotate-45"
                    : ""
                } bg-black`}
              />
            ))}
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
              to="/services"
              className="hover:text-gray-600"
              onClick={() => {
                handleNavClick("/services");
                toggleMenu();
              }}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="hover:text-gray-600"
              onClick={() => {
                handleNavClick("/gallery");
                toggleMenu();
              }}
            >
              Gallery
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
