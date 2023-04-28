import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchState, setSearchState }) {
    const onSearchValueChange = (event) => {
        setSearchState(event.target.value);
    };

    return (
        <input
            className="Search"
            placeholder="Cebolla"
            type="text"
            autocomplete="nope"
            value={searchState}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };
