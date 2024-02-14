
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../node_modules/swiper/swiper-bundle.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'


// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export const Hero = () => {
  return (
    <div className="hero">

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}

      >
        <SwiperSlide>
          <img src="images/sky-img-01.jpg" alt="" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/sky-img-02.jpg" alt="" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/sky-img-03.jpg" alt="" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/sky-img-04.jpg" alt="" style={{ width: '100%' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}