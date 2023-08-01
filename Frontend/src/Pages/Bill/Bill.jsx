import React, { useEffect, useState } from 'react'
import './Bill.css'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Bill = () => {
	const nav=useNavigate();
const [billing,setbilling]=useState([])
const [ammount, setammount]=useState(0)
const storedData= sessionStorage.getItem('myitemdata');
const bilno=sessionStorage.getItem('billno')
const parsedData = JSON.parse(storedData);
  console.log(parsedData);
  var i=1;

  let amt=0;
  let a;
  const totalamout=()=>{
    for(a=0;a<parsedData.length;a++){
      amt=amt+parseInt(parsedData[a].price)*parseInt(parsedData[a].quantity);
      setammount(amt);
    }
    console.log(amt);
  }

  const getdeatils = async (bilno) => {
	try {
	  const response = await axios.get(`http://localhost:5000/billingaddress/${bilno}`);
	  console.log(response.data);

	  setbilling(response.data);

	} catch (error) {
	  console.error('error', error);
	}
  };

  useEffect(()=>{
	getdeatils(bilno)
  })

  const logout=()=>{
	localStorage.removeItem('token');
	nav('/');
  }

  useEffect(()=>{
    totalamout()
  })

  return (
    <div >
        <div className="invoice_container">
		<div className="invoice_header">
			<div className="logo_container">
                Tech Gradiator

			</div>
			<h1>Visit Again !!!</h1>
			<div className="company_address">
				<h2>Tech Gradiator Pvt Ltd.</h2>
				<p>
					Silicon Institute Of Technology<br/>
					Patia,Bhubaneswar <br/>
					769004 <br/>
					Techgradiator Team, Ph-123456789
				</p>
			</div>
		</div>
		<div className="customer_container">
			<div>
		{billing.map((add) => (  
			<div>
				<h2>Billing To</h2>
				<h3>{add.name}</h3>
				<p>{add.streetaddress},{add.city},{add.state},{add.pincode} <br />
				{add.email},{add.phoneno}
				</p>
				
			</div>
			
			  ))}
			  </div>
			<div classNameName="in_details">
				<h1 className="in_head">INVOICE</h1>
				
			
				<table>
					<tr>
						<td>Invoice No</td>
						<td>:</td>
						<td><b>{bilno}</b></td>
						
					</tr>
				</table>
			</div>
		</div>
		<div className="product_container">
		<h2 align="center">Item Details</h2>
			<table className="item_table" style={{width:"100%"}}>
			<thead>
				<tr>
					<th>Sl No.</th>
					<th scope='col'>Image</th>
					<th scope='col'>Name</th>
					<th scope="col">Color</th>
					<th scope="col">Catagory</th>
					<th scope='col'>Price</th>
					<th scope="col">Quantity</th>
					<th scope="col">Total</th>
				</tr>
			</thead>
			<tbody>
                
			
            {parsedData.map((product) => (   
                
    //    <p key={product.id}>
        <tr>
      <td>{`${i++}`}</td>
      <td className='il'><img src={product.image} alt="" /></td>
      <td>{product.name}</td> 
	  <td>{product.color}</td>
	  <td>{product.catagory}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.quantity * product.price}</td>
      </tr>
     
// </p>

))}

			</tbody>	
		</table>
		</div>
		<div className="invoice_footer">
			<div className="note">
				<h2>Thank You!</h2>
				<p>
				 We hope your experience was excellent and happy with your purchase .<br/>we cannot wait to see you again soon.
				</p>
			</div>
			

			<div className="invoice_footer_amount">
				<table className="amount_table">
					<tr>
						<td>Tax amount</td>
						<td>:<b>0</b></td>
					</tr>
                    <tr>
                    <td>Grand Total </td>
					<td>: <b>{ammount}.00</b></td>
                    </tr>	
			
				</table>
			</div>
			
		</div>
	</div>
	<div className="centeredButton">
    <Button px='19px'spacing={10} style={{marginRight:"20px"}}  onClick={logout}>Home </Button>
	<Button onClick={() => window.print()} className='printPageButton'>Print </Button>
    
    </div>
    </div>
  )
}

export default Bill