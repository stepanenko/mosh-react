
const url = 'http://localhost:3900/api/genres';

export default async function fetchGenres() {
  const promise = await fetch(url);
  const genres = await promise.json();
  return genres;
}
