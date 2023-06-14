export default function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__container">
        <h3 div className="aboutProject__subtitle one">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 div className="aboutProject__subtitle two">
          На выполнение диплома ушло 5 недель
        </h3>
        <p div className="aboutProject__description three">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        <p div className="aboutProject__description four">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="aboutProject__timeline">
        <p className="aboutProject__line-one">1 неделя</p>
        <p className="aboutProject__line-two">4 недели</p>
        <p className="aboutProject__line-three">Back-end</p>
        <p className="aboutProject__line-three">Front-end</p>
      </div>
    </section>
  );
}
