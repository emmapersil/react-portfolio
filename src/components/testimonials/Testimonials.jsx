import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from '../../assets/lygia-avatar.jpg';
import AVTR2 from '../../assets/joao-avatar.jpg';
import "swiper/css";
import "swiper/css/pagination";

import './testimonials.css';

import { Pagination } from "swiper";

const testimonialsData = [
  {
    avatar: AVTR1,
    name: 'Lygia Dias',
    review: 'Eu e Emmanuelle iniciamos juntas o curso de desenvolvimento web na Trybe e desde a primeira semana, se mostrou uma pessoa extremamente colaborativa, sempre pronta para ajudar. Nas hard skills, sempre mostrou grande habilidade e rápida aprendizagem. Além dos códigos, se destacou também na área de web design. É uma excelente colega de estudos , e definitivamente uma grande inspiração para mulheres na tecnologia.'
  },
  {
    avatar: AVTR2,
    name: 'João Victor Fernandes',
    review: 'Emmanuelle foi uma colaboradora muito proativa e esforçada, me acompanhava fora dos horários de expediente e sempre sanou todas as dúvidas. Esteve a frente de melhorar o serviço de modo que pensava na resolução de futuros problemas, como indicações de cursos, se provou ser uma excelente profissional de modo que a sua ajuda foi de grande importância para o meu sucesso.'
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>O que dizem do meu trabalho</h5>
      <h2>Recomendações</h2>

      <Swiper className="mySwiper container testimonials__container"
       pagination={true} modules={[Pagination]} 
      >
        {
          testimonialsData.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={ index } className='testimonial'>
                <div className="client__avatar">
                  <img src={ avatar} alt={ `Avatar ${name}` } />
                </div>
                <h5 className='client__name'>{ name }</h5>
                <small className='client__review'>{ review }</small>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
}

export default Testimonials;