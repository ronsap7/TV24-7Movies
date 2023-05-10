import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const responses = await Promise.all([
        api.get("/trending/movie/week", { params: { page: 1 } }),
        api.get("/trending/movie/week", { params: { page: 2 } }),
        api.get("/trending/movie/week", { params: { page: 3 } }),
        
      ]);
      const combinedResults = responses[0].data.results.concat(responses[1].data.results);
      setMovies(combinedResults);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
