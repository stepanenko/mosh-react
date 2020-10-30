
import React, { useState } from 'react';

import Input from './common/input';

const LoginForm = () => {
  const [login, setName] = useState('');
  const [password, setPass] = useState('');
  // const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (login.trim() === '') errors.login = 'Login is required';
    if (password.trim() === '') errors.password = 'Password is required';

    return Object.keys(errors).length === 0 ? null : errors;
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    let errors = validate();
    console.log('ERR', errors);
    if (errors) return;

    console.log('Logged In', { name: login, pass: password });
  }

  const handleChange = ({ currentTarget: input }) => {
    input.name === 'password' ? setPass(input.value) : setName(input.value);
    console.log('GOT IT', login, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input field='username' type='login' onInputChange={handleChange} />
      <Input field='password' type='password' onInputChange={handleChange} />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default LoginForm;
