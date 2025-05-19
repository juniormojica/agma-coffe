import React from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import Button from './Button';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here in a real app.');
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-xl">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-amber-900 flex items-center">
            <ShoppingBag size={20} className="mr-2" />
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-grow overflow-auto p-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <ShoppingBag size={64} strokeWidth={1} className="mb-4 opacity-30" />
              <p className="mb-2">Your cart is empty</p>
              <button
                onClick={onClose}
                className="text-amber-800 hover:text-amber-900 underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y">
              {cartItems.map(item => (
                <li key={item.coffee.id} className="py-4 flex">
                  <img
                    src={item.coffee.image}
                    alt={item.coffee.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="text-amber-900 font-medium">{item.coffee.name}</h3>
                    <p className="text-gray-500 text-sm">{formatPrice(item.coffee.price)}</p>
                    
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.coffee.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-amber-800"
                        aria-label={`Decrease quantity of ${item.coffee.name}`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.coffee.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-amber-800"
                        aria-label={`Increase quantity of ${item.coffee.name}`}
                      >
                        <Plus size={16} />
                      </button>
                      
                      <button
                        onClick={() => removeFromCart(item.coffee.id)}
                        className="ml-auto text-gray-400 hover:text-red-500"
                        aria-label={`Remove ${item.coffee.name} from cart`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total</span>
              <span className="text-xl font-bold text-amber-900">{formatPrice(getTotalPrice())}</span>
            </div>
            
            <Button
              fullWidth
              onClick={handleCheckout}
            >
              Checkout
            </Button>
            
            <button
              onClick={clearCart}
              className="mt-2 w-full text-center text-gray-500 hover:text-gray-700"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;