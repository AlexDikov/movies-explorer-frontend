import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../utils/auth";
import shield from '../images/shield.svg'

export default function Register(props) {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email } = formValue;
    register(name, password, email)
      .then((res) => {
        if (res.ok) {
          props.onInfoTooltipOpen(true);
          props.onRegistered(true);
          return res.json();
        }
        props.onInfoTooltipOpen(true);
        props.onRegistered(false);
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
      <img className="login__logo" src={shield} alt="icon"/>
        <h2 className="login__title">Добро пожаловать!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__input-title">Имя</h3>
          <input
            className="login__input login__input_field_job"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="30"
            value={formValue.name}
            onChange={handleChange}
          />
          <div className="login__input-error login__input-error_first"><span>ggg</span></div>
          <h3 className="login__input-title">E-mail</h3>
          <input
            className="login__input login__input_field_name"
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
            value={formValue.email}
            onChange={handleChange}
          />
          <div className="login__input-error login__input-error_first"><span>ggg</span></div>
          <h3 className="login__input-title">Пароль</h3>
          <input
            className="login__input login__input_field_job"
            type="password"
            name="password"
            required
            minLength="2"
            maxLength="200"
            value={formValue.password}
            onChange={handleChange}
          />
          <div className="login__input-error login__input-error_first"><span>ggg</span></div>
          <button className="login__save-button login__save-button-reg" type="submit" onSubmit={handleSubmit}>
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
    </div>
  );
}
