
import React from 'react';
import { getGenres } from '../services/fakeGenreService';

const Genres = () => {
  const genres = getGenres();
  console.log(genres);

  return (
    <aside className="list-group">
      <button type="button" className="list-group-item list-group-item-action active">
        All Genres
      </button>
      {genres.map(genre => (
        <button className="list-group-item list-group-item-action">{genre.name}</button>
      ))}
    </aside>
  );
}

export default Genres;
