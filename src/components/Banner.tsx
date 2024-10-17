import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // CSS principal do Swiper
import 'swiper/css/autoplay'; // Certifique-se de que o CSS necessário está sendo importado
import { Autoplay } from 'swiper/modules'; // Importa o módulo Autoplay

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]} // Habilita o módulo de Autoplay
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }} // Define o delay do autoplay (3 segundos)
      loop={true} // Faz o carrossel voltar para o início
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