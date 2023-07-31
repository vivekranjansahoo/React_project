import React from 'react';

const Productitem = ({ id, name, price, image, addToCart }) => {
  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Productitem;
