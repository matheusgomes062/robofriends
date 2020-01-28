import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <React.Fragment>
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={searchChange}
        />
      </div>
    </React.Fragment>
  );
};

export default SearchBox;
