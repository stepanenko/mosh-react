
import { apiUrl } from './config.json';

export default async function fetchGenres() {
  const promise = await fetch(apiUrl + '/genres');
  const genres = await promise.json();
  return genres;
}
