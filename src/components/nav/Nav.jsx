import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineLaptop, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#');
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
          <AiOutlineHome />
      </a>
      <a 
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
          <AiOutlineUser />
      </a>
      <a 
        href="#technologies"
        onClick={() => setActiveNav('#technologies')}
        className={activeNav === '#technologies' ? 'active' : ''}>
          <AiOutlineLaptop />
      </a>
      <a 
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        >
          <AiOutlineBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
          <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav;