import './SearchForm.css';
import loupe from '../../images/loupe.svg';

export default function SearchForm() {
  return (
    <div className="searchForm">
      <form className="searchForm__container">
        <img className="searchForm__icon" src={loupe} alt="loupe" />
        <input className="searchForm__input" placeholder="Фильм"></input>
        <button className="searchForm__find-btn"></button>
        <div className="searchForm__line"></div>
        <div className="container">
          <label className="searchForm__switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="searchForm__slider searchForm__round"></div>
          </label>
        </div>
        <p className="searchForm__short">Короткометражки</p>
      </form>
      <div className="searchForm__underline"></div>
    </div>
  );
}
