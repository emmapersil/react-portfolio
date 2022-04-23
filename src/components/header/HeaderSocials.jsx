import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a 
          href="https://www.linkedin.com/in/emmanuelle-pereira-dev/"
          target="_blank"
          rel="noopener noreferrer">
          <BsLinkedin className='social__icon'/>
        </a>
        <a 
          href="https://github.com/emmapersil"
          target="_blank"
          rel="noopener noreferrer">
            <FaGithub className='social__icon'/>
        </a>
    </div>
  )
}

export default HeaderSocials