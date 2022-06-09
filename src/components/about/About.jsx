import React from 'react';
import Profile from '../../assets/profile.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Quem sou eu</h5>
      <h1>Sobre mim</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Profile} alt="Emmanuelle Pereira" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a className='about__card link'
            href="https://www.linkedin.com/in/emmanuelle-pereira-dev/"
            target="_blank"
            rel="noopener noreferrer">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>1 ano</small>
            </a>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>Seja o primeiro!</small>
            </article>

            <a className='about__card link'
            href="https://github.com/emmapersil"
            target="_blank"
            rel="noopener noreferrer">
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projetos</h5>
              <small>20+ completados</small>
            </a>
          </div>

          <p>
          Sou uma mineira morando em Brasília, apaixonada por música, cultura geek e aprender novos hobbies. Iniciando minha carreira como Full Stack e já me sinto em casa libertando a minha criatividade no Front End ou trabalhando a estrutura e a lógica do Back End.
          </p>

          <a href="#contact"
          className='btn btn-primary'>
            Fale comigo!
          </a>
        </div>


      </div>
    </section>
  )
}

export default About;