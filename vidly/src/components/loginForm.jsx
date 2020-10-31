
import React, { useState } from 'react';
import Joi from 'joi-browser';

import Input from './common/input';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const userSchema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }

  const validate = () => {
    const options = { abortEarly: false };
    const user = { username, password };
    const { error } = Joi.validate(user, userSchema, options);
    console.log('JOI', error.details);

    if (!error) return null;

    const errorsObj = {};
    for (let item of error.details)
      errorsObj[item.path[0]] = item.message;
    return errorsObj;
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    const err = validate();
    setErrors(err || {});

    if (err) {
      console.log('ERR', errors);
      return;
    }
    console.log('Logged In', { username, password });
  }

  const handleChange = ({ currentTarget: input }) => {
    input.name === 'password' ? setPassword(input.value) : setUsername(input.value);
    console.log('GOT IT', username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input field='username' type='login' onInputChange={handleChange} error={errors.username} />
      <Input field='password' type='password' onInputChange={handleChange} error={errors.password} />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default LoginForm;
