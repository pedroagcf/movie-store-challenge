import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMovies, {
  incrementPage,
  decrementPage,
} from '../../../actions/movieActions';

import Loader from '../../atoms/Loader/Loader';
import MovieList from '../../organisms/MovieList/MovieList';

import './HomePage.scss';
const HomePage = ({
  moviesData,
  fetchMovies,
  incrementPage,
  decrementPage,
}) => {
  const { loading, data, page } = moviesData;

  useEffect(() => {
    fetchMovies(page);
  }, [page, fetchMovies]);

  const ordered = data?.results.sort((a, b) => a.title.localeCompare(b.title));

  return loading ? (
    <section className='home-page'>
      <h1 className='home-page__title'>Filmes</h1>
      <Loader />
    </section>
  ) : data ? (
    <section className='home-page'>
      <h1 className='home-page__title'>Filmes</h1>
      <MovieList movies={ordered} />
      <div className='home-page__pagination'>
        <button
          className='home-page__pagination__step'
          onClick={() => decrementPage()}
        >
          {' '}
          <span className='home-page__pagination__step--dec'></span>
        </button>
        <button
          className='home-page__pagination__step'
          onClick={() => incrementPage()}
        >
          <span className='home-page__pagination__step--add'></span>
        </button>
      </div>
    </section>
  ) : (
    <p>nao ha filmes disponiveis </p>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchMovies, incrementPage, decrementPage },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
