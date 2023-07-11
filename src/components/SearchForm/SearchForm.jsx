import React from 'react';
import s from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ query, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.searchQuery.value.trim();
    if (newQuery !== query) {
      onSubmit(newQuery);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name="searchQuery" defaultValue={query ?? ''} />
      <button type="submit">Search movie</button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
