// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      const [movieResponse, tvResponse] = await Promise.all([
        api.get("/genre/movie/list"),
        api.get("/genre/tv/list"),
      ]);
      setMovieGenres(movieResponse.data.genres);
      setTvGenres(tvResponse.data.genres);
    };

    fetchGenres();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleGenreClick = (type, genreId) => {
    navigate(`/${type}/genre/${genreId}`);
  };

  return (
    <nav>
      <Link to="/" className="logo">
        TV24/7Movies
      </Link>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies or series..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="categories">
        <div className="dropdown dropdown-tv">
          <button className="dropbtn">Movies</button>
          <div className="dropdown-content">
            {movieGenres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleGenreClick("movie", genre.id)}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
        <div className="dropdown dropdown-tv">
          <button className="dropbtn">TV</button>
          <div className="dropdown-content">
            {tvGenres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleGenreClick("tv", genre.id)}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
