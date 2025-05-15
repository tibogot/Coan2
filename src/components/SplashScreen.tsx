import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SplashLoaderProps {
  onLoadComplete?: () => void;
  duration?: number;
  delay?: number;
  logoSrc?: string;
  children?: React.ReactNode;
}

const SplashLoader = ({
  onLoadComplete,
  duration = 1.5,
  delay = 1,
  logoSrc = "./logo.svg",
  children,
}: SplashLoaderProps) => {
  const splashRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling when splash screen is active
    document.body.style.overflow = "hidden";

    // Document has loaded, now animate the splash screen
    const tl = gsap.timeline({
      onComplete: () => {
        // Re-enable scrolling after animation completes
        document.body.style.overflow = "";

        // Set splash to not visible to remove it from DOM
        setIsVisible(false);

        // Call the onLoadComplete callback if provided
        if (onLoadComplete) {
          onLoadComplete();
        }
      },
    });

    // Add animations to the timeline
    tl.to(splashRef.current, {
      y: "-100%",
      duration: duration,
      ease: "power3.inOut",
      delay: delay,
    });

    // Cleanup function
    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [duration, delay, onLoadComplete]);

  return (
    <>
      {isVisible && (
        <div
          ref={splashRef}
          className="splash fixed top-0 left-0 z-[99999] flex h-screen w-full items-center justify-center bg-black select-none"
        >
          <img src={logoSrc} alt="Logo" className="w-1/3" />
        </div>
      )}
      {children}
    </>
  );
};

export default SplashLoader;
