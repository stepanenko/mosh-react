
import React from 'react';
import { Link } from 'react-router-dom';

import Like from './common/like';
import Table from './common/table';

const MoviesTable = ({ movies, onSort, onLike, onDelete, sortColumn }) => {

  const columns = [
    {
      key: 'title', label: 'Title', path: 'title', content: m =>
        <Link to={`/movies/${m._id}`}>{m.title}</Link>
    },
    { label: 'Genre', path: 'genre.name' },
    { label: 'Stock', path: 'numberInStock' },
    { label: 'Rate', path: 'dailyRentalRate' },
    {
      key: 'like', content: movie =>
        <Like isLiked={movie.liked} onClick={() => onLike(movie)} />
    },
    {
      key: 'delete', content: movie =>
        <button className="btn btn-danger btn-sm"
          onClick={() => onDelete(movie._id)}>
          Delete
        </button>
    }
  ];

  return (
    <Table
      data={movies}
      columns={columns}
      onSort={onSort}
      sortColumn={sortColumn}
    />
  );
}

export default MoviesTable;
