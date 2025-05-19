import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { Coffee } from '../types';
import { formatPrice } from '../utils/formatters';
import Button from './Button';

interface CoffeeDetailProps {
  coffee: Coffee;
  onClose: () => void;
  onAddToCart: (coffee: Coffee, quantity: number) => void;
}

const CoffeeDetail: React.FC<CoffeeDetailProps> = ({ coffee, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(coffee, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src={coffee.image} 
              alt={coffee.name} 
              className="w-full h-72 md:h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8">
            <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {coffee.roastLevel} Roast
            </span>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-2">
              {coffee.name}
            </h2>
            
            <p className="text-amber-700 italic mb-4">{coffee.origin}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-amber-900 mb-2">Tasting Notes</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {coffee.flavor.map(flavor => (
                  <span key={flavor} className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm">
                    {flavor}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {coffee.description}
              </p>
            </div>
            
            <p className="text-2xl font-bold text-amber-900 mb-6">
              {formatPrice(coffee.price)}
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gray-700">Quantity</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={handleDecrement}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-1 border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button fullWidth onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                fullWidth
                onClick={handleAddToCart}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetail;