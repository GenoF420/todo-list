
import React from "react";
import "./TodoSearch.css";
import searchIcon from "../../assets/search-icon.svg"

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <div className="search-container">
      <input
        value={searchValue}
        placeholder="Cortar cebollita"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export { TodoSearch };