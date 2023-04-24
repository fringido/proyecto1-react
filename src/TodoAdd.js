import React from "react";
import "./TodoButton.css";
function TodoAdd({ searchState, setSearchState }) {
	const onSearchValueChange = (event) => {
		console.log(event.target.value);
		setSearchState(event.target.value);
	};
	return (
		<div class="input__container">
			<div class="shadow__input"></div>
			<button class="input__button__shadow"></button>
			<input
				type="text"
				name="text"
				class="input__search"
				placeholder="agrega el  TODO"
				value={searchState}
				onChange={onSearchValueChange}
			/>
            
		</div>
	);
}

export { TodoAdd };
