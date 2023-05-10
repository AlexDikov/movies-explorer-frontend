import p_logo from '../../images/p-logo.svg';

export default function Promo() {
  return (
    <>
      <div className="promo">
        <img className="promo__logo" src={p_logo} alt="logo" />
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
    </>
  );
}
