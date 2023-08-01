import {Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Button } from '@chakra-ui/react'
import Topnavv from '../../../components/Topnav/Topnavv';
import Navbar from '../../../components/navbar/Navbar';
import CartList from '../../Cart/CartList/CartList';


const Bedding = () => {
  
  const nav=useNavigate();
    var [proitem, setproitem] = useState([]);
    var [allitem, setallitem] = useState('');
    var [handleColorChange,sethandleColorChange]=useState('');
    const { catagory } = useParams();

    const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [showSortedProducts, setShowSortedProducts] = useState(false);

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      nav('/')
    }
  })

  const addTocart=(data)=>{
    console.log(data);
    
    setCart([...cart,{ ...data,quantity:1}]);
    alert("item added to cart");
  }

  const handleShow =(value)=>{
    setShowCart(value);
  }



  const handleSortProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/sortingproducts?catagory=bedding&sortBy=${allitem}&color=${handleColorChange}`);
      setSortedProducts(response.data);
      setShowSortedProducts(true);
    } catch (error) {
      console.error(error);
    }
  };


    const handleLogin = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/userdashboard/${catagory}`);
          console.log(response.data);
         setproitem(response.data);

        } catch (error) {
          console.error('error', error);
        }
      };

      useEffect(()=>{
        handleLogin()
      })


    return (
      <div className='mainpage'>
        
        {/* <ProductList products={allimage}  /> */}
        {/* <Catagory products={allimage}/> */}

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
         <option value="">Select </option> 
          <option value="price-asc">Ascending Order by Price</option>
          <option value="price-desc">Descending order by Price</option>
          </select>

          <select id="colorFilter" value={handleColorChange} onChange={(e)=> sethandleColorChange(e.target.value)}>
         <option value="">All Colors</option>
        <option value="black">Black</option>
        <option value="silver">Silver</option>
        <option value="brown">Brown</option>
        <option value="white">White</option>
      </select>
        </div>
        
          <Button onClick={handleSortProducts}>Sort</Button>

      </div>

      {showSortedProducts ? (

<div className="allcard">

    
{sortedProducts.map((product) => (   

  <div key={product.id}>
    
    <div className="card">
        <img src={product.image} alt="" />
       
        <div className="card-content">
        <h3>Name : {product.name}</h3>
        {/* <p>Desc : {product.desc}</p> */}
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
   ):(

<div className="allcard">
    
  {proitem.map((product) => (   

    <div key={product.id}>
      
      <div className="card">
          <img src={product.image} alt="" />
         
          <div className="card-content">
          <h3>Name : {product.name}</h3>
          {/* <p>Desc : {product.desc}</p> */}
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
   )}


    </div>
      
      </div>
    );
}

export default Bedding;