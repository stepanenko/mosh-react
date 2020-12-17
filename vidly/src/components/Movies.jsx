
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash';

import ListGroup from './listGroup';
import MoviesTable from './moviesTable';
import SearchBox from './common/searchBox';
import Pagination from './common/pagination';

import paginate from '../utils/paginate';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
// import { getGenres } from '../services/fakeGenreService';

import fetchGenres from '../services/genreService';
import fetchMovies from '../services/movieService';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: 'all',
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' },
    searchQuery: ''
  };

  componentDidMount() {
    // also can be solved with async/await, as Mosh did
    
    Promise.all([fetchGenres(), fetchMovies()]).then(res => {
      const genres = [{ _id: 'all', name: 'All Genres' }, ...res[0]];
      this.setState({ genres, movies: res[1] });
    });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id);
    this.setState({ movies });

    deleteMovie(id);
  };

  handleLike = movie => { // if any func would be not an arrow-func, then its THIS would point the wrong context
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(movies);
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: '' });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      pageSize, currentPage, movies,
      sortColumn, selectedGenre, searchQuery
    } = this.state;

    const filtered = searchQuery !== ''   // my solution
      ? movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
      : selectedGenre === 'all'   // my solution
        ? movies
        : movies.filter(m => m.genre._id === selectedGenre);
    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);
    const paginated = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginated };
  }

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
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
          <p>There are {totalCount || 'no'} movies</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
