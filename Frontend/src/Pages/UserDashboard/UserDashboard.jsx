import {useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import './UserDashboard.css'
import axios from 'axios';
import ProductList from '../../components/Search/Seacrh';


const UserDashboard = () => {
  
  const nav=useNavigate();
    var [allimage, setallimage] = useState([]);
    // const email="vk@gmail.com";
    // const [username, setUsername] = useState(null);

    // const userlogin =async ()=>{
      
    //   const response = await axios.post('http://localhost:5000/userdashboard/user',{email});
    //       console.log(response);
    // }
   
    useEffect(()=>{
      if(!localStorage.getItem('token')){
        nav('/')
      }
    })

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

      // useEffect(() => {
      //   axios.get('http://localhost:5000/user')
      //     .then((response) => {
      //       console(response);
      //       setUsername(response.data);
      //     })
      //     .catch((error) => {
      //       console.error('Error:', error);
      //     });
      // }, []);

    return (
      <div className='mainpage'>
        
        <ProductList products={allimage}  />
      
      </div>
    );
}

export default UserDashboard;