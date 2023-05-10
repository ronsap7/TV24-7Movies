import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams, Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = () => {
  const { searchQuery } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const response = await api.get("/search/multi", {
        params: {
          query: searchQuery,
        },
      });
      setResults(response.data.results);
      setLoading(false);
    };

    fetchResults();
  }, [searchQuery]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="search-results">
      {results.map((result) => {
        const isMovie = result.media_type === "movie";
        const isTv = result.media_type === "tv";
        if (isMovie || isTv) {
          return (
            <div key={result.id} className="result-card">
              <Link to={`/${isMovie ? "movie" : "tv"}/${result.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  alt={result.title || result.name}
                />
                <h3>{result.title || result.name}</h3>
              </Link>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SearchResults;
