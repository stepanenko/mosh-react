
const url = 'http://localhost:3900/api/movies';

export async function fetchMovies() {
  const promise = await fetch(url);
  const movies = await promise.json();
  return movies;
}

export async function removeMovie(id) {
  return await fetch(url + '/' + id, { method: 'DELETE' });
}
