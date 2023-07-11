import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/api';
import s from './Home.module.css';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTrendMovies().then(data => {
      // console.log(data);
      setData(data);
    });
  }, []);

  return (
    <section>
      <h1 className={s.parag}>Trending today: </h1>
      <MovieList data={data} />
    </section>
  );
};

export default Home;
