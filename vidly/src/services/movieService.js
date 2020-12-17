
const url = 'http://localhost:3900/api/movies';

export async function fetchMovies() {
  const promise = await fetch(url);
  const movies = await promise.json();
  return movies;
}

export async function removeMovie(id) {
  try {
    const promise = await fetch(url + '/' + id, { method: 'DELETE' });
    const movie = await promise.json();
    return movie;
  } catch (err) {
    console.error('Smth went wrong while deleting a movie. Error:', err);
    return 'Error';
  }
}
