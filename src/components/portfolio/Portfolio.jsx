import React from 'react';
import IMG1 from '../../assets/thumb-starwars.jpeg';
import IMG2 from '../../assets/thumb-oneforall.jpeg';
import IMG3 from '../../assets/thumb-wallet.jpeg';
import './portfolio.css';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Star Wars Planet Search',
    github: 'https://github.com/emmapersil/star-wars-planets-search',
    demo: 'https://planets-search-sw.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'MySQL One for All',
    github: 'https://github.com/emmapersil/mysql-one-for-all',
    demo: 'https://github.com/emmapersil/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Wallet',
    github: 'https://github.com/emmapersil/wallet',
    demo: 'https://personal-wallet.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          portfolioData.map(({ id, image, title, github, demo }) => {
            return (
              <article key={ id } className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={ image } alt={ `Thumbnail ${title}` } />
                </div>
                <h3>{ title }</h3>
                <div className="portfolio__item-cta">
                  <a 
                    href={ github }
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>
                  <a 
                    href={ demo }
                    className='btn'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;
