import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies() {
  return (
    <>
      <Header>
        <NavLink className="header__nav">Фильмы</NavLink>
        <NavLink className="header__nav">Сохранённые фильмы</NavLink>
        <NavLink className="header__nav"></NavLink>
      </Header>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <Footer />
    </>
  );
}
