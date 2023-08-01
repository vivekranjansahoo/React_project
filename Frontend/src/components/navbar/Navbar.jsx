import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // const catagory='lighting';
  return (
   <div className="navbar">
    <div className="burger" onClick={toggleMenu}>
        <FaBars />
   </div>
    <ul className={showMenu ? 'nav-links-show' : 'nav-links'}>
      <Link to='/userdashboard/furniture'><li>Furniture</li></Link> 
      <Link to='/userdashboard/outdoor/outdoor' ><li>outdoor</li></Link> 
      <Link to='/userdashboard/tabletopandbar/tabletopandbar' > <li>Tabletop & Bar</li></Link>
      <Link to='/userdashboard/kitchen/kitchen' > <li>Kitchen</li></Link>
      <Link to='/userdashboard/bedding/bedding' > <li>Bedding</li></Link>
      <Link to='/userdashboard/bath/bath' > <li>Bath</li></Link>
        <Link to='/userdashboard/decorandpillows/decorandpillows' > <li>Decor & Pillows</li></Link>
        <Link to='/userdashboard/rugs/rugs' > <li>Rugs</li></Link>
        <Link to='/userdashboard/lighting/lighting' ><li>Lighting</li></Link>
        <Link to='/userdashboard/windowa/windowa' > <li>Window</li></Link>
        <Link to='/userdashboard/gifts/gifts' ><li>Gifts</li></Link>
        <Link to='/userdashboard/sale/sale' ><li>Sale</li></Link>
        <Link to='/userdashboard/andkids/andkids'> <li>&kids</li></Link>
    </ul>
    
   </div>
  )
}

export default Navbar