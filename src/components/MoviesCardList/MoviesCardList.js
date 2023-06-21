import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__container">
        <li>
          <MoviesCard ok="true" />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
      </ul>
      <button className="moviesCardList__more">Ещё</button>
    </section>
  );
}
