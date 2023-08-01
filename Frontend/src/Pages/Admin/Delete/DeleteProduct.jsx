import axios from 'axios';
import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom';

const DeleteProduct = () => {
    const { id } = useParams();

   

    const handleLogin = async (id) => {
        console.log(id);
        try {
          const response = await axios.delete(`http://localhost:5000/deleteproduct/${id}`);
          console.log(response.data);
          alert("deleted succefully");
          Navigate("/allproduct");

        } catch (error) {
          console.error('error', error);
        }
      };

      useEffect(()=>{
        handleLogin(id)
      },[id])


  return (
    <div>
        <h1>DeleteProduct</h1></div>
  )
}

export default DeleteProduct