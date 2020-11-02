
import Joi from 'joi-browser';

import { getGenres } from '../../services/fakeGenreService';
import { saveMovie } from '../../services/fakeMovieService';
import Form from './form';

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
    const genres = getGenres();
    this.setState({ genres });
    if (this.props.movie)
      this.setState({ data: this.mapToViewModel(this.props.movie) });
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

  doSubmit = movie => {
    // Call the server
    const savedMovie = saveMovie(movie);
    console.log(this.props.action, savedMovie);
    this.props.history.push('/movies');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput('title', 'Title')}

        <label htmlFor="inputSelect">Genre</label>
        <div className="input-group mb-3">
          <select className="custom-select" id="inputSelect" name='genreId' onChange={this.handleChange}>
            {[{ _id: '', name: 'Choose...' }, ...this.state.genres].map(genre =>
              <option key={genre._id} value={genre._id}>
                {genre.name}
              </option>)}
          </select>
        </div>
        {this.state.errors.genreId && <div className="alert alert-danger">{this.state.errors.genreId}</div>}

        {this.renderInput('numberInStock', 'Number in Stock', 'number')}
        {this.renderInput('dailyRentalRate', 'Rate')}
        {this.renderButton(this.props.action)}
      </form>
    );
  }
}

export default MovieForm;
