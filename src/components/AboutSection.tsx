import React from 'react';
import Button from './Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2159146/pexels-photo-2159146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Coffee farm" 
                className="rounded-lg shadow-xl"
              />
              <img 
                src="https://images.pexels.com/photos/5858175/pexels-photo-5858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Coffee roasting" 
                className="rounded-lg shadow-xl absolute -bottom-10 -right-10 w-2/3 border-4 border-white hidden md:block"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 2018, Brew Origin was born from a simple yet profound passion: to connect coffee 
              lovers with exceptional beans that tell a story of origin, craftsmanship, and sustainability.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We travel the world to discover small-batch coffee producers who follow traditional methods 
              and sustainable practices. Each bean in our collection is carefully selected, 
              ethically sourced, and roasted to perfection to bring out its unique character.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mission extends beyond selling coffee. We're committed to fostering direct 
              relationships with farmers, ensuring fair compensation, and promoting 
              environmentally responsible cultivation methods.
            </p>
            
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;