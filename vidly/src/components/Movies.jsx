
import React, { Component } from 'react';

import Like from './common/Like';
import Pagination from './common/Pagination';
import { getMovies, deleteMovie } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4
  };

  checkMoviesCount() {
    const count = this.state.movies.length;
    return count === 0 ? <p>There are no movies</p> : <p>There are {count} movies</p>;
  }

  onDeleteClick = id => {
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  handleLike(movie) {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(movies);
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return <div>
      {this.checkMoviesCount()}

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie, index) => <tr key={movie._id}>
            <td>{index + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like isLiked={movie.liked} onClick={() => this.handleLike(movie)}></Like></td>
            <td><button className="btn btn-danger btn-sm" onClick={() => this.onDeleteClick(movie._id)}>
              Delete
            </button></td>
          </tr>)}
        </tbody>
      </table>
      <Pagination
        itemsCount={this.state.movies.length}
        pageSize={this.state.pageSize}
        currentPage={this.state.currentPage}
        onPageChange={this.handlePageChange}
      />
    </div>
  }
}

export default Movies;
