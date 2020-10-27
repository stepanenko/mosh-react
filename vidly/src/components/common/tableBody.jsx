
import React, { Component } from 'react';

import Like from './like';

class TableBody extends Component {

  render() {
    const { movies, onDelete, onLike } = this.props;

    return (
      <tbody>
        {movies.map(movie =>
          <tr key={movie._id}>
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
    );
  }
}

export default TableBody;
