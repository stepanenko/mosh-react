
import React, { Component } from 'react';

import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';

class MoviesTable extends Component {

  columns = [
    { label: 'Title', path: 'title' },
    { label: 'Genre', path: 'genre.name' },
    { label: 'Stock', path: 'numberInStock' },
    { label: 'Rate', path: 'dailyRentalRate' },
    { key: 'like', content: movie => <Like isLiked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
    {
      key: 'delete', content: movie => <button className="btn btn-danger btn-sm"
        onClick={() => this.props.onDelete(movie._id)}>
        Delete
      </button>
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={movies}
          columns={this.columns}
        />
      </table>
    );
  }
};

export default MoviesTable;
