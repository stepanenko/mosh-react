
import React, { Component } from 'react';

import Like from './common/like';

class MoviesTable extends Component {

  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  }

  render() {
    const { movies, onLike, onDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => this.raiseSort('title')}>Title</th>
            <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
            <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
            <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
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
    );
  }
};

export default MoviesTable;
