import React from "react";
import "./TodoAdd.css";
function TodoAdd({ searchState, setSearchState }) {
	const onSearchValueChange = (event) => {
		console.log(event.target.value);
		setSearchState(event.target.value);
	};
	return (
		<div className="input__container">
			<div className="shadow__input"></div>
			<button className="input__button__shadow"></button>
			<input
				type="text"
				name="text"
				className="input__search"
				placeholder="agrega el  TODO"
				value={searchState}
				onChange={onSearchValueChange}
			/>
        
		</div>
	);
}

export { TodoAdd };

