import React, { useEffect, useState } from 'react'
import './CartList.css';
import { useNavigate } from 'react-router-dom';


function CartList ({cart}){
    const nav = useNavigate();
   const [CART, setCART]=useState([])

   const storedata = async (e) => {
    e.preventDefault();
    try {

        const dat=()=>{
            CART.map(item => item.price * item.quantity).reduce((total,value)=>total+value,0)
        }
        console.log(dat);
       
        console.log(CART);
        sessionStorage.setItem('myitemdata', JSON.stringify(CART));
        alert("Please proceed for address&payment");
        nav("/addresspay");

    } catch (error) {
      alert("login error");
      console.error('Login failed:', error);
    }
  };

   useEffect(()=>{
    setCART(cart)
   },{cart})

  return (
    <>
    <div className="aa">
        <div className="aaa">
            <h1> All Cart Items Product</h1>
           
        </div>
    <div className='ab'>
        <table className='ac'>
            <tr className='ad'>
                <th className='ae'>Image</th>
                <th className='ae'>Name</th>
                <th className='ae'>Quantity</th>
                <th className='ae'>Price</th>
            </tr>
            
            {
                CART?.map((cartItem,cartIndex)=>{
                    return(
                        <>
                        <tr>
                            <td className='af'>
                            <img src={cartItem.image} alt="" style={{width:"100px",height:"100px"}}/></td>
                            <td className='af'>
                             {cartItem.name}
                            </td>
                            <td className='af'>
                            <button style={{color:"red",margin:"0px 30px",backgroundColor:"blue",width:"50px"}} 
                            onClick={()=>{
                                const _CART=CART.map((item,index)=>{
                                    return cartIndex === index ? {...item , quantity:item.quantity+1} : item
                                })
                                setCART(_CART)
                            }}
                            >+</button>
                            <p style={{margin:"0px 50px"}}>{cartItem.quantity}</p>
                            <button
                            style={{color:"red",margin:"0px 30px",backgroundColor:"blue",width:"50px"}} 
                            onClick={()=>{
                                const _CART=CART.map((item,index)=>{
                                    return cartIndex === index ? {...item , quantity:item.quantity-1} : item
                                })
                                setCART(_CART)
                            }}
                            >-</button>
                            </td>
                            <td className='af'>
                                <p className='tol'>{cartItem.price*cartItem.quantity}</p>
                          
                            </td>
                            </tr>
                        </>
                    )
                })
            }
              
              </table>
            <p className='tl'>
                Total :
                {
                    CART.map(item => item.price * item.quantity).reduce((total,value)=>total+value,0)
                }
            </p>
            <div className='in'>
                <button onClick={storedata}>Checkout</button>
            </div>

          
            
    </div>
    </div>
    </>
  )
}

export default CartList