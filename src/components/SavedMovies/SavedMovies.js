import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import acc from '../../images/acc.svg';

export default function SavedMovies() {
  return (
    <>
      <Header>
        <NavLink to="/movies" className="header__nav">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="header__nav">
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/profile" className="header__nav">
          <img className="header__acc" alt="icon" src={acc} />
        </NavLink>
      </Header>
      <SearchForm />
      <Preloader />
      <MoviesCardList>
        <MoviesCard />
      </MoviesCardList>
      <Footer />
    </>
  );
}
