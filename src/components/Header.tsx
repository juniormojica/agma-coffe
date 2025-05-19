import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-amber-900">AGMA-COFFE</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-amber-900 hover:text-amber-700 transition-colors">Home</a>
          <a href="#shop" className="text-amber-900 hover:text-amber-700 transition-colors">Shop</a>
          <a href="#about" className="text-amber-900 hover:text-amber-700 transition-colors">About</a>
          <button 
            onClick={onCartClick}
            className="relative p-2 text-amber-900 hover:text-amber-700 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={24} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={onCartClick}
            className="relative p-2 mr-2 text-amber-900"
            aria-label="Cart"
          >
            <ShoppingBag size={22} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-amber-900"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#" 
              className="block py-2 text-amber-900 hover:text-amber-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#shop" 
              className="block py-2 text-amber-900 hover:text-amber-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#about" 
              className="block py-2 text-amber-900 hover:text-amber-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;