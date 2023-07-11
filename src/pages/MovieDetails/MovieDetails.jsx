import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import defaultImage from '../../components/NotFoundImg/pngwing.com.png';
import s from './MovieDetails.module.css';

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
    <div className={s.movie}>
      <button className={s.backBtn} onClick={handleBackBtn}>
        Go back
      </button>
      <br />
      <img
        className={s.poster}
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w300/${film.poster_path}`
            : defaultImage
        }
        alt={film.title}
      />
      <h1>
        {film.title} ({film.release_date && film.release_date.substring(0, 4)})
      </h1>
      <p>User score: {film.vote_average * 0.1 * 100} %</p>
      <h2>Overview: </h2>
      <p>{film.overview}</p>
      <p>
        <span>Genres: </span>
        {film.genres && film.genres.map(genre => genre.name).join(', ')}
      </p>
      <hr />
      <h3>Additional information</h3>
      <NavLink to={`/movies/${movieId}/cast`} className={s.link}>
        Cast
      </NavLink>
      <NavLink to={`/movies/${movieId}/reviews`} className={s.link}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
