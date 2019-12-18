import React, { useState } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = (movie) => {
    let matches = savedList.filter(mov => mov.id === movie.id)
    return matches[0] ? null : setSavedList([...savedList, movie])

  };

    return (
      <div>
        <SavedList list={savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie
              {...props}
              addToSavedList={addToSavedList}
              list={savedList}
            />
          )}
        />
      </div>
    );

}

export default App;
