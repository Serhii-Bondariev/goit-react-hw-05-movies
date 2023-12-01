import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              language: 'uk-UA',
              api_key: '47b0a612b169acf1eb58a4d87a2b2bdd',
            },
          }
        );

        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const toggleCast = () => {
    setShowCast(!showCast);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  if (!movieDetails) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const backLink = location.state?.from || '/movies'; // Виправлено тут

  return (
    <div>
      <div>
        <Link className={styles.MovieDetailslink} to={backLink}>
          GO BACK
        </Link>
      </div>
      <div>
        <div className={styles.movieDetails}>
          <img
            className={styles.movieDetailsImg}
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div>
            <section className={styles.movieDetailsSection}>
              <ul>
                <li>
                  <h2>
                    {movieDetails.original_title}{' '}
                    {movieDetails.release_date &&
                      `(${movieDetails.release_date.slice(0, 4)})`}
                  </h2>
                  <div>
                    <span>
                      <span className={styles.movieDetailsSpan}>R</span>{' '}
                      {movieDetails.release_date}{' '}
                    </span>
                    <span>
                      <span className={styles.movieDetailsSpan}>G</span>
                    </span>{' '}
                    {movieDetails.genres.map(genre => genre.name).join(', ')}{' '}
                    <span>
                      {' '}
                      <span className={styles.movieDetailsSpan}>T</span>{' '}
                      {`${Math.floor(movieDetails.runtime / 60)}h ${
                        movieDetails.runtime % 60
                      }m`}{' '}
                    </span>
                  </div>
                  <h4>{movieDetails.tagline}</h4>

                  <div>
                    <h4>Rating:</h4> {movieDetails.vote_average.toFixed(1)}
                  </div>
                  <div>
                    <h4>Overview:</h4> {movieDetails.overview}
                  </div>
                  <h4>Production: </h4>
{movieDetails.production_companies.map((company) => (
  company.logo_path && (
    <img
      key={company.id} 
      className={styles.movieDetailsLogo}
      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
      alt={company.name}
    />
  )
))}

                </li>
              </ul>
            </section>
          </div>
        </div>

        <div>
          <p className={styles.movieDetailsTitle}>Additional information</p>
          <div>
            {showCast && <Cast movieId={movieId} />}
            {showReviews && <Reviews movieId={movieId} />}
            <nav>
              <button className={styles.movieDetailsBtn} type="button" onClick={toggleCast}>Cast</button>
              <button className={styles.movieDetailsBtn} type="button" onClick={toggleReviews}>Reviews</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;