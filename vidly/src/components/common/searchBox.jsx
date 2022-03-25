
import React from 'react';

const SearchBox = ({ value, onChange }) => {
  const onSearchInput = (event) => onChange(event.currentTarget.value);

  return (
    <input className="form-control my-3"
      name='query'
      type="text"
      value={value}
      placeholder="Search..."
      onChange={onSearchInput}
    />
  );
};

export default SearchBox;
