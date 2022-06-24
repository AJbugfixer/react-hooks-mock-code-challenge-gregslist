import React from "react";
import Search from "./Search";

function Header({searchText, handleSearch, filterListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchText={searchText} handleSearch={handleSearch} filterListings={filterListings}/>
    </header>
  );
}

export default Header;
