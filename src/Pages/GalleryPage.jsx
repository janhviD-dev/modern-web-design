import { Link } from "react-router";
import { useState, useEffect } from "react";
import Ga1 from "../assets/Ga1.jpg";
import Ga2 from "../assets/Ga2.jpg";
import Ga3 from "../assets/Ga3.jpg";
import Ga4 from "../assets/Ga4.jpg";
import img1 from "../assets/Blog_1.webp";
import img2 from "../assets/Blog_2.webp";
import img3 from "../assets/Blog_3.webp";
import img4 from "../assets/logo4.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

function GalleryPage() {
  const [activeGallery, setActiveGallery] = useState("gallery1");

  const sliderImages = [Ga1, Ga2, Ga3, Ga4];

  const gallery2Images = [img1, img2, img3, img4, Ga1, Ga2, Ga3, Ga4];

  const gallery3Images = [Ga1, Ga2, Ga3, Ga4, img1, img2, img3, img4];

  const gallery4Images = [
    { src: Ga1, title: "Nature" },
    { src: Ga2, title: "Architecture" },
    { src: Ga3, title: "Travel" },
    { src: Ga4, title: "Lifestyle" },
    { src: img1, title: "Moments" },
    { src: img2, title: "Stories" },
    { src: img3, title: "Creative" },
    { src: img4, title: "Design" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(slider);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % sliderImages.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));

  const tabs = [
    { key: "gallery1", label: "Gallery 1" },
    { key: "gallery2", label: "Gallery 2" },
    { key: "gallery3", label: "Gallery 3" },
    { key: "gallery4", label: "Gallery 4" },
  ];

  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* ── HEADER ── */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-20 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif opacity-90">
          Gallery
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl font-serif text-gray-600 leading-relaxed">
          Curabitur sit amet purus semper tortor tempor lacinia eu in tortor.
          Integer nisl risus, condimentum sed lacinia in, tincidunt eget mi.
          Praesent finibus mollis blandit. Suspendisse vulputate turpis et erat
          iaculis viverra.
        </p>
      </div>

      {/* ── TABS ── */}
      <div className="flex justify-center gap-4 sm:gap-8 flex-wrap mb-10 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveGallery(tab.key)}
            className={`relative text-sm sm:text-base md:text-lg font-semibold tracking-widest pb-2 transition-colors duration-300
              ${
                activeGallery === tab.key
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-emerald-700"
                  : "text-emerald-900 opacity-60 hover:opacity-100"
              }`}
          >
            {tab.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ── GALLERY 1 — Slider ── */}
      {activeGallery === "gallery1" && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={sliderImages[current]}
              alt="slider"
              className="w-full h-[220px] sm:h-[380px] md:h-[520px] object-cover transition duration-700"
            />

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === i ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center mt-4 gap-2 flex-wrap">
            {sliderImages.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrent(index)}
                className={`w-20 sm:w-24 h-14 sm:h-16 object-cover cursor-pointer rounded-lg transition duration-300
                  ${
                    current === index
                      ? "opacity-100 scale-105 ring-2 ring-emerald-700"
                      : "opacity-50 hover:opacity-100"
                  }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── GALLERY 2 — Grid ── */}
      {activeGallery === "gallery2" && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2">
            {gallery2Images.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={img}
                  alt={`gallery ${index + 1}`}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover cursor-pointer transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── GALLERY 3 — Masonry ── */}
      {activeGallery === "gallery3" && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px]">
            {gallery3Images.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-xl
                  ${index === 0 ? "md:row-span-2" : ""}
                  ${index === 3 ? "md:col-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`gallery3 ${index + 1}`}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── GALLERY 4 — Hover Cards ── */}
      {activeGallery === "gallery4" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {gallery4Images.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500 rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
