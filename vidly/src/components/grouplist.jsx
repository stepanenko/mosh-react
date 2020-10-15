
import React from 'react';

const GroupList = () => {

  return (
    <aside className="list-group">
      <button type="button" className="list-group-item list-group-item-action">
        All Genres
  </button>
      <button type="button" className="list-group-item list-group-item-action active">Action</button>
      <button type="button" className="list-group-item list-group-item-action">Comedy</button>
      <button type="button" className="list-group-item list-group-item-action">Thriller</button>
    </aside>
  );
}

export default GroupList;
