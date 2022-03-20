
import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovie } from '../services/fakeMovieService';

const MovieForm = React.lazy(() => import('./common/movieForm'));

function EditMovie() {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const selectedMovie = await getMovie(params.id, 10);
      console.log('EDIT selectedMovie >>', selectedMovie.title);
      setMovie(selectedMovie);
    }

    fetchMovie();
  }, [params.id]);

  if (!movie) {
    console.log('Movie not found');
    navigate('not-found', { replace: true });
    return null;
  }

  return (
    <div>
      <h1>{movie.title} - Edit Movie</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <MovieForm movieId={params.id} action='Save Movie' navigate={navigate} />
      </Suspense>
    </div>
  );
}

export default EditMovie;
