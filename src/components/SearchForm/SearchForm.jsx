// components/SearchForm.js
import React, { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery, e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.moviesSearch}>
        <div>Search... </div>
        <input
          className={styles.moviesSearchInput}
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.moviesSearchBtn} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
