import React from 'react';
import { MOVIE_POSTER_URL } from 'components/constants/Api';
import styles from './DefaultPoster.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviePoster = ({ movieData }) => {
  const posterPath = movieData.poster_path
    ? `${MOVIE_POSTER_URL}/${movieData.poster_path}`
    : defaultImg;

  return (
    <img
      className={styles.posterImg}
      src={posterPath}
      width={250}
      
      alt="poster"
    />
  );
};

export default MoviePoster;