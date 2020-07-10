import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';

import fetchMovieDetails from '../../../actions/MovieDetailsActions';
import MovieDetailsCard from '../../organisms/MovieDetailsCard/MovieDetailsCard';
import Loader from '../../atoms/Loader/Loader';

import './MovieDetailPage.scss';
const MovieDetailPage = ({ movieDetailsData, fetchMovieDetails }) => {
  const { loading, data, error } = movieDetailsData;
  const { movieId } = useParams();

  useEffect(() => {
    if ((!data && !loading && !error) || (!loading && data?.id != movieId)) {
      fetchMovieDetails(movieId);
      console.log(typeof movieId);
      console.log(typeof data?.id);
    }

    // if (!loading && data?.id != movieId) {
    //   fetchMovieDetails(movieId);
    // }
  }, [data, loading, error, movieId, fetchMovieDetails]);

  return loading ? (
    <section className='Product-detail-page'>
      <Loader />
    </section>
  ) : !data ? (
    <section className='Product-detail-page'>
      <p className='Product-detail-page__alert'>nada a ser exibido</p>
    </section>
  ) : data ? (
    <section className='Product-detail-page'>
      <MovieDetailsCard movieDetails={data} />
    </section>
  ) : (
    <p>erro!</p>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovieDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
