
import React from 'react';

const Input = ({ field, type, error, onInputChange }) => {

  return (
    <div className="form-group">
      <label htmlFor={field}>{field}</label>
      <input type={type} className="form-control"
        onChange={onInputChange}
        id={field}
        name={field}
        placeholder={`Your ${field}`}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
