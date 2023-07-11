import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ data }) => {
  if (!data || !data.results) {
    return null;
  }

  const movies = data.results;

  return (
    <>
      <ul className={s.cards}>
        {movies.map(movie => (
          <li key={movie.id} className={s.list}>
            <img
              className={s.poster}
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <NavLink to={`/movies/${movie.id}`} className={s.listLink}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
};
