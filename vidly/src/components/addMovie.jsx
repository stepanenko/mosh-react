
import React from 'react';

import MovieForm from './common/movieForm';

const AddMovie = ({ history }) => {

  return (
    <div>
      <h1>Add a Movie</h1>
      <MovieForm action='Add Movie' history={history} />
    </div>
  );
}

export default AddMovie;
