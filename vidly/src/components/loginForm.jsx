
import Joi from 'joi-browser';

import Input from './common/input';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  };

  doSubmit = (data) => {
    // Call the server
    console.log('Submitted', data);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            field='username'
            label='Username'
            type='login'
            onInputChange={this.handleChange}
            error={errors.username}
          />
          <Input
            field='password'
            label='Password'
            type='password'
            onInputChange={this.handleChange}
            error={errors.password}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validateUser()}>
            Submit
        </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
