import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import './AllProduct.css';
import { useParams } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

const Billdetails = () => {
    const { billno } = useParams();

    var [allorder, setallorder] = useState([]);

    const handle = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/billproduct/${billno}`);
          console.log(response.data);
          setallorder(response.data);

    
        } catch (error) {
          console.error('error', error);
        }
      };

      useEffect(()=>{
        handle()
      })

  return (
    <div className='d'>

        

        <h1>Product Details</h1>
        
     <div className='p'>
            <TableContainer>
                
{allorder.map((item) => {
        return (
            <>
    <h3 style={{textAlign:"center",fontWeight:"bold",margin:"10px 0px"}}>Bill no : {item.billno}</h3>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th> Product Name</Th>
        <Th>Image</Th>
        <Th>Quantity</Th>
        <Th>Price</Th>
      </Tr>
    </Thead>
    <Tbody>
    {item.productdata.map((data) => {
                    return (
        <Tr>
                       
                 <Td>{data.name}</Td>
                <Td><img src={data.image} alt="" width={100} height={100} style={{wdith:"100%",height:"190px"}}/></Td>
                <Td>{data.quantity}</Td>
                <Td>{data.price}</Td>
                 {/* <Td><Link to={`/deleteproduct/${data.billno}`}><Button colorScheme='red' style={{marginRight:"40px", marginLeft:"10px"}}>Delete</Button></Link></Td>  */}

        
</Tr>
 );
})}
    </Tbody>
  </Table>
  <h3 style={{textAlign:"end",fontWeight:"bold",margin:"10px 150px"}}>Total Amount : {item.ammount}</h3>
  </>
    );
})}
</TableContainer>

            </div>

    </div>
  )
}
    

export default Billdetails