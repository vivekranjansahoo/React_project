
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

 
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };


  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
