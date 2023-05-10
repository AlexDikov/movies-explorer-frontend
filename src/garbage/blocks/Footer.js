export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__container">
          <p>&copy; 2023</p>
          <div style={{display:"flex"}}>
            <p>Яндекс.Практикум</p>
            <p style={{marginLeft:"20px"}}>GitHub</p>
          </div>
        </div>
      </footer>
    </>
  );
}
