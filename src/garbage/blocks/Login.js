import { useState } from "react";
import { login } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import shield from "../images/shield.svg"

export default function Login(props) {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    login(email, password)
      .then((res) => {
        if (res.ok) {
          props.onEmail(email);
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        debugger
      })
      .then(() => {
        props.onLoggedIn(true);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src={shield} alt="icon"/>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__input-title">E-mail</h3>
          <input
            className="login__input login__input_field_name"
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
            value={formValue.email || ""}
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
            value={formValue.password || ""}
            onChange={handleChange}
          />
          <div className="login__input-error login__input-error_first"><span>ggg</span></div>
          <button className="login__save-button" type="submit" onSubmit={handleSubmit}>
            Войти
          </button>
        </form>
        <div className="login__register-container">
          <p>Еще не зарегистрированы?</p>
          <Link className="login__register-link" to="/signin">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}
