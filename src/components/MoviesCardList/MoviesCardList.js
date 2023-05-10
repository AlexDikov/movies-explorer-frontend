import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList() {
  return (
    <div className="moviesCardList">
      <div className="moviesCardList__container">
        <MoviesCard ok="true" />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="moviesCardList__more">Ещё</button>
    </div>
  );
}
