import photo from '../../images/photo.jpg';

export default function AboutMe() {
  return (
    <section className="aboutMe">
      <h3 className="aboutMe__header">Студент</h3>
      <div className="aboutMe__container">
        <div className="aboutMe__info">
          <p className="aboutMe__name">Александр</p>
          <p className="aboutMe__job">Фронтенд-разработчик, 32 года</p>
          <p className="aboutMe__about">
            Я живу в Москве. У меня есть жена и дочь. Я люблю слушать музыку. Недавно начал кодить. После того, как
            прошёл курс по веб-разработке, начал заниматься версткой портфолио, которое есть у сотен людей.
          </p>
          <a href="https://github.com/AlexDikov" target="blank" className="aboutMe__github">
            Github
          </a>
        </div>
        <img className="aboutMe__photo" src={photo} alt="" />
      </div>
    </section>
  );
}
