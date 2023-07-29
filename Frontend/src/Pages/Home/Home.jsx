import React from 'react'
import Topnav from '../../components/Topnav/Topnav'
import Navbar from '../../components/navbar/Navbar';
import Image from '../../components/image/image';
import Swaper from '../../components/Swaper/Swaper';
import Imagesecond from '../../components/Imagesecond/Imagesecond';
import Swapersecond from '../../components/Swapersecond/Swapersecond';
import Imagemid from '../../components/Imagemid/Imagemid';
import Swaperlast from '../../components/Swaperlast/Swaperlast'
import Imagelast from '../../components/Imagelast/Imagelast';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className="home">
      <Topnav/>
      <Navbar/>
      <Image/>
      <Swaper/>
      <Imagesecond/>
      <Swapersecond/>
      <Imagemid/>
      <Swaperlast/>
      <Imagelast/>
      <Footer/>
    </div>
  )
}

export default Home