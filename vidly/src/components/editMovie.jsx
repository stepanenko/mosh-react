
import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getMovie } from '../services/fakeMovieService';
// import MovieForm from './common/movieForm';

const MovieForm = React.lazy(() => import('./common/movieForm'));

function EditMovie() {
  const navigate = useNavigate();
  const params = useParams();
  // let [movie, setMovie] = useState({});

  // console.log('params.id', params.id);

  // useEffect(() => {
  //   async function fetchMovie() {
  //     const selectedMovie = await getMovie(params.id, 10);
  //     console.log('EDIT selectedMovie >>>', selectedMovie);
  //     setMovie(selectedMovie);
  //   }

  //   fetchMovie();
  // }, []);

  // if (!movie) {
  //   console.log('Movie not found');
  //   navigate('not-found', { replace: true });
  //   return null;
  // }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        {/* <h1>{movie.title} - Edit Movie</h1> */}
        {/* <pre>{JSON.stringify(movie, null, 4)}</pre> */}
        <MovieForm movieId={params.id} action='Save Movie' navigate={navigate} />
      </div>
    </Suspense>
  );
}

export default EditMovie;
