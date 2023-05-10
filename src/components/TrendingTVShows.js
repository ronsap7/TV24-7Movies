import React, { useState, useEffect } from 'react';
import { getTrendingTVShows } from '../utils/api';
import { Link } from 'react-router-dom';
import './Trending.css';

const TrendingTVShows = () => {
  const [trendingTVShows, setTrendingTVShows] = useState([]);

  useEffect(() => {
    const fetchTrendingTVShows = async () => {
      const tvShows = await getTrendingTVShows();
      setTrendingTVShows(tvShows);
    };

    fetchTrendingTVShows();
  }, []);

  return (
    <div>
      <h2>Trending TV Shows</h2>
      <div className="trending-container">
        {trendingTVShows.map((tvShow) => (
          <div key={tvShow.id} className="trending-item">
            <Link to={`/tv/${tvShow.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
                alt={tvShow.name}
              />
              <h3>{tvShow.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default TrendingTVShows;
