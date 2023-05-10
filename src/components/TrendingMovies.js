import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../utils/api';
import { Link } from 'react-router-dom';
import './Trending.css';


const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <div className="trending-container">
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="trending-item">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
