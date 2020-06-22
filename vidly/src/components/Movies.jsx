
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  checkMoviesCount() {
    const count = this.state.movies.length;
    return count === 0 ? <p>There are no movies</p> : <p>There are {count} movies</p>;
  }

  render() {
    return <div>
      {this.checkMoviesCount()}

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Genre</th>
            <th>In Stock</th>
            <th>Rental Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie, index) => <tr key={movie._id}>
            <td>{index + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
          </tr>)}
        </tbody>
      </table>
    </div>

  }
}

export default Movies;
