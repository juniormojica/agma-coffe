import React from 'react';
import { Coffee } from '../types';
import { formatPrice } from '../utils/formatters';
import Button from './Button';

interface CoffeeCardProps {
  coffee: Coffee;
  onAddToCart: (coffee: Coffee) => void;
  onViewDetails: (coffee: Coffee) => void;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, onAddToCart, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      <div 
        className="h-64 overflow-hidden relative cursor-pointer"
        onClick={() => onViewDetails(coffee)}
      >
        <img 
          src={coffee.image} 
          alt={coffee.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-amber-800 text-white px-2 py-1 rounded text-xs font-medium">
          {coffee.roastLevel} Roast
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 
          className="text-xl font-serif font-bold text-amber-900 mb-1 cursor-pointer hover:text-amber-700"
          onClick={() => onViewDetails(coffee)}
        >
          {coffee.name}
        </h3>
        <p className="text-amber-700 text-sm mb-3 italic">{coffee.origin}</p>
        
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
          {coffee.description}
        </p>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xl font-medium text-amber-900">{formatPrice(coffee.price)}</span>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onViewDetails(coffee)}
            >
              Details
            </Button>
            <Button 
              size="sm"
              onClick={() => onAddToCart(coffee)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;