
import { useState, useEffect } from "react";
import A1 from "../assets/Ab1.jpg";
import A2 from "../assets/Ab2.jpg";
import A3 from "../assets/Ab3.jpg";

function AboutPage() {
  const images = [A1, A2, A3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <main className="w-full overflow-hidden bg-white text-black">

      {/* Hero Slider */}
      <section className="relative h-[75vh] min-h-[500px] w-full overflow-hidden sm:h-[85vh] lg:h-screen">

        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`About page slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Hero Text */}
        <div className="absolute bottom-24 left-6 z-10 max-w-4xl sm:bottom-28 sm:left-12 lg:bottom-32 lg:left-20">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white sm:text-sm">
            Get to know us
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            More than
            <br />
            a name<span className="font-normal">.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-white sm:text-base">
            Every great journey begins with a story.
            Discover ours.
          </p>

          <div className="mt-7 h-px w-16 bg-white sm:w-24" />

        </div>

        {/* Previous Slide */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 text-2xl text-white transition-colors duration-300 hover:bg-white hover:text-black sm:left-8"
        >
          &#8249;
        </button>

        {/* Next Slide */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 text-2xl text-white transition-colors duration-300 hover:bg-white hover:text-black sm:right-8"
        >
          &#8250;
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-6 z-20 flex items-center gap-2 sm:bottom-10 sm:left-12 lg:left-20">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
              className={`h-1 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-white"
                  : "w-4 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3 text-sm text-white sm:bottom-10 sm:right-10">
          <span>0{current + 1}</span>
          <span className="h-px w-8 bg-white/80" />
          <span>0{images.length}</span>
        </div>

      </section>

      {/* About Us Section */}
      <section className="px-5 py-20 sm:px-10 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-black" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
              Who We Are
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              A story shaped
              <br />
              by <span className="font-normal">ideas.</span>
            </h2>

            <div>
              <p className="text-base leading-8 text-black sm:text-lg">
                Every great journey starts with an idea. We believe
                in creating meaningful experiences, building strong
                connections, and turning ideas into something real.
              </p>

              <p className="mt-5 text-base leading-8 text-black sm:text-lg">
                Our story is shaped by the people we work with, the
                challenges we take on, and the passion we bring to
                everything we do.
              </p>

              <div className="mt-9 border-t border-black/20 pt-5">
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-black">
                  Built with purpose. Driven by ideas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default AboutPage;
