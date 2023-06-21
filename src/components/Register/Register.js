import { Link } from 'react-router-dom';
import '../Login/Login.css';
import shield from '../../images/shield.svg';

export default function Register() {
  return (
    <section className="login">
      <div className="login__container">
        <img className="login__logo" src={shield} alt="icon" />
        <h2 className="login__title">Добро пожаловать!</h2>
        <form className="login__form">
          <h3 className="login__input-title">Имя</h3>
          <input
            className="login__input login__input_field_job"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="30"
          />
          <div className="login__input-error login__input-error_first">
            <span>ggg</span>
          </div>
          <h3 className="login__input-title">E-mail</h3>
          <input
            className="login__input login__input_field_name"
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
          />
          <div className="login__input-error login__input-error_first">
            <span>ggg</span>
          </div>
          <h3 className="login__input-title">Пароль</h3>
          <input
            className="login__input login__input_field_job"
            type="password"
            name="password"
            required
            minLength="2"
            maxLength="200"
          />
          <div className="login__input-error login__input-error_first">
            <span>ggg</span>
          </div>
          <button className="login__save-button login__save-button-reg" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <div className="login__register-container">
          <p>Уже зарегистрированы?</p>
          <Link className="login__register-link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}
