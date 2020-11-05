
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash';

import ListGroup from './listGroup';
import MoviesTable from './moviesTable';
import SearchBox from './common/searchBox';
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

  getPagedData = () => {
    const { pageSize, currentPage, movies, sortColumn, selectedGenre } = this.state;

    const filtered = selectedGenre === 'all'   // my solution
      ? movies
      : movies.filter(m => m.genre._id === selectedGenre);
    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);
    const paginated = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginated };
  }

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link to='/movies/new-movie' className='btn btn-primary mb-3'>
              New Movie
          </Link>
          <SearchBox data={this.state.movies}/>
          {totalCount === 0
            ? <p>There are no movies</p>
            : <p>There are {totalCount} movies</p>
          }
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={totalCount}
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
