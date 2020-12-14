
const url = 'http://localhost:3900/api/movies';

export default async function fetchMovies() {
  const promise = await fetch(url);
  const movies = await promise.json();
  return movies;
}
