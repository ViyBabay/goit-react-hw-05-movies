import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import { useEffect } from 'react';
// import { getPopMovies } from 'services/api';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<MovieDetails />} />
            <Route path="/movies/:movieId/reviews" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
