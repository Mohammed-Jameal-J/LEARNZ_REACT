import React, { memo } from "react";

const SearchBar = memo(({handleSearchChange}) => {

    const handleChange = (event) => {
        handleSearchChange(event.target.value);
    }
  return (
    <input
      type="text"
      onChange={handleChange}
    //   value={text.text}
      placeholder="Add a New Task"
    />
  );
});

export default SearchBar;
