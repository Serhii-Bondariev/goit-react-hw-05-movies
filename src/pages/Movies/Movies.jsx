import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Movies.module.css';
import DefaultPoster from 'components/DefaultPoster/DefaultPoster';
import SearchForm from 'components/SearchForm/SearchForm';
import { API_KEY, BASE_LANG, BASE_URL,MOVIE_POSTER_URL, } from 'components/constants/Api';

const Movies = () => {
  const [searchResults, setSearchResults] = useState(() => {
    const storedResults = localStorage.getItem('searchResults');
    return storedResults ? JSON.parse(storedResults) : [];
  });

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie`,
        {
          params: {
            language: BASE_LANG,
            api_key: API_KEY,
            include_adult: true,
            query: searchQuery,
          },
        }
      );

      console.log('Search Results:', response.data.results);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      
      toast.error('🦄 Error fetching movies. Please try again.', {
        position: "top-right",
        autoClose: 1999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return [];
    }
  };

  const handleSearchSubmit = async (searchQuery, e) => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warn('Please enter a movie title for search', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      
      return;
    }



    const results = await fetchMovies(searchQuery);

    if (results.length === 0) {
      toast.error('No movies found. Please change your search query.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    setSearchResults(results);

    // Збереження результатів у локальне сховище браузера
    localStorage.setItem('searchResults', JSON.stringify(results));
  };

  return (
    <div>
      <ToastContainer 
      
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
 />
      <Link className={styles.moviesSearchBtn} to="/">
        Go back
      </Link>
      <SearchForm onSubmit={handleSearchSubmit} />

      {searchResults.length > 0 && (
        <div className="movies_container">
          <ul className="movies_list">
            {searchResults.map((movie) => (
              <li key={movie.id} className={styles.movieCard}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.poster_path ? (
                    <img
                      className="movies_img"
                      src={`${MOVIE_POSTER_URL}${movie.poster_path}`}
                      alt={movie.title || movie.name}
                    />
                  ) : (
                    <div>
                      <DefaultPoster movieData={movie} />
                    </div>
                  )}
                </Link>
                <div className={styles.movieDetailsCard}>
                  <div className={styles.movieDetailsTitle}>
                    <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                      <p className={styles.movieTitle}>{movie.title}</p>
                    </Link>
                 
                  </div>
                  <div className={styles.movieDetailsText}>
                    Release Year: {movie.release_date.slice(0, 4)}
                  </div>
                  <div className={styles.movieDetailsText}>
                    Rating: {movie.vote_average.toFixed(1)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
