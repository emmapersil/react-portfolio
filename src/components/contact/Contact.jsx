import React, { useRef } from 'react';
import { FiMail } from 'react-icons/fi'
import { BsMessenger } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2qofo89', 'template_am36o04', form.current, 'FgyOOEvtHz-oXeJY_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Fale comigo</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <FiMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>emma.persil@gmail.com</h5>
            <a
              href="mailto:emma.persil@gmail.com"
              target='_blank'
              rel='noreferrer'
            >Mande um e-mail</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Emma Persil</h5>
            <a 
              href="https://m.me/emmanuelle.persil"
              target='_blank'
              rel='noreferrer'
            >Mande uma mensagem</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Emma Persil</h5>
            <a 
              href="https://wa.me/5561996801279?text=Olá!%20encontrei%20seu%20site.%20Podemos%20conversar%20por%20aqui?"
              target='_blank'
              rel='noreferrer'
            >Mande uma mensagem</a>
          </article>
        </div>

        <form ref={ form } onSubmit={ sendEmail }>
          <h3>Ou fale por aqui:</h3>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Enviar mensagem
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact