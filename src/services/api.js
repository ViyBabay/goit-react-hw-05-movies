import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '70eafbb012dbe333280578c5b5998c9b';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

// export const getSearchMovies = async () => {};

// 'https://api.themoviedb.org/3/trending/movie/day?api_key=70eafbb012dbe333280578c5b5998c9b'
