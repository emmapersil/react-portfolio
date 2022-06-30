import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './technologies.css';

const Technologies = () => {
  return (
    <section id='technologies'>
      <h5>O que sei fazer</h5>
      <h2>Tecnologias</h2>

      <div className="container technologies__container">
        <div className='technologies__frontend'>

          <h3>Frontend Development</h3>

          <div className="technologies__content">
            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>Context API</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>React Testing Library</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>
          </div>
        </div>

        <div className='technologies__backend'>
          <h3>Backend Development</h3>
         
          <div className="technologies__content">
            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>MySQL e MongoDB</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>Node.js: Express</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>Mocha, Chai e Sinon</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>Arquitetura Rest</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='technologies__details'>
              <BsPatchCheckFill className='technologies__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Technologies;