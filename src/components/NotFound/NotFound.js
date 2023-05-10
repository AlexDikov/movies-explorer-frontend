import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <h3 className="notFound__subtitle">Страница не найдена</h3>
      <button className="notFound__back">Назад</button>
    </div>
  );
}
