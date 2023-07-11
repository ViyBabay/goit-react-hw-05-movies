import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';
import SearchForm from 'components/SearchForm/SearchForm';
import s from './Movies.module.css';

// const Movies = () => {
//   const [data, setData] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const queryParams = new URLSearchParams(location.search);
//   const query = queryParams.get('query') || '';

//   useEffect(() => {
//     if (query) {
//       fetchSearchMovies(query).then(response => setData(response.results));
//     } else {
//       setData([]);
//     }
//   }, [query]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const newQuery = e.target.elements.searchQuery.value.trim();
//     if (newQuery !== query) {
//       navigate(`/movies?query=${newQuery}`);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="searchQuery" defaultValue={query} />
//         <button type="submit">Search movie</button>
//       </form>
//       <ul className={s.list}>
//         {data.map(movie => (
//           <li key={movie.id}>
//             <NavLink to={`/movies/${movie.id}`} className={s.listLink}>
//               {movie.title}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const Movies = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  useEffect(() => {
    if (query) {
      fetchSearchMovies(query).then(response => setData(response.results));
    } else {
      setData([]);
    }
  }, [query]);

  const handleSearchSubmit = newQuery => {
    navigate(`/movies?query=${newQuery}`);
  };

  return (
    <div>
      <SearchForm query={query} onSubmit={handleSearchSubmit} />
      <ul className={s.list}>
        {data.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} className={s.listLink}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
