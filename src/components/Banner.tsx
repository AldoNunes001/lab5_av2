import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules'; 

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]} 
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }} 
      loop={true} 
    >
      <SwiperSlide>
        <img src={banner1} alt="Promoção 1" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Promoção 2" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Promoção 3" className="w-full h-auto" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;