// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "d921964b5dfa4f68b5ceac01e663a0f1",
  },
});

export default api;



export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getTrendingTVShows = async () => {
  try {
    const response = await api.get('/trending/tv/week');
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
