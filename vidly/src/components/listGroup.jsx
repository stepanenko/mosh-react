
import React from 'react';

const ListGroup = ({ items, onFilterClick }) => {
  return (
    <aside className="list-group">
      <button className="list-group-item list-group-item-action active"
        onClick={() => onFilterClick('all')}>
        All Genres
      </button>
      {items.map(genre => (
        <button
          className="list-group-item list-group-item-action"
          onClick={() => onFilterClick(genre.name)}
          key={genre._id}>
          {genre.name}
        </button>
      ))}
    </aside>
  );
}

export default ListGroup;
