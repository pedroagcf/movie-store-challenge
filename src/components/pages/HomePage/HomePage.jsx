import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMovies from '../../../actions/movieActions';

import Loader from '../../atoms/Loader/Loader';
import MovieList from '../../organisms/MovieList/MovieList';

import './HomePage.scss';
const HomePage = ({ moviesData, fetchMovies }) => {
  const { loading, data, error } = moviesData;

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchMovies();
    }
  }, [data, loading, error, fetchMovies]);

  return loading ? (
    <section className='home-page'>
      <h1 className='home-page__title'>Filmes</h1>
      <Loader />
    </section>
  ) : data ? (
    <section className='home-page'>
      <h1 className='home-page__title'>Filmes</h1>
      <MovieList movies={data.results} />
    </section>
  ) : (
    <p>nao ha filmes disponiveis </p>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovies }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
