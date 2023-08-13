import React, { useState } from 'react';
import './Seaech.css'
import {Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import CartList from '../../Pages/Cart/CartList/CartList';
import Topnavv from '../Topnav/Topnavv';
import Navbar from '../navbar/Navbar';

const ProductList = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);

  const addTocart=(data)=>{
    console.log(data);
    
    setCart([...cart,{ ...data,quantity:1}]);
    alert("item added to cart");
  }

  const handleShow =(value)=>{
    setShowCart(value);
  }

  return (
    
    <div > 
        <Topnavv count={cart.length} handleShow={handleShow}/>
        <Navbar/>
        {/* <CartIcon count={cart.length} handleShow={handleShow}/> */}

        {
            showCart ? <CartList cart={cart}/> : null
        }
        

         <div className='sea'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{marginTop:"10px"}}
      />
      </div>

      <div className="allcard">
          
        {filteredProducts.map((product) => (   

          <div key={product.id}>
            
            <div className="card">
                <img src={product.image} alt="" />
               
                <div className="card-content">
                <h3>Name : {product.name}</h3>
                {/* <p>Desc : {product.desc}</p> */}
                <p>Catagory : {product.catagory}</p>
                <p>Color : {product.color}</p>
                <p> Price : {product.price}</p>

                <div className="bbb">
                <Link to={`/productdetails/${product._id}`}><Button colorScheme='red' position={'abslute'} style={{marginRight:"40px", marginLeft:"10px"}}>Details</Button></Link> 
                <Button colorScheme='blue' onClick={()=> addTocart(product)} position={'abslute'}>AddToCart</Button>
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
