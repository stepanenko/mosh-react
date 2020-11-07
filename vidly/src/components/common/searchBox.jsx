
import React from 'react';

const SearchBox = ({ value, onChange }) => {

  return (
    <input className="form-control my-3"
      name='query'
      type="text"
      value={value}
      placeholder="Search..."
      onChange={ev => onChange(ev.currentTarget.value)}
    />
  );
};

export default SearchBox;
