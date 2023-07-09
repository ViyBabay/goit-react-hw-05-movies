import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '70eafbb012dbe333280578c5b5998c9b';
// const END_POINTS = {
//   trending: '/trending/movie/week',
//   querySearch: '/search/movie',
//   movieDetails: '/movie',
//   movieCredits: '/credits',
//   movieReviews: '/reviews',
// };

export const fetchTrendMovies = async () => {
  const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};

export const getSearchMovies = async () => {};

export const getMovieDetails = async () => {};

export const getMovieCast = async () => {};

export const getMovieReviews = async () => {};
