import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';
import acc from '../../images/acc.svg';

export default function Profile() {
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
      <section className="profile">
        <h2 className="profile__title">Привет, Валенок!</h2>
        <div className="profile__name">
          <p>Имя</p>
          <p>Валенок</p>
        </div>
        <div className="profile__email">
          <p>E-mail</p>
          <p>valenok@yandex.ru</p>
        </div>
        <button className="profile__edit-btn">Редактировать</button>
        <button className="profile__signout-btn">Выйти из аккаунта</button>
      </section>
    </>
  );
}
