
import React, { Component } from 'react'
import _ from 'lodash';

import ListGroup from './listGroup';
import MoviesTable from './moviesTable';
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
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres', _id: 'all' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleSort = sortColumn => {
    console.log('sortColumn', sortColumn);
    this.setState({ sortColumn });
  };

  handleDelete = id => {
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  handleLike = movie => { // if this func would be not an arrow one then THIS would point the wrong context
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(movies);
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;

    const filtered = selectedGenre === 'all'   // my solution
      ? allMovies
      : allMovies.filter(m => m.genre._id === selectedGenre);

    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    const movies = paginate(sorted, currentPage, pageSize);

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
            : <p>There are {filtered.length} movies</p>
          }
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
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
