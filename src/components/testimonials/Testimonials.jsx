import React from 'react';
import AVTR1 from '../../assets/lygia-avatar.jpg';
import './testimonials.css';

const testimonialsData = [
  {
    avatar: AVTR1,
    name: 'Lygia Dias',
    review: 'Eu e Emmanuelle iniciamos juntas o curso de desenvolvimento web na Trybe e desde a primeira semana, se mostrou uma pessoa extremamente colaborativa, sempre pronta para ajudar. Nas hard skills, sempre mostrou grande habilidade e rápida aprendizagem. Além dos códigos, se destacou também na área de web design. É uma excelente colega de estudos , e definitivamente uma grande inspiração para mulheres na tecnologia.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O que dizem do meu trabalho</h5>
      <h2>Recomendações</h2>

      <div className="container testimonials__container">
        {
          testimonialsData.map(({ avatar, name, review }, index) => {
            return (
              <article key={ index } className='testimonial'>
              <div className="client__avatar">
                <img src={ avatar} alt={ `Avatar ${name}` } />
                </div>
             <h5 className='client__name'>{ name }</h5>
             <small className='client__review'>{ review }</small>
             </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials;