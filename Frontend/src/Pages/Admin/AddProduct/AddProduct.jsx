import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css'

const AddProduct = () => {

    const [name, setname] = useState('');
    const [desc, setdesc] = useState('');
    const [price, setprice] = useState('');
    const [image, setimage] = useState('');
    const [catagory, setcatagory] = useState('');
    const [color, setcolor] = useState('');

    function convertbase64(e){
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =()=>{
            console.log(reader.result);
            setimage(reader.result);
        };
        reader.onerror = error=>{
            console.log("error",error);
        }
    }

    
  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/productregister', {
        name,
        image,
        desc,
        catagory,
        color,
        price
      });
      alert("Product added Successful");
      console.log('successful.', response);
    } catch (error) {
      alert("product error");
      console.error('product added  failed:', error);
    }
  };

  return (
    <>
    <div className="login-page">
        <form method='post' onSubmit={handleregister}>
        <div className="form">
        <h1>Add Product</h1>
            <div id="txt">
            <p>Name:</p>
            <input type="text" id="name" name="name" value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="name" required/>
            <p>Photo:</p>
            <input type="file" id="photo" onChange={convertbase64} />
            <div>
            {image && (  <img src={image} className='immm' alt="" width={200} height={200} />)}
    </div>
            <p>Desciption:</p>
            <input type="text" id="desc"  name="desc" value={desc}
          onChange={(e) => setdesc(e.target.value)}
          placeholder="desc" required/>

          <p>Catagory:</p>
            <input type="text" id="catagory"  name="catagory" value={catagory}
          onChange={(e) => setcatagory(e.target.value)}
          placeholder="catagory" required/>

          <p>Color:</p>
            <input type="text" id="catagory"  name="catagory" value={color}
          onChange={(e) => setcolor(e.target.value)}
          placeholder="color" required/>

            <p>Price:</p>
            <input type="text" id="price" placeholder="price" name="price" value={price}
          onChange={(e) => setprice(e.target.value)} required/>

           <input type='submit' id='btn' value="Add Product" /> 
        </div>
        </div>
        </form>
    </div>
    
    </>
  )
}

export default AddProduct