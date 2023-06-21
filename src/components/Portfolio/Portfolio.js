import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.svg';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li>
          <a href="https://github.com/AlexDikov/how-to-learn.git" target="blank" className="portfolio__container">
            <p className="portfolio__link">Статичный сайт</p>
            <img className="portfolio__arrow" src={arrow} alt="arrow" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AlexDikov/russian-travel.git" target="blank" className="portfolio__container">
            <p className="portfolio__link">Адаптивный сайт</p>
            <img className="portfolio__arrow" src={arrow} alt="arrow" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlexDikov/react-mesto-api-full-gha.git"
            target="blank"
            className="portfolio__container portfolio__container_last"
          >
            <p className="portfolio__link">Одностраничное приложение</p>
            <img className="portfolio__arrow" src={arrow} alt="arrow" />
          </a>
        </li>
      </ul>
    </section>
  );
}
