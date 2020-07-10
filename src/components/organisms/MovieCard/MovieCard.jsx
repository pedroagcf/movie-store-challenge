import React from 'react';
import { PATH_BANNER } from '../../../utils/js/constants';
import defaultImage from '../../../assets/images/cardDefaultImage.svg';

import './MovieCard.scss';
import { useHistory } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const history = useHistory();

  const goToMovieDetail = () => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className='movie-card'>
      <img
        className='movie-card__banner'
        src={poster_path ? PATH_BANNER + movie.poster_path : defaultImage}
        alt='cartaz filme'
      />
      <p className='movie-card__title'>{title}</p>
      <button className='movie-card__button' onClick={goToMovieDetail}>
        ver mais
      </button>
    </div>
  );
};

export default MovieCard;
