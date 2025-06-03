import { useEffect, useRef } from "react";
import gsap from "gsap";

const Gallery = () => {
  const images = Array.from(
    { length: 12 },
    (_, i) => `https://picsum.photos/seed/grid-${i}/800/800`,
  );
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Set the first image on initial load
  useEffect(() => {
    const firstImage = images[0];
    const imgEl = document.createElement("img");
    imgEl.src = firstImage;
    imgEl.alt = "Initial preview";
    imgEl.className = "absolute inset-0 h-full w-full object-cover";
    imgEl.style.clipPath = "inset(0 0 0 0%)";
    previewContainerRef.current?.appendChild(imgEl);
  }, [images]);

  const handleImageClick = (src: string) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const imgEl = document.createElement("img");
      imgEl.src = src;
      imgEl.alt = "Preview";
      imgEl.className = "absolute inset-0 h-full w-full object-cover";
      imgEl.style.clipPath = "inset(0 0 0 100%)";

      if (previewContainerRef.current) {
        const container = previewContainerRef.current;
        const previousImage = container.lastElementChild as HTMLElement;

        container.appendChild(imgEl);

        // Animate new image revealing with clip-path
        gsap.to(imgEl, {
          clipPath: "inset(0 0 0 0%)",
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            // Optional: return previous image to normal after effect
            if (previousImage) {
              gsap.to(previousImage, {
                scale: 1,
                xPercent: 0,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          },
        });

        // Animate previous image underneath
        if (previousImage) {
          gsap.to(previousImage, {
            scale: 1.5,
            xPercent: -25,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      }
    };
  };

  return (
    <div className="font-NHD maincontainer relative flex h-screen w-full flex-col px-4 py-10 md:px-10">
      {/* Categories Row */}
      <div className="categories-row mb-8 flex w-full flex-wrap">
        {[
          "(Shadows)",
          "(Light Exploration)",
          "(Clay)",
          "(Concrete Forms)",
          "(Mixed Materials)",
          "(Closeups)",
        ].map((title, index) => (
          <div key={index} className="category mb-4 w-1/6 px-2">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              nobis, possimus!
            </p>
          </div>
        ))}
      </div>

      {/* Grid and Preview */}
      <div className="flex h-full w-full flex-row select-none">
        {/* Grid - Left */}
        <div className="gallery flex w-full flex-col lg:w-1/3">
          <div className="grid grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="item mb-4 flex cursor-pointer flex-col items-center select-none"
                onClick={() => handleImageClick(src)}
              >
                <div className="index mb-1">
                  <p>{index + 1}</p>
                </div>
                <div className="img aspect-square w-full">
                  <img
                    className="h-full w-full object-cover"
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer - Middle */}
        <div className="hidden lg:block lg:w-1/3"></div>

        {/* Preview - Right */}
        <div className="preview mt-8 h-64 w-full lg:mt-0 lg:h-full lg:w-1/3">
          <div
            className="preview-container relative h-full w-full overflow-hidden"
            ref={previewContainerRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
