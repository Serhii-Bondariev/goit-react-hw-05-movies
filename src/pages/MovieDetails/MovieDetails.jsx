import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetails.module.css';
import { BASE_URL, API_KEY, BASE_LANG, MOVIE_POSTER_URL,COMPANY_LOGO_URL } from 'components/constants/Api';

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
          `${BASE_URL}/movie/${movieId}`,
          {
            params: {
              language: BASE_LANG,
              api_key: API_KEY,
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

  const backLink = location.state?.from || '/movies';

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
            src={`${MOVIE_POSTER_URL}${movieDetails.poster_path}`}
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
      src={`${COMPANY_LOGO_URL}${company.logo_path}`}
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
            
            <nav>
              <button className={styles.movieDetailsBtn} type="button" onClick={toggleCast}>Cast</button>
              <button className={styles.movieDetailsBtn} type="button" onClick={toggleReviews}>Reviews</button>
            </nav>
            {showCast && <Cast movieId={movieId} />}
            {showReviews && <Reviews movieId={movieId} />}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;