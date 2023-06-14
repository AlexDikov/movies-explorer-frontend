import { NavLink } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import acc from '../../images/acc.svg';

export default function Main() {
  const color = '#073042';

  return (
    <>
      <Header onBack={color}>
        <NavLink to="/signup" className="header__register">
          Регистрация
        </NavLink>
        <NavLink to="/signin" className="header__login">
          Войти
        </NavLink>
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}
