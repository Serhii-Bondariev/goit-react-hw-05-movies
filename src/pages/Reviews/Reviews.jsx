import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import styled from './Reviews.module.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {
              language: 'en-US',
              api_key: '47b0a612b169acf1eb58a4d87a2b2bdd',
            },
          }
        );

        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  const limitedReviews = reviews; // Обмежте кількість відгуків

  if (loading) {
    return <Loader />;
  }

    return (
        <div>
            
            <div className={styled.reviewsTitle}>Reviews</div>

    <div className={styled.reviewsContainer}>
      <ul className={styled.reviewsList}>
        {limitedReviews.map(review => (
          <li className={styled.reviewsItem} key={review.id}>
            <p className={styled.reviewsAuthor}>{review.author}</p>
            <p className={styled.reviewsContent}>{review.content}</p>
            
            <a
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styled.reviewsLink}
            >
              Read full review
            </a>
          </li>
        ))}
        {reviews.length === 0 && <p>No reviews yet</p>}
      </ul>
      {/* {reviews.length > 3 && (
        <button className={styled.reviewsBtn}>
          <a href={`/movies/${movieId}/full-reviews`}>More Info</a>
        </button>
      )} */}
            </div>
      </div>
  );
};

export default Reviews;