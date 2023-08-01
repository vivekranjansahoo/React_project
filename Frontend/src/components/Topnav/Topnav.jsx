import React  from 'react'
import './Topnav.css'
import {Link } from "react-router-dom";
import {BiSolidUser} from 'react-icons/bi';
import {FaLocationDot} from 'react-icons/fa6';
import {AiFillHeart} from 'react-icons/ai'
import {HiShoppingCart} from 'react-icons/hi'
import {CiSearch} from 'react-icons/ci'
 
const Topnav = (props) => {

    // const ProductList = ({ products }) => {
    // const [searchQuery, setSearchQuery] = useState('');
      
    //     const handleSearchChange = (e) => {
    //       setSearchQuery(e.target.value);
    //     };
      
    //     const filteredProducts = products.filter((product) =>
    //       product.name.toLowerCase().includes(searchQuery.toLowerCase())
    //     );

  return (

    <div className="Topnav">
        <ul>
            <li><b onClick={()=> props.handleShow(false)}>Crate&Barrel</b></li>
            <li>Crate&kids</li>
            <li id="cb">CB2</li>
            <li>HUDSON | GRACE </li>
            <li><img src="https://images.crateandbarrel.com/is/image/Crate/flag_US" alt="" /></li>
        </ul>
        {/* <Divider className='dive'/> */}
        <hr />

        <div className="mainnav">
            <div className="search">
                <input type="text" name='search' placeholder='What can we help you find?' />
                <div id="se"><CiSearch/></div>
            </div>
            <div className="comname" onClick={()=> props.handleShow(false)} >
                Crate&Barrel
            </div>
            <div className="icons">
                <ul>
                    <li className="a">
                      <Link to="/login" ><h4> Order & sign in <BiSolidUser/></h4> </Link>
                     
                      </li>
                    <li className="a"><FaLocationDot/></li>
                    <li className="a"><AiFillHeart/>0</li>
                    <li className="a" onClick={()=> props.handleShow(true)}><HiShoppingCart/>{props.count} </li>
                    
                </ul>
                {/* <Outlet /> */}
            </div>
        </div>

        <div className="navv">
                <ul>
                    <li>WHAT'S NEW</li>
                    <li>WEDDING REGISTRY</li>
                    <li>FREE DESIGN SERVICES</li>
                    <li>TRADE PROGRAM</li>
                    <li>COLLABORATIONS</li>
                    <li>HOME RENO</li>
                    <li>THE DROM SHOP</li>
                </ul>
        </div>

        {/* <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul> */}
        
    </div>
  )
}


export default Topnav