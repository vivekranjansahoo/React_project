import React, { useEffect, useState } from 'react'
import './Address.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Topnavv from '../../../components/Topnav/Topnavv';
import Navbar from '../../../components/navbar/Navbar';

const AddressandPayment = () => {
  const nav = useNavigate();
  const [ammount, setammount]=useState(0)
    const [name, setname] = useState('');
    const [country, setcountry] = useState('');
    const [streetaddress, setstreetaddress] = useState('');
     const [city, setcity] = useState('');
     const [state, setstate] = useState('');
     const [pincode,setpincode] = useState('');
     const [phoneno, setphoneno] = useState('');
     const [email, setemail] = useState('');
     const [paymentmethod, setpaymentmethod] = useState('');

    const storedd= sessionStorage.getItem('myitemdata');
    const product = JSON.parse(storedd);
    console.log(product);

    let amt=0;
    let i;
    const totalamout=()=>{
      for(i=0;i<product.length;i++){
        amt=amt+parseInt(product[i].price)*parseInt(product[i].quantity);
        setammount(amt);
      }
      console.log(amt);
    }
  
    useEffect(()=>{
      totalamout()
    })

  const handleorder = async (e) => {
    
    var billno = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    // setbillno(sixDigitRandomNumber);
    console.log(billno);
    sessionStorage.setItem('billno', JSON.stringify(billno));
    const storedData= sessionStorage.getItem('myitemdata');
    const productdata = JSON.parse(storedData);
    console.log(productdata);


    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/orderdetails', {
        name,country,streetaddress,city,state,pincode,phoneno,email,paymentmethod,billno,productdata,ammount
      });
      alert("please pay the amount");
      nav('/payment')
      console.log('successful.', response);
    } catch (error) {
      alert("order error");
      console.error('product added  failed:', error);
    }
  };
  return (
    <>
   <div>
    <Topnavv/>
    <Navbar/>
   <div class="container" >
  <div class="title">
      <h2 align="center">Address & Payment For Your Item</h2>
  </div>
<div class="d-flex">

  <form onSubmit={handleorder} method="post">
    <label>
      <span class="fname">Full Name <span class="required">*</span></span>
      <input className='ml' type="text" name="name" value={name}
          onChange={(e) => setname(e.target.value)}  required />
    </label>

  
    <label>
      <span>Country <span class="required">*</span></span>
     <input className='ml' type="text" name="country" value={country}
          onChange={(e) => setcountry(e.target.value)} required />
    </label>
    <label>
      <span>Street Address <span class="required">*</span></span>
      <input className='ml' type="text" name="address" value={streetaddress}
          onChange={(e) => setstreetaddress(e.target.value)} required />
    </label>
    <label>
      <span> City <span class="required">*</span></span>
      <input className='ml' type="text" name="city" value={city}
          onChange={(e) => setcity(e.target.value)} required /> 
    </label>
    <label>
      <span>State  <span class="required">*</span></span>
      <input className='ml' type="text" name="state" value={state}
          onChange={(e) => setstate(e.target.value)} required /> 
    </label>
    <label>
      <span>Pincode / ZIP <span class="required">*</span></span>
      <input className='ml' type="text" name="pincode"value={pincode}
          onChange={(e) => setpincode(e.target.value)}  required /> 
    </label>
    <label>
      <span>Phone <span class="required">*</span></span>
      <input className='ml' type="tel" name="phone" value={phoneno}
          onChange={(e) => setphoneno(e.target.value)} required /> 
    </label>
    <label>
      <span>Email Address <span class="required">*</span></span>
      <input className='ml' type="email" name="email" value={email}
          onChange={(e) => setemail(e.target.value)} required /> 
    </label>
    <br/>
    <h2>Payment Method</h2>
    <select  value={paymentmethod} onChange={(e) => setpaymentmethod(e.target.value)}>
      <option value=''>Select</option>
        <option value='razorpay'>Razorpay</option>
        <option value='paypal'>Paypal</option>
        <option value='paytm'>Paytm</option>
    </select>
     <button className="bl" type="submit" name="submit">Place Order</button>
  </form>
  
  <div class="Yorder">
    <table>
     <thead>
				<tr>
				    <th scope="col">Image</th>
					<th scope="col">Name</th>
					<th scope="col">Quantity</th>
					<th scope="col">Price</th>	
				</tr>
	</thead>
	<tbody>

  {product.map((produc) => (   
      
  		
				<tr>
					<td className='l'><img src={produc.image} alt=""/></td>
					<td>{produc.name}</td>
					<td>{produc.quantity}</td>
					<td>{produc.price}</td>
				</tr>
      ))}
				 
			</tbody>	
    </table>
    <hr/>

          <h4 style={{marginLeft:"80px"}}> <b>Total Price: {ammount} </b></h4>
    

  </div>
  
 </div>
</div>
  </div>

    </>
  )
}

export default AddressandPayment