import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import './GenrePage.css';

const GenrePage = () => {
  const { type, genreId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await api.get(`/discover/${type}`, {
        params: { with_genres: genreId },
      });
      setItems(response.data.results);
      setLoading(false);
    };

    fetchItems();
  }, [type, genreId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="genre-page">
      <h2>{type === 'movie' ? 'Movies' : 'TV Shows'} in this genre:</h2>
      <div className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
            />
            <h3>{item.title || item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
