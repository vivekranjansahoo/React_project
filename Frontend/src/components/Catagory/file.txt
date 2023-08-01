import React, { useState } from 'react';
import './Catagory.css'
import {Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import CartList from '../../Pages/Cart/CartList/CartList';
import Topnavv from '../Topnav/Topnavv';
import Navbar from '../navbar/Navbar';

const Catagory = ({ products }) => {
//   const [searchQuery, setSearchQuery] = useState('');
  const [allitem, setallitem] = useState('');
  const [sorted, setsorted] = useState([{products}]);
  const [showSortedProducts, setShowSortedProducts] = useState(false);


    const sortbyprice = () => {
        if(allitem ==='ascending'){
        setsorted([...products].sort((a, b) => a.price - b.price));
        setShowSortedProducts(true);
        }else{
         setsorted([...products].sort((a, b) => b.price - a.price));
         setShowSortedProducts(true);
        }
      };

 

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

            <div>

            <select id="sortOrder" value={allitem} onChange={(e) => setallitem(e.target.value)}>
           <option value="ascending">Ascending Order by Price</option>
          <option value="descending">Descending order by Price</option>
          </select>
          <Button onClick={sortbyprice}>Sort</Button>


        {/* <select id="sortOrder" value={selectedColor} onChange={(e) => setallitem(e.target.value)}>
        <option value="Yellow">Yellow</option>
        <option value="White">White</option>
       </select>
      <Button onClick={filterbycolor}>Sort</Button> */}
            </div>
           
        


     {showSortedProducts ? (

      <div className="allcard">
      
          
      {sorted.map((product) => (   

        <div key={product.id}>
          
          <div className="card">
              <img src={product.image} alt="" />
             
              <div className="card-content">
              <h3>Name : {product.name}</h3>
              <p>Desc : {product.desc}</p>
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
         ):(

      <div className="allcard">
          
        {products.map((product) => (   

          <div key={product.id}>
            
            <div className="card">
                <img src={product.image} alt="" />
               
                <div className="card-content">
                <h3>Name : {product.name}</h3>
                <p>Desc : {product.desc}</p>
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
         )}


    </div>
 </div>
    
  );
};

export default Catagory;
