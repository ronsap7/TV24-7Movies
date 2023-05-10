// src/components/TvShowDetails.js
import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import './TvShowDetails.css';

const TvShowDetails = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTvShow = async () => {
      setLoading(true);
      const response = await api.get(`/tv/${id}`);
      setTvShow(response.data);
      setLoading(false);
    };

    fetchTvShow();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="tvshow-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
        alt={tvShow.name}
      />
      <div className="tvshow-info">
        <h2>{tvShow.name}</h2>
        <p>{tvShow.overview}</p>
        <p>First Air Date: {tvShow.first_air_date}</p>
        <p>Rating: {tvShow.vote_average}/10</p>
      </div>
    </div>
  );
};

export default TvShowDetails;
