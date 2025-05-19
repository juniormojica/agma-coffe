import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/CartContext';
import { coffees } from './data/coffees';
import { Coffee } from './types';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoffeeList from './components/CoffeeList';
import CoffeeDetail from './components/CoffeeDetail';
import Cart from './components/Cart';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (coffee: Coffee, quantity = 1) => {
    addToCart(coffee, quantity);
  };

  const handleViewDetails = (coffee: Coffee) => {
    setSelectedCoffee(coffee);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <HeroSection />
        <CoffeeList 
          coffees={coffees}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
        <AboutSection />
      </main>
      
      <Footer />
      
      {selectedCoffee && (
        <CoffeeDetail
          coffee={selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
          onAddToCart={handleAddToCart}
        />
      )}
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;