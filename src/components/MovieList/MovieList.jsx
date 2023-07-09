import React, { useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';

const MovieList = () => {
  useEffect(() => {
    fetchTrendMovies().then(res => console.log(res));
  }, []);
  return <div>MovieList</div>;
};

export default MovieList;
