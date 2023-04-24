import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchState, setSearchState }) {
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchState(event.target.value);
    };
  
    return (
      <input
        className="Search"
        placeholder="Cebolla"
        value={searchState}
        onChange={onSearchValueChange}
      />
    );
  }

export { TodoSearch };
