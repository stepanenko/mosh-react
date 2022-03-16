
import React from 'react';
import Joi from 'joi-browser';

import Form from './common/form';

class RegisterForm extends Form {
  state = {
    data: { email: '', password: '', username: '' },
    errors: {}
  };

  schema = {
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(5).required().label('Password'),
    username: Joi.string().required().label('Username'),
  };

  doSubmit = (data) => {
    // Call the server
    console.log('Registered', data);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('username', 'Username')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
