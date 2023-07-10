import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setFilm(data));
  }, [movieId]);

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBackBtn}>Go back</button>
      <br />
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path} `}
        alt={film.title}
      />
      <h1>{film.title}</h1>
      <p>User score: </p>
      <h2>Overview: </h2>
      <p>{film.overview}</p>
      <h2>Genres: </h2>
      <p></p>
      <h3>Additional information</h3>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
