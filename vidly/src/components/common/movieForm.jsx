import React from 'react';
import Joi from 'joi-browser';

import Form from './form';
import { getGenres } from '../../services/fakeGenreService';
import { saveMovie } from '../../services/fakeMovieService';

class MovieForm extends Form {
  state = {
    data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
    errors: {},
    genres: []
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().min(0).max(100).required().label('Number in Stock'),
    dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate')
  };

  componentDidMount() {
    getGenres().then(genres => this.setState({ genres }));

    if (this.props.movie) {
      this.setState({ data: this.mapToViewModel(this.props.movie) });
    }
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      genreId: movie.genre._id
    };
  }

  doSubmit = async movie => {
    const savedMovie = await saveMovie(movie);
    console.log(this.props.action, savedMovie);
    console.log('props', this.props);
    this.props.navigate('movies');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput('title', 'Title')}
        {this.renderSelect('genreId', 'Genre', this.state.genres)}
        {this.renderInput('numberInStock', 'Number in Stock', 'number')}
        {this.renderInput('dailyRentalRate', 'Rate')}
        {this.renderButton(this.props.action)}
      </form>
    );
  }
}

export default MovieForm;
