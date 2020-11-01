
import React from 'react';
import { getMovie } from '../../services/fakeMovieService';

const Movie = ({ match, history }) => {
  const movie = getMovie(match.params.id);

  const handleSave = () => {
    history.push('/movies');
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <h5>{movie.genre.name}</h5>
      <p>{movie.numberInStock}</p>
      <p>{movie.dailyRentalRate}</p>
      <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
    </div>
  );
}

export default Movie;
