import React, { useState } from 'react';
import './MainPage.css'
import TrendingMovies from './TrendingMovies';
import TrendingTVShows from './TrendingTVShows';

const MainPage = () => {
  const [showTrendingMovies, setShowTrendingMovies] = useState(false);
  const [showTrendingTVShows, setShowTrendingTVShows] = useState(false);

  const handleMoviesClick = () => {
    setShowTrendingMovies(!showTrendingMovies);
  };

  const handleTVShowsClick = () => {
    setShowTrendingTVShows(!showTrendingTVShows);
  };

  return (
    <div className="home-container">
      <h2 className="welcome-message">Welcome to TV24/7Movies</h2>
      <div className="sections">
        <div className="section">
          <h3>Click below to display trending movies</h3>
          <button onClick={handleMoviesClick}>Trending Movies</button>
          {showTrendingMovies && <TrendingMovies />}
        </div>
  
        <div className="section">
          <h3>Click below to display trending TV shows</h3>
          <button onClick={handleTVShowsClick}>Trending TV Shows</button>
          {showTrendingTVShows && <TrendingTVShows />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
