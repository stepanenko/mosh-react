
import React from 'react';

const LoginForm = () => {
  const submit = React.createRef();

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log(submit.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="login" autoFocus ref={submit} className="form-control" id="username" placeholder="Your username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default LoginForm;
