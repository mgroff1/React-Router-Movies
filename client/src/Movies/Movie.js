import React, { useState, useEffect,useParams } from 'react';
import axios from "axios";
import MovieCard from "./MovieCard";

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  const id = props.match.params.id;
  useEffect(() => {
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);

  const saveMovie = () => {
    const {addToSavedList} = props;
    addToSavedList(movie);
  
  };

    if (!movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard
          key={movie.id}
          movie={movie}
          title={movie.title}
          director={movie.director}
          metascore={movie.metascore}
          stars={movie.stars}
          addToSaved={props.addToSaved}
        />
        <div className="save-button" onClick={saveMovie}>
          Save
        </div>
      </div>
  );
}

export default Movie;
