import React, { useState } from 'react';
import './Seaech.css'
import {Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'

const ProductList = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div >

         <div className='sea'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      </div>

      <div className="allcard">
          
        {filteredProducts.map((product) => (   

          <div key={product.id}>
            
            <div className="card">
                <img src={product.image} alt="" />
                <h3>Name : {product.name}</h3>
                <div className="card-content">
                <p>Desc : {product.desc}</p>
                <p> Price : {product.price}</p>

                <div className="bbb">
                <Link to={`/productdetails/${product._id}`}><Button colorScheme='red' style={{marginRight:"40px", marginLeft:"10px"}}>Details</Button></Link> 
                <Link to={`/productdetails/${product._id}`}><Button colorScheme='blue'>AddToCart</Button></Link>
                </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
