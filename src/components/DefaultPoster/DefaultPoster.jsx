import React from 'react';
import { MOVIE_POSTER_URL } from 'components/constants/Api';

const defaultImg =
  '/assets/no_img.png';

const MoviePoster = ({ movieData }) => {
  const posterPath = movieData.poster_path
    ? `${MOVIE_POSTER_URL}/${movieData.poster_path}`
    : defaultImg;

  return (
    <img
      src={posterPath}
      width={250}

      alt="poster"
    />
  );
};

export default MoviePoster;
