import {Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Topnav from '../../components/Topnav/Topnav';
import Navbar from '../../components/navbar/Navbar';
import './UserDashboard.css'
import axios from 'axios';
import { Button } from '@chakra-ui/react'
import ProductList from '../../components/Search/Seacrh';

const UserDashboard = () => {
  

    var [allimage, setallimage] = useState([]);

    const handleLogin = async () => {
        try {
          const response = await axios.get('http://localhost:5000/getproduct');
          console.log(response.data.data);
         setallimage(response.data.data);

    
        } catch (error) {
          console.error('error', error);
        }
      };

      useEffect(()=>{
        handleLogin()
      },[])

    return (
      <div className='mainpage'>
      <Topnav/>
      <Navbar/>
      <h1 style={{textAlign:"center" , fontWeight:"bold" , fontSize:"20px"}}>All Product</h1>
      <ProductList products={allimage} />

      </div>
    );
}

export default UserDashboard;