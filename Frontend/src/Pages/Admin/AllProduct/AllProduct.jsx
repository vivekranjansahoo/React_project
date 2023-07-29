import React, { useState } from 'react'
import axios from 'axios';
import './AllProduct.css';
import {Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

const AllProduct = () => {

    var [allimage, setallimage] = useState([]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get('http://localhost:5000/getproduct');
          console.log(response.data.data);
         setallimage(response.data.data);

    
        } catch (error) {
          console.error('error', error);
        }
      };

  return (
    
    <div className='d'>

        <h1>All Product Details</h1>
        <button onClick={handleLogin} className='bn'>Click here for Load Data</button>
        
     <div className='p'>
            <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Image</Th>
        <Th>Desc</Th>
        <Th>price</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
    {allimage.map((data) => {
        return (
        
            <Tr>
                <Td>{data.name}</Td>
                <Td><img src={data.image} alt="" /></Td>
                <Td>{data.desc}</Td>
                <Td>{data.price}</Td>
                <Td><Link to={`/deleteproduct/${data._id}`}><Button colorScheme='red' style={{marginRight:"40px", marginLeft:"10px"}}>Delete</Button></Link></Td>
            </Tr>
          );
        })}

    </Tbody>
  </Table>
</TableContainer>

           
                {/* <table>
                    <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>desc</th>
                    <th>Price</th>
                    <th>Id</th>
                    </tr>

                    <tr>
            <td><p>{data.name}</p></td>
           <td><img src={data.image} alt="" /></td> 
            <td><p>{data.desc}</p></td>
            <td><p>{data.price}</p></td>
            <td><p>{data._id}</p></td>
        

                    </tr>
                </table> */}
            </div>
      


    </div>
  )
}
    

export default AllProduct