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

  // Add hover color override via injected CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .nav-link span:hover {
        color: #f97316 !important;
        transition: color 0.3s ease;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
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

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      lenis?.scrollTo(0, { immediate: true });
    }
  };

  // Helper to set navbar styles
  const setNavbarStyles = (isDark = true) => {
    const navBg = navRef.current?.querySelector(".nav-bg");
    const links = textRef.current?.querySelectorAll("a > span, span");
    const menuBars = document.querySelectorAll(".menu-bar");

    gsap.to(navBg, {
      scaleY: isDark ? 0 : 1,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(links, {
      color: isDark ? "#ffffff" : "#000000",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(menuBars, {
      backgroundColor: isDark ? "#ffffff" : "#000000",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Set initial state with GSAP
  useGSAP(() => {
    gsap.set(overlayRef.current, { xPercent: -100 });

    const navBg = navRef.current?.querySelector(".nav-bg");
    const heroSection = document.querySelector(".hero");

    if (!heroSection || !isElementInViewport(heroSection)) {
      gsap.set(navBg, { scaleY: 1 });
      setNavbarStyles(false); // black text
    } else {
      gsap.set(navBg, { scaleY: 0 });
      setNavbarStyles(true); // white text
    }
  }, []);

  // Intersection observer for hero section
  useEffect(() => {
    const heroSection = document.querySelector(".hero");
    if (!navRef.current || !textRef.current) return;

    if (!heroSection) {
      setNavbarStyles(false); // No hero, use light variant
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavbarStyles(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [location.pathname]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= 0;
  };

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-[9999] flex h-18 w-full items-center overflow-hidden px-4 select-none md:px-10"
      >
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
              src="/coannav.svg"
              alt="Company Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            <div className="flex space-x-6 text-base">
              {["Home", "About", "Services", "Gallery"].map((text) => (
                <Link
                  key={text}
                  to={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                  onClick={() =>
                    handleNavClick(
                      `/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`,
                    )
                  }
                  className="nav-link relative"
                >
                  <span>{text}</span>
                </Link>
              ))}
            </div>
            <div className="ml-4 flex-shrink-0 rounded-md bg-black/10 px-4 py-1.5">
              <Link
                to="/contact"
                onClick={() => handleNavClick("/contact")}
                className="nav-link relative"
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Burger Menu */}
          <button
            onClick={toggleMenu}
            className="group flex flex-col gap-[7px] focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {[...Array(3)].map((_, idx) => (
              <span
                key={idx}
                className={`menu-bar h-[2px] w-7 transition-all duration-300 ${
                  isOpen
                    ? idx === 0
                      ? "translate-y-[9px] -rotate-45"
                      : idx === 1
                        ? "opacity-0"
                        : "-translate-y-[9px] rotate-45"
                    : ""
                }`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="bg-opacity-95 fixed inset-0 z-40 flex bg-black md:hidden"
      >
        <div className="w-1/2 bg-white px-20 py-32">
          <div className="flex flex-col space-y-8 text-3xl">
            {["Home", "About", "Services", "Gallery", "Contact"].map((text) => (
              <Link
                key={text}
                to={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                className="nav-link relative"
                onClick={() => {
                  handleNavClick(
                    `/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`,
                  );
                  toggleMenu();
                }}
              >
                <span className="hover:text-orange-500">{text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
