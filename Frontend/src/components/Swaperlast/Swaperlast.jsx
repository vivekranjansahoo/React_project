import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swaperlast.css';

import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Swaperlast = () => {
  return (
    <div className="swap">
        <h3 className="intro">Our Community has great style</h3>
      <Swiper
        cssMode={true}
        slidesPerView={3}
        spaceBetween={50}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation, Pagination, Mousewheel, Keyboard ]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_UGC1?wid=469&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_UGC2?wid=469&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_UGC3?wid=417&qlt=70&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_UGC4?wid=417&qlt=70&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_UGC5?wid=417&qlt=70&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_UGC6?wid=417&qlt=70&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_UGC7?wid=417&qlt=70&op_sharpen=1" alt="" /></SwiperSlide>
      </Swiper>
      
    </div>
  );
}

export default Swaperlast
