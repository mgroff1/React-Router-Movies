import React from 'react';

const MovieCard = props => {
  return props.movie.stars ? (
        <div className="movie-card">
          <h2>{props.title}</h2>
          <div className="movie-director">
            Director: <em>{props.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{props.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {props.movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
  ) : (
    <div className="movie-card">
          <h2>Loading Movie Card...</h2>
          <div className="movie-director">
            Director: <em>Loading...</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>Loading...</strong>
          </div>
          <h3>Actors</h3>
            <div className="movie-star">
              Loading...
            </div>
          ))}
        </div>
  )
};

export default MovieCard;
