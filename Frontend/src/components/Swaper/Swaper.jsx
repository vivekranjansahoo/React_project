import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swaper.css';

import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Swaper = () => {
  return (
    <div className="swap">
        <h3 className="intro">new for your living room</h3>
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
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_CaroImage1?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230713_NewArrivals_CoffeeTables?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_CaroImage3?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_CaroImage4?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_CaroImage1?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Swaper
