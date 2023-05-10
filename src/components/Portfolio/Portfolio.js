import { Link } from "react-router-dom";
import arrow from '../../images/arrow.svg'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__container">
                <p className="portfolio__link">Статичный сайт</p>
                <Link><img className="portfolio__arrow" src={arrow} alt='arrow' /></Link>
            </div>
            <div className="portfolio__container">
            <p className="portfolio__link">Адаптивный сайт</p>
                <Link><img className="portfolio__arrow" src={arrow} alt='arrow' /></Link>
            </div>
            <div className="portfolio__container">
                <p className="portfolio__link">Одностраничное приложение</p>
                <Link><img className="portfolio__arrow" src={arrow} alt='arrow' /></Link>
            </div>
        </div>
    )
};