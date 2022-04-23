import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#technologies">Tecnologias</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Recomendações</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        Not display
      </div>

      <div className="footer__copyright">
        <small>Feito com React, react-icons, Swiper, EmailJs e amor por <b>Emmanuelle Pereira</b> e &copy;EGATOR</small>
      </div>
    </footer>
  )
}

export default Footer;