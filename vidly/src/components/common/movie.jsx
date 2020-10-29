
import React from 'react';

const Movie = ({ match, history }) => {
  const { id } = match.params;

  const handleSave = () => {
    history.replace('/movies');
  }

  return (
    <div>
      <h2>Movie - {id}</h2>
      <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
    </div>
  );
}

export default Movie;
