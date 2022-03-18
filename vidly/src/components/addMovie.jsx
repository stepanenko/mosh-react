
import React from 'react';

import MovieForm from './common/movieForm';

const AddMovie = ({ navigate }) => {

  return (
    <div>
      <h1>Add a Movie</h1>
      <MovieForm action='Add Movie' navigate={navigate} />
    </div>
  );
}

export default AddMovie;
