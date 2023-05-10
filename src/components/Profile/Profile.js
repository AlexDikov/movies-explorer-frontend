import Header from '../Header/Header';
import './Profile.css';

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
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
      </div>
    </>
  );
}
