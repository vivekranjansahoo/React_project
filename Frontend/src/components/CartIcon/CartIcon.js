// CartIcon.js
import React from 'react';


function CartIcon(props)  {


  return (
    // <div className="cart-icon">
    //   <button className="cart-btn">{`Cart (${cartItems.length})`}</button>
    // </div>
    <div className='aaa' >
        <div onClick={()=> props.handleShow(false)}>Shopping item</div>
    <div onClick={()=> props.handleShow(true)}>
        cart
        <sup style={{color:"red"}}> {props.count} </sup>
    </div>
    </div>

  );
};

export default CartIcon;
