import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import acc from '../../images/acc.svg';
import menu from '../../images/menu.svg';
import MenuPopup from '../MenuPopup/MenuPopup';

export default function Movies() {
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
        <button className="header__menu">
          <img src={menu} alt="menu" />
        </button>
      </Header>
      <main>
        <SearchForm />
        <Preloader />
        <MoviesCardList />
      </main>
      <Footer />
      <MenuPopup />
    </>
  );
}
