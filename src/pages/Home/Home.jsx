import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import { NavLink } from 'react-router-dom';
import './Home.module.css';
import Headtitle from '../../components/Headtitle/Headtitle';
import { BASE_LANG , API_KEY, BASE_URL} from 'components/constants/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/trending/all/day`,
          {
            params: {
              language: BASE_LANG,
              api_key: API_KEY,
              include_adult: true,
            },
          }
        );

        setTrendingMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="movies_container">
    <Headtitle />
      {/* <h1 className="movies_home-title">Trending Movies Today</h1> */}
      <ul className="movies_list">
        {trendingMovies.map(movie => (
          <li key={movie.id} className="movies_item">
            <NavLink to={`/movies/${movie.id}`}>
              <img
                className="movies_img"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
            </NavLink>

            <div className="movies_info">
              <h3 className="movies_title">{movie.title || movie.name}</h3>
              <div className="movies_description">
                <div>Realise: {movie.release_date || movie.first_air_date}</div>
              </div>
              <p>Raiting: {movie.vote_average.toFixed(1)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;