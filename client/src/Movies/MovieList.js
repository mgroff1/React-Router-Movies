import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
const Server = 'http://localhost:3000/api/server/'
const MovieList = (props) => {
  
  const [movies, setMovies] = useState([])
  console.log(Server)
  useEffect(() => {
    const getMovies = () => {
      axios
        .get(Server)
        .then(response => {
          setMovies(response.data);
          console.log(Server)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

    return (
      <div className="movie-list">
        {movies.map(movie => {
          return (
          <div className="save-wrapper" key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="link">
              <MovieCard
                key={movie.id}
                movie={movie}
                title={movie.title}
                director={movie.director}
                metascore={movie.metascore}
                stars={movie.stars}
              />
            </Link>
          </div>
        )})}
      </div>
    );
  
}

export default MovieList;
