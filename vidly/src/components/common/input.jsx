
import React from 'react';

const Input = ({ field, type, onInputChange }) => {

  return (
    <div className="form-group">
      <label htmlFor={field}>{field}</label>
      <input type={type} className="form-control"
        onChange={onInputChange}
        id={field}
        name={field}
        placeholder={`Your ${field}`}
      />
    </div>
  );
}

export default Input;
