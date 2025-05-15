import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function PulsingMap() {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const animatingCirclesRef = useRef<Element[]>([]);
  const originalColorsRef = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    // Fetch your SVG file
    fetch("/Mapdotted.svg")
      .then((response) => response.text())
      .then((data) => {
        setSvgContent(data);
      })
      .catch((err) => console.error("Error loading SVG:", err));
  }, []);

  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    // Insert SVG content into the container
    containerRef.current.innerHTML = svgContent;

    // Find all circles in the SVG
    const svgElement = containerRef.current.querySelector("svg");
    if (!svgElement) return;

    // Ensure SVG takes full width/height
    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");

    const allCircles = Array.from(svgElement.querySelectorAll("circle"));

    // Store the original colors of all circles
    allCircles.forEach((circle, index) => {
      const id = circle.id || `circle-${index}`;
      if (!circle.id) circle.id = id;
      originalColorsRef.current.set(
        id,
        circle.getAttribute("fill") || "#FF8000",
      );
    });

    // Function to pick random circles to animate
    const animateRandomCircles = () => {
      // Reset previously animated circles back to original color
      animatingCirclesRef.current.forEach((circle) => {
        const id = circle.id;
        circle.setAttribute(
          "fill",
          originalColorsRef.current.get(id) || "#FF8000",
        );
      });

      // Select 10 random circles to animate
      const shuffled = [...allCircles].sort(() => 0.5 - Math.random());
      const selectedCircles = shuffled.slice(0, 10);
      animatingCirclesRef.current = selectedCircles;

      // Change selected circles to white
      selectedCircles.forEach((circle) => {
        circle.setAttribute("fill", "#FFFFFF");

        // Create a pulsing effect with GSAP
        // gsap.fromTo(
        //   circle,
        //   { scale: 1 },
        //   {
        //     scale: 1.2,
        //     duration: 0.2,
        //     yoyo: true,
        //     repeat: 1,
        //     ease: "power1.inOut",
        //     transformOrigin: "center center",
        //   },
        // );
      });

      // Set timeout for the next animation
      timeoutRef.current = window.setTimeout(animateRandomCircles, 1000);
    };

    // Start the animation cycle
    animateRandomCircles();

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [svgContent]);

  return (
    <div className="flex h-full w-full items-center justify-center bg-black p-10">
      <div ref={containerRef} className="w-1/2" />
    </div>
  );
}
