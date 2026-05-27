import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ramya1 from '../../assets/ramya1.png';
import ramya2 from '../../assets/ramya2.png';

const slides = [
  {
    image: ramya1,
    pretitle: "Efficient and Effective",
    title: "WATER PURIFIERS"
  },
  {
    image: ramya2,
    pretitle: "Advanced Technology",
    title: "MINERAL RO PURIFIER"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] bg-gradient-to-r from-[#6BBDFB] to-[#79C7FF] overflow-hidden">
      
      {/* --- Background Decorative Elements --- */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_50%,_#A1D8FF_0%,_transparent_60%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.08] bg-[radial-gradient(#ffffff_2px,_transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.08] bg-[radial-gradient(#ffffff_2px,_transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>

      {/* Bottom White Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0 pointer-events-none">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px] lg:h-[180px]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* --- Slider Controls --- */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white p-2.5 md:p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-gray-50 hover:scale-110 transition-all active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A]" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white p-2.5 md:p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-gray-50 hover:scale-110 transition-all active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A]" />
      </button>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Typography */}
        <div 
          key={`text-${currentSlide}`}
          className="flex-1 text-center md:text-left mt-16 md:mt-0 flex flex-col items-center md:items-start pl-0 md:pl-12 lg:pl-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          <h2 className="text-[#1A1A1A] text-lg md:text-xl lg:text-3xl tracking-wide uppercase font-medium mb-2 md:mb-3">
            {slides[currentSlide].pretitle}
          </h2>
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-extrabold tracking-tight leading-[1.1]">
            {slides[currentSlide].title}
          </h1>
        </div>

        {/* Right Product Image */}
        <div 
          key={`img-${currentSlide}`}
          className="flex-1 flex justify-center items-center h-full pb-16 md:pb-0 relative animate-in fade-in zoom-in-95 duration-700"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Water Purifier" 
            className="max-h-[280px] md:max-h-[400px] lg:max-h-[500px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] z-10"
          />
        </div>
        
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index 
                ? "w-8 h-2.5 bg-white shadow-md" 
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;