import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Copy from "../components/Copy2";

const Gallery = () => {
  const images = Array.from(
    { length: 12 },
    (_, i) => `/grid-images/image-${i + 1}.webp`,
  );
  const previewContainerRef = useRef(null);
  const [isInitialImageLoaded, setIsInitialImageLoaded] = useState(false);

  // Preload the first few images for better performance
  useEffect(() => {
    // Preload the first image and a few more
    const imagesToPreload = images.slice(0, 4); // Preload first 4 images

    Promise.all(
      imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
        });
      }),
    ).then(() => {
      // Set the first image when preloaded
      if (previewContainerRef.current && !isInitialImageLoaded) {
        const imgEl = document.createElement("img");
        imgEl.src = images[0];
        imgEl.alt = "Initial preview";
        imgEl.className = "absolute inset-0 h-full w-full object-cover";
        imgEl.style.clipPath = "inset(0 0 0 0%)";
        //@ts-ignore
        previewContainerRef.current.appendChild(imgEl);
        setIsInitialImageLoaded(true);
      }
    });
  }, [images, isInitialImageLoaded]);
  //@ts-ignore

  const handleImageClick = (src) => {
    // Only proceed if the preview container exists
    if (!previewContainerRef.current) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      const imgEl = document.createElement("img");
      imgEl.src = src;
      imgEl.alt = "Preview";
      imgEl.className = "absolute inset-0 h-full w-full object-cover";
      imgEl.style.clipPath = "inset(0 0 0 100%)";

      const container = previewContainerRef.current;
      //@ts-ignore

      const previousImage = container.lastElementChild;

      //@ts-ignore

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
    };
  };

  return (
    <>
      <section className="hero font-NHD relative -mt-18 flex h-[100svh] w-full items-end bg-red-300 p-4 text-white md:p-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(/gallery-img.webp)]"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        <Copy isHero>
          <h1 className="max-w-4xl text-3xl font-bold">
            Creating standout brands for startups that bring joy and leave
            lasting impressions.
          </h1>
        </Copy>
      </section>
      <div className="font-NHD maincontainer relative flex w-full flex-col px-4 pt-10 pb-20 md:h-screen md:px-10 md:pt-20">
        {/* Categories Row */}
        <div className="w-full">
          <h1 className="mt-4 w-full md:w-3/4">
            A construction <span className="text-orange-400">company,</span>
            <br />
            offering integrated solution and
            <br />
            related
            <span className="text-orange-400"> services.</span>
          </h1>
        </div>
        {/* Grid and Preview */}
        <div className="my-10 flex h-full w-full flex-row select-none">
          {/* Grid - Left */}
          <div className="gallery flex w-full flex-col lg:w-1/3">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="item mb-4 flex cursor-pointer flex-col items-center select-none"
                  onClick={() => handleImageClick(src)}
                >
                  <div className="img aspect-square w-full">
                    <img
                      className="h-full w-full object-cover"
                      src={src}
                      loading="lazy"
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
          <div className="preview hidden lg:block lg:h-full lg:w-1/3">
            {!isInitialImageLoaded && (
              <div className="flex h-full w-full items-center justify-center bg-gray-100">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-orange-400"></div>
              </div>
            )}
            <div
              className="preview-container relative h-full w-full overflow-hidden"
              ref={previewContainerRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
