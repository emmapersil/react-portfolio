import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h5>O que posso oferecer</h5>
      <h2>Habilidades</h2>

      <div className="container skills__container">

      <article className='skills'>
          <div className="skills__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className='skills__list'>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Colaboração</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Comunicação</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Empatia</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Criatividade</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Pensamento Crítico</p>
            </li>
          </ul>
        </article>

        <article className='skills'>
          <div className="skills__head">
            <h3>Web Development</h3>
          </div>

          <ul className='skills__list'>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Implementação de funcionalidades no front e back</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Experiência em code review, debug e pair programming</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Criação e expansão de cobertura em testes automatizados</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Refatoração e melhoria de código de forma contínua</p>
            </li>
          </ul>
        </article>

        <article className='skills'>
          <div className="skills__head">
            <h3>Outras Skills</h3>
          </div>

          <ul className='skills__list'>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Inglês fluente</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Francês avançado</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Metodologias Ágeis</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>Criação de conteúdo</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='skills__list-icon'/>
              <p>UI/UX Design</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Skills;