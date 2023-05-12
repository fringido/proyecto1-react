import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchState, setSearchState , loading}) {
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
            disabled = {loading}
        />
    );
}

export { TodoSearch };
