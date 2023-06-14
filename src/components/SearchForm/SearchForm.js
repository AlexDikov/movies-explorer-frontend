import './SearchForm.css';
import loupe from '../../images/loupe.svg';

export default function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__container">
        <img className="searchForm__icon" src={loupe} alt="loupe" />
        <input className="searchForm__input" placeholder="Фильм" type="text" required></input>
        <button className="searchForm__find-btn"></button>
        <div className="searchForm__line"></div>
        <div className="searchForm__checkbox">
          <input className="searchForm__switch" type="checkbox" id="switch" />
          <label className="searchForm__label" for="switch"></label>
          <p className="searchForm__short">Короткометражки</p>
        </div>
      </form>
      <div className="searchForm__underline"></div>
    </section>
  );
}
