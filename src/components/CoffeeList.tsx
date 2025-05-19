import React from 'react';
import { Coffee } from '../types';
import CoffeeCard from './CoffeeCard';

interface CoffeeListProps {
  coffees: Coffee[];
  onAddToCart: (coffee: Coffee) => void;
  onViewDetails: (coffee: Coffee) => void;
}

const CoffeeList: React.FC<CoffeeListProps> = ({ coffees, onAddToCart, onViewDetails }) => {
  return (
    <section id="shop" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">Our Premium Selection</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our carefully curated collection of exceptional coffee beans, 
            each with its own unique story and flavor profile.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffees.map(coffee => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeList;