import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import TvShowDetails from './components/TvShowDetails';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import GenrePage from './components/GenrePage';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/tv/:tvShowId" element={<TvShowDetails />} />
          <Route path="/search/:searchQuery" element={<SearchResults />} />
          <Route path="/:type/genre/:genreId" element={<GenrePage/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
