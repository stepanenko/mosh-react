
import React from 'react';

const SearchBox = ({ data }) => {
  const handleChange = ({ currentTarget: input }) => {
    // console.log(input.value);
    const result = data.find(item => item.title === input);
    console.log(result);
  };

  return (
    <div className="form-group">
      <input type="text"
        className="form-control"
        id="search"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
