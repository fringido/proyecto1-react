import React from "react";
import './TodoList.css'

function TodoList(props) {
	const renderFunc = props.children || props.render;

	return (
		<section className="container-todo">
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{(!props.loading && !props.totalTodos) && props.onEmpytyTodos()}

			{(!!props.totalTodos && !props.searchTodo.length) && props.onEmpytySearchResult(props.searchText)}

			{props.searchTodo.map(renderFunc)}
		</section>
	)
}

export { TodoList }