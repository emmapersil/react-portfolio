import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>O que sei fazer</h5>
      <h2>Habilidades</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>

          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Context API</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React Testing Library</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
         
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node.js: Express</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Mocha, Chai e Sinon</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Arquitetura Restul</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node.js: ORM</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Experience;