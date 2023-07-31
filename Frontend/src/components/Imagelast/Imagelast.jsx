
import React from 'react'
import './Imagelast.css'

const Imagelast = () => {
  return (
    <>
   <div className="photo">
    <img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_GR1?wid=1440&qlt=80&op_sharpen=1" alt="" />
    <video  controls loop autoplay>
  <source src="https://s7d5.scene7.com/is/content/Crate/CB_20230713_Nursery_KidsGIF1.mp4" type="video/mp4"/>
  
 </video>

 <video controls loop autoplay>
  <source src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230102_BabyRegistry.mp4" type="video/mp4"/>
 </video>
 </div>

 <div className="txt">
    <p><b>
    ABOUT CRATE & BARREL</b><br/>
With over 100 stores in North America and franchise partners in 9 countries, Crate & Barrel, Crate & Kids and CB2 are the international destination for lasting, modern furniture, textiles, kitchen, tableware and home decor.
    </p>
 </div>
   
   </>
  )
}

export default Imagelast