import React from 'react';
import MovieCard from '../../organisms/MovieCard/MovieCard';

import './MovieList.scss';
const MovieList = ({ movies }) => {
  return (
    <div className='movie-list__container'>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
