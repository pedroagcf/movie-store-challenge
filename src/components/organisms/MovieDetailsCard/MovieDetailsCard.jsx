import React from 'react';
import { PATH_BANNER } from '../../../utils/js/constants';
import defaultImage from '../../../assets/images/cardDefaultImage.svg';

import './MovieDetailsCard.scss';
const MovieDetailsCard = ({ movieDetails }) => {
  const { overview, poster_path, title, runtime, vote_average } = movieDetails;

  return (
    <section className='movie-details-card'>
      <h1 className='movie-details-card__title-info'>detalhes</h1>
      <div className='movie-details-card__group-info'>
        <img
          className='movie-details-card__banner'
          src={poster_path ? PATH_BANNER + poster_path : defaultImage}
          alt='cartaz filme'
        />
        <div className='movie-details-card__group-info__summary'>
          <p className='movie-details-card__title'>Titulo: {title}</p>
          <p className='movie-details-card__time-duration'>
            Duração: {runtime}
          </p>
          <p className='movie-details-card__note'>Avaliaçao: {vote_average}</p>
        </div>
      </div>
      <p className='movie-details-card__description'>{overview}</p>
    </section>
  );
};

export default MovieDetailsCard;
