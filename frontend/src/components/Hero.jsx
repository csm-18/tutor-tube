import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "Welcome to TutorTube",
      subtitle: "Your go-to platform for learning and teaching.",
      image: "slide-1-bg-new.jpg",
    },
    {
      id: 2,
      title: "Learn Anytime, Anywhere",
      subtitle: "Access quality content at your fingertips.",
      image: "slide2-bg.png",
    },
    {
      id: 3,
      title: "Join Our Community",
      subtitle: "Connect with learners and educators worldwide.",
      image: "slide3-bg.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[16rem] sm:h-[22rem] md:h-[28rem] lg:h-[34rem] xl:h-[40rem] overflow-hidden shadow-lg">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 md:px-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 drop-shadow-lg leading-snug">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium max-w-[85%] sm:max-w-[70%] md:max-w-[60%] mx-auto drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 lg:p-4 rounded-full text-white transition"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 lg:p-4 rounded-full text-white transition"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 w-full flex justify-center space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition rounded-full ${
              index === current
                ? "bg-white w-3 h-3 sm:w-4 sm:h-4"
                : "bg-gray-400 w-2 h-2 sm:w-3 sm:h-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}