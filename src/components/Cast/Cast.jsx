import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path} `}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
