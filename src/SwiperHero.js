import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"

import './SwiperStyles.css'



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";





export const SwiperHero = ({ slides }) => {
  
  console.log(slides)

  const swiperStyles = {
    height: "100vh",
    margin: '200px auto'
  }
  const swiperSlide =  {
    textAlign:' center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect
        speed={800}
        loop
        
        
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide style={ swiperStyles}>
          {slides.map(slide => (
            <div className="slideImages" style={swiperSlide}>
            <img src={`${slide.url}`} alt="" />
            </div>
          ))}
        </SwiperSlide>



        {/* <SwiperSlide>
          <img src="/images/sky-img-02.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sky-img-03.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sky-img-05.jpg" alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src="/images/sky-img-01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sky-img-01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sky-img-01.jpg" alt="" /> 
        </SwiperSlide>
        */}
      </Swiper>
    </>
  );
}