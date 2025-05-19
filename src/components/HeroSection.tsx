import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/4920616/pexels-photo-4920616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 z-10 text-center md:text-left md:ml-12 lg:ml-24">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Exceptional Coffee for Extraordinary Moments
          </h1>
          <p className="text-xl text-cream-100 mb-8 leading-relaxed">
            Discover our collection of ethically sourced, premium coffee beans from Colombia
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:bg-opacity-10"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <button
          onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce text-white"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;