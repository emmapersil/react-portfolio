import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import './works.css';

const Works = () => {
  return (
    <section id='works'>
      <h5>O que posso oferecer</h5>
      <h2>Serviços</h2>

      <div className="container works__container">

      <article className='works'>
          <div className="works__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className='works__list'>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Colaboração</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Comunicação</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Empatia</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Criatividade</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Liderança</p>
            </li>
          </ul>
        </article>

        <article className='works'>
          <div className="works__head">
            <h3>Web Development</h3>
          </div>

          <ul className='works__list'>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Implementação de funcionalidades no front e back</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Experiência em code review, debug e pair programming</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Criação e expansão de cobertura em testes automatizados</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Refatoração e melhoria de código de forma contínua</p>
            </li>
          </ul>
        </article>

        <article className='works'>
          <div className="works__head">
            <h3>Outras Skills</h3>
          </div>

          <ul className='works__list'>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Inglês fluente</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Francês avançado</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Metodologias Ágeis</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>Criação de conteúdo</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='works__list-icon'/>
              <p>UI/UX Design</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Works;