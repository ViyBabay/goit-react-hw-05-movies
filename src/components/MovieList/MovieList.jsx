import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ data }) => {
  if (!data || !data.results) {
    return null;
  }

  const movies = data.results;

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
