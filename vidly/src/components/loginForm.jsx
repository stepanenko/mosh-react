
import React, { useState } from 'react';

import Input from './common/input';

const LoginForm = () => {
  const [login, setName] = useState('');
  const [password, setPass] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errorsObj = {};

    if (login.trim() === '') errorsObj.login = 'Login is required';
    if (password.trim() === '') errorsObj.password = 'Password is required';

    return Object.keys(errorsObj).length === 0 ? null : errorsObj;
  }
  
  const handleSubmit = ev => {
    ev.preventDefault();
    const err = validate();
    setErrors(err || {});

    if (err) {
      console.log('ERR', errors);
      return;
    }
    console.log('Logged In', { name: login, pass: password });
  }

  const handleChange = ({ currentTarget: input }) => {
    input.name === 'password' ? setPass(input.value) : setName(input.value);
    console.log('GOT IT', login, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input field='username' type='login' onInputChange={handleChange} error={errors.login} />
      <Input field='password' type='password' onInputChange={handleChange} error={errors.password} />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default LoginForm;
