import './MoviesCard.css';
import film from '../../images/film.jpeg';
import ok from '../../images/ok.svg';

export default function MoviesCard(props) {
  return (
    <div className="moviesCard">
      <div className="moviesCard__container">
        <h3 className="moviesCard__title">Токсичный мститель 4</h3>
        <p className="moviesCard__length">109 минут</p>
      </div>
      <img className="moviesCard__img" alt="film-icon" src={film} />
      <button className={`moviesCard__btn ${props.ok && 'moviesCard__btn_active'}`}></button>
    </div>
  );
}
