import React from "react";

function Search({searchText,handleSearch,filterListings}) {
  function handleSubmit(e) {
    e.preventDefault();
    //console.log("submitted");
  }

  console.log(searchText)
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={handleSearch}
      />
      <button type="submit" onClick={filterListings}>🔍</button>
    </form>
  );
}

export default Search;
