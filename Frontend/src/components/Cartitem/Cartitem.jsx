import React from 'react';

const Cartitem = ({ id, name, price, quantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cartitem;
