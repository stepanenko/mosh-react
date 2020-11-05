
import React from 'react';

const SearchBox = ({ query, onChange }) => {

  const handleChange = ({ currentTarget: input }) => {
    onChange(input.value);   // my solution
  };

  return (
    <div className="form-group">
      <input type="text"
        className="form-control"
        id="search"
        value={query}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
