
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getMovie } from '../services/fakeMovieService';
import MovieForm from './common/movieForm';

function EditMovie() {
  const navigate = useNavigate();
  const params = useParams();
  let [movie, setMovie] = useState({});

  console.log('params.id', params.id);

  useEffect(() => {
    async function fetchMovie() {
      const mov = await getMovie(params.id, 10);
      console.log('mov', mov);
      setMovie(mov);
    }

    fetchMovie();
  }, []);

  if (!movie) {
    console.log('Movie not found');
    navigate('not-found', { replace: true });
    return null;
  }

  return (
    <div>
      <h1>{movie.title} - Edit Movie</h1>
      <pre>{JSON.stringify(movie, null, 4)}</pre>
      {/* <MovieForm movie={movie} action='Save Movie' navigate={navigate} /> */}
    </div>
  );
}

export default EditMovie;
