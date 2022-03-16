
import { apiUrl } from './config.json';

export async function fetchGenres() {
  const promise = await fetch(apiUrl + '/genres');
  const genres = await promise.json();

  return genres;
}
