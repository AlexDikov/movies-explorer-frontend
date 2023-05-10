import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <Preloader />
      <MoviesCardList>
        <MoviesCard />
      </MoviesCardList>
      <Footer />
    </>
  );
}
