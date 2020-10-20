
import React, { Component } from 'react';

import Like from './common/like';
import ListGroup from './listGroup';
import Pagination from './common/pagination';

import paginate from '../utils/paginate';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: 'all',
    currentPage: 1,
    pageSize: 4
  };

  componentDidMount() {
    this.setState({ genres: getGenres(), movies: getMovies() });
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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre });

    // === My solution ===
    // const allMovies = getMovies();
    // if (genre === 'all') {
    //   this.setState({ movies: allMovies });
    // } else {
    //   const filteredMovies = allMovies.filter(movie => movie.genre.name === genre);
    //   this.setState({ movies: filteredMovies, currentPage: 1 });
    // }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, movies: allMovies, selectedGenre } = this.state;

    const filtered = selectedGenre === 'all'
      ? allMovies
      : allMovies.filter(m => m.genre._id === selectedGenre);
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          {filtered.length === 0
            ? <p>There are no movies</p>
            : <p>There are {filtered.length} movies</p>}
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
              {movies.map((movie, index) => <tr key={movie._id}>
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
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
