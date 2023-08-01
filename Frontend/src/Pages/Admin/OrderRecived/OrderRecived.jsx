import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import './AllProduct.css';
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

const OrderRecived = () => {

    var [allorder, setallorder] = useState([]);

    const handle = async (e) => {
        // e.preventDefault();
        try {
          const response = await axios.get('http://localhost:5000/getorderdetails');
          console.log(response.data.data);
         setallorder(response.data.data);

    
        } catch (error) {
          console.error('error', error);
        }
      };

      useEffect((e)=>{
        handle(e)
      },[])

  return (
    <div className='d'>
        

        <h1>All order products</h1>
        {/* <button onClick={handleLogin} className='bn'>Click here for Load Data</button> */}
        
     <div className='p'>
            <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Billno</Th>
        <Th>Name</Th>
        <Th>country</Th>
        <Th>streetaddress</Th>
        <Th>city</Th>
        <Th>state</Th>
        <Th>pincode</Th>
        <Th>phoneno</Th>
        <Th>email</Th>
        <Th>paymentmethod</Th>
        <Th>Details</Th>
        {/* <Th> Product Name</Th>
        <Th>Image</Th>
        <Th>Price</Th>
        <Th>Quantity</Th> */}
      </Tr>
    </Thead>
    <Tbody>
    {allorder.map((data) => {
        return (
        
            <Tr>
                <Td>{data.billno}</Td>
                <Td>{data.name}</Td>
               
                <Td>{data.country}</Td>
                <Td>{data.streetaddress}</Td>
                <Td>{data.city}</Td>
                <Td>{data.state}</Td>
                <Td>{data.pincode}</Td>
                <Td>{data.phoneno}</Td>
                <Td>{data.email}</Td>
                <Td>{data.paymentmethod}</Td>
                
                 <Td><Link to={`/billdetails/${data.billno}`}><Button colorScheme='blue'>Details</Button></Link></Td> 
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
    

export default OrderRecived