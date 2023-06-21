import { Link } from 'react-router-dom';
import './Login.css';
import shield from '../../images/shield.svg';

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <img className="login__logo" src={shield} alt="icon" />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
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
          <button className="login__save-button" type="submit">
            Войти
          </button>
        </form>
        <div className="login__register-container">
          <p>Еще не зарегистрированы?</p>
          <Link className="login__register-link" to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}
