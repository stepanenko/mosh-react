
import React from 'react';

const Input = ({ name, label, error, ...rest }) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input className="form-control"
        {...rest}
        name={name}
        id={name}
        placeholder={`Your ${name}`}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
