
import React, { useState } from 'react';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  
  const submit = React.createRef();

  const handleSubmit = ev => {
    ev.preventDefault();
    // console.log(submit.current.value);
    // console.log(pass);
  }

  const handleChange = ({ currentTarget: input }) => {
    input.name === 'password'
      ? setPass(input.value)
      : setName(input.value);

      console.log(name, pass);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="login" className="form-control" autoFocus
          ref={submit}
          onChange={handleChange}
          id="username"
          name="username"
          placeholder="Your username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" 
          value={pass}
          onChange={handleChange}
          id="password"
          name="password"
          placeholder="Your password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default LoginForm;
