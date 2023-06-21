import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__year">&copy; 2023</p>
        <div className="footer__text">
          <p className="footer__yandex">Яндекс.Практикум</p>
          <p>GitHub</p>
        </div>
      </div>
    </footer>
  );
}
