// Cast.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
// import { Link } from 'react-router-dom';
import styles from './Cast.module.css';
import DefaultPoster from '../../components/DefaultPoster/DefaultPoster';
import { BASE_URL, API_KEY,MOVIE_POSTER_URL,BASE_LANG } from 'components/constants/Api';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits`,
          {
            params: {
              language: BASE_LANG,
              api_key: API_KEY,
            },
          }
        );

        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  // const limitedCast = cast.slice(0, 5);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={styles.castTitle}>Cast</div>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li className={styles.card} key={actor.id}>
            {actor.profile_path ? <img
              className={styles.actorImg}
              loading="lazy"
              src={`${MOVIE_POSTER_URL}${actor.profile_path}`}
              alt={actor.name}
            /> 
              :
              <DefaultPoster movieData={actor} />
            }
            <div className={styles.actorInfo}>
              <p className={styles.actorName}>
                {' '}
                Name:
                <br /> {actor.name}
              </p>
              <p className={styles.actorCharacter}>
                Character:
                <br /> {actor.character}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;