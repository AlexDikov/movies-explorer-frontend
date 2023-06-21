import { Link } from 'react-router-dom';
import shield from '../../images/shield.svg';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header" style={{ backgroundColor: props.onBack }}>
      <div className="header__container">
        <Link to="/">
          <img className="header__icon" alt="icon" src={shield} />
        </Link>
        <div className="header__nav-menu">{props.children}</div>
      </div>
    </header>
  );
}
