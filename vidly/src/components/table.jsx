
import React from 'react';

import Like from './common/like';

const Table = ({ movies, onLike, onDelete, onSort }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th onClick={() => onSort('title')}>Title</th>
          <th onClick={() => onSort('genre.name')}>Genre</th>
          <th onClick={() => onSort('numberInStock')}>Stock</th>
          <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) =>
          <tr key={movie._id}>
            <td>{index + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                isLiked={movie.liked}
                onClick={() => onLike(movie)}
              />
            </td>
            <td>
              <button className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie._id)}>
                Delete
              </button>
            </td>
          </tr>)}
      </tbody>
    </table>
  )
};

export default Table;
