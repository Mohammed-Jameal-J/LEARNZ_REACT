import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Shopping And Department Store.",
      description:
        "Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.",
      bgColor: "bg-gradient-to-r from-blue-200 to-blue-100",
      buttonText: "Learn More",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Exclusive Deals & Discounts",
      description:
        "Get up to 50% off on selected items. Limited time offer for our valued customers.",
      bgColor: "bg-gradient-to-r from-yellow-200 to-orange-100",
      buttonText: "Shop Now",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop",
    },
    {
      id: 3,
      title: "New Arrivals Every Week",
      description:
        "Discover the latest products and trends added to our collection.",
      bgColor: "bg-gradient-to-r from-green-200 to-cyan-100",
      buttonText: "Explore",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background */}
            <div className={`absolute inset-0 ${slide.bgColor}`}></div>

            {/* Content Container */}
            <div className="relative h-full flex items-center justify-center md:justify-start">
              <div className="max-w-7xl mx-auto w-full px-12 sm:px-16 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full py-8 md:py-0">
                  {/* Text Content - Centered on mobile */}
                  <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 max-w-sm md:max-w-none">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-xl max-w-md">
                      {slide.description}
                    </p>
                    <div>
                      <button className="px-6 sm:px-8 py-2 sm:py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-full transition transform hover:scale-105 shadow-lg">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-full max-w-xs h-64 md:h-80 rounded-3xl shadow-2xl overflow-hidden transform -rotate-12 hover:rotate-0 transition-transform duration-300 bg-white/80 backdrop-blur-md border border-white/20">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-emerald-700 p-2 sm:p-3 rounded-full shadow-lg transition backdrop-blur-md"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-emerald-700 p-2 sm:p-3 rounded-full shadow-lg transition backdrop-blur-md"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-3 bg-white/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-emerald-700 w-6 sm:w-8"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 right-4 z-20 text-white bg-white/20 backdrop-blur-md border border-white/30 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
