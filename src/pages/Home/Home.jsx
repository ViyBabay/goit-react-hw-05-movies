import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/api';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTrendMovies().then(data => {
      console.log(data); // Перевірка отриманих даних в консолі
      setData(data);
    });
  }, []);

  return (
    <section>
      <h1>Trending today: </h1>
      <MovieList data={data} />
    </section>
  );
};

export default Home;
