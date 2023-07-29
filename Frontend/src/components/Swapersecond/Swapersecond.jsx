import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swapersecond.css';

import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Swapersecond = () => {
  return (
    <div className="swap">
        <h3 className="intro">easy upgrades for every room</h3>
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
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_Caro2Image1?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230717_HP_Caro2Image2_v2?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_Caro2Image3?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_Caro2Image4?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230713_HP_Caro2Image5?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cb.scene7.com/is/image/Crate/CB_20230717_HP_Caro2Image6_v2?wid=418&qlt=90&op_sharpen=1" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swapersecond
