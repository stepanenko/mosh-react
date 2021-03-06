
import React from 'react';

import { getMovie } from '../services/fakeMovieService';
import MovieForm from './common/movieForm';

const EditMovie = ({ match, history }) => {
  const movie = getMovie(match.params.id);
  if (!movie) {
    history.replace('/not-found');
    return null;
  }

  return (
    <div>
      <h1>{movie.title} - Edit Movie</h1>
      <MovieForm movie={movie} action='Save Movie' history={history}/>
    </div>
  );
}

export default EditMovie;
