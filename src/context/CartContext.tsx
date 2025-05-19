import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Coffee, CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (coffee: Coffee, quantity?: number) => void;
  removeFromCart: (coffeeId: string) => void;
  updateQuantity: (coffeeId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (coffee: Coffee, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.coffee.id === coffee.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.coffee.id === coffee.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      
      return [...prevItems, { coffee, quantity }];
    });
  };

  const removeFromCart = (coffeeId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.coffee.id !== coffeeId));
  };

  const updateQuantity = (coffeeId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(coffeeId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.coffee.id === coffeeId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.coffee.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};