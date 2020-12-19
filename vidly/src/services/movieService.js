
import { apiUrl } from './config.json';

const apiEndpoint = apiUrl + '/movies';

export async function fetchMovies() {
  const promise = await fetch(apiEndpoint);
  const movies = await promise.json();
  return movies;
}

export async function removeMovie(id) {
  return await fetch(apiEndpoint + '/' + id, { method: 'DELETE' });
}
