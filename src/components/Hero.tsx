'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/banner-images/phone1.jpg',
      title: 'Premium Smartphones',
      subtitle: 'Discover cutting-edge mobile devices',
    },
    {
      image: '/banner-images/phone2.jpg',
      title: 'Innovation Meets Style',
      subtitle: 'Elevate your digital experience',
    },
    {
      image: '/banner-images/phone3.jpg',
      title: 'Next-Gen Accessories',
      subtitle: 'Engineered for excellence',
    },
    {
      image: '/banner-images/phone4.jpg',
      title: 'Advanced Phone Devices',
      subtitle: 'Intelligent mobile solutions for you',
    },
    {
      image: '/banner-images/phone5.jpg',
      title: 'Exclusive Gadgets',
      subtitle: 'Limited edition tech releases',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[35vh] sm:h-[45vh] md:h-[55vh] mt-20 sm:mt-24 overflow-hidden bg-gray-200">
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 font-light tracking-wide">
                {slides[currentSlide].subtitle}
              </p>
              <Link href="/shop" className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 via-slate-800 to-black text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:from-slate-500 hover:via-slate-700 hover:to-gray-900 hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl mt-6 cursor-pointer">
                Explore Collection
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
