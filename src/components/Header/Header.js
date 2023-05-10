import shield from '../../images/shield.svg';
import './Header.css';

export default function Header(props) {
  return (
    <div className="header" style={{ backgroundColor: props.onBack }}>
      <div className="header__container">
        <img className="header__icon" alt="icon" src={shield} />
        <div className="header__nav-menu">{props.children}</div>
      </div>
    </div>
  );
}
