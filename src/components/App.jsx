import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
