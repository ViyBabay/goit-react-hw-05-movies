import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import defaultImage from '../NotFoundImg/pngwing.com.png';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);
  return (
    <div>
      <ul className={s.cards}>
        {cast.map(actor => (
          <li key={actor.id} className={s.cardItem}>
            <img
              className={s.actorImg}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : defaultImage
              }
              alt={actor.name}
            />
            <p className={s.actorName}>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
