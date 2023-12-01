import React from 'react';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviePoster = ({ movieData }) => {
  const posterPath = movieData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
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