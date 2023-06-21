import { NavLink } from 'react-router-dom';
import acc from '../../images/acc.svg';
import './MenuPopup.css';

export default function MenuPopup() {
  return (
    <div className="menuPopup menuPopup__opened">
      <div className="menuPopup__container">
        <NavLink to="/" className="menuPopup__nav">
          Главная
        </NavLink>
        <NavLink to="/movies" className="menuPopup__nav">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="menuPopup__nav menuPopup__nav_last">
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/profile" className="menuPopup__acc">
          <img className="header__acc" alt="icon" src={acc} />
        </NavLink>
        <button className="menuPopup__close-button"></button>
      </div>
    </div>
  );
}
