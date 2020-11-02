
import Joi from 'joi-browser';

import { getGenres } from '../../services/fakeGenreService';
import { saveMovie } from '../../services/fakeMovieService';
import Form from './form';

const genres = getGenres();

class MovieForm extends Form {
  constructor(props) {
    super(props);
    if (props.movie) {
      this.state.data = {
        title: props.movie.title,
        numberInStock: props.movie.numberInStock,
        dailyRentalRate: props.movie.dailyRentalRate,
        genreId: props.movie.genre._id
      };
    }
    console.log('state',this.state);
  }

  state = {
    data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
    errors: {}
  };

  schema = {
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().min(0).max(100).required().label('Number in Stock'),
    dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate')
  };


  doSubmit = (movie) => {
    // Call the server
    if (this.props.movie) {
      movie._id = this.props.movie._id;
    }
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
            {[{ _id: '', name: 'Choose...' }, ...genres].map(genre =>
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
