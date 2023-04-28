import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoError } from "../TodoError/TodoError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { Modal } from "../Modal";
import { ModalForm } from "../Modal/formModal/ModalForm";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { TodoButton } from "../TodoButton/TodoButton";
import { Header } from "../Header/TodoHeader";
function AppUI() {
	const {
		loading,
		error,
		totalTodos,
		completeTodos,
		searchState,
		setSearchState,
		searchTodo,
		addTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		checkTodo,
	} = React.useContext(TodoContext);

	return (
		<React.Fragment>
			<Header>
				<TodoCounter totalTodos={totalTodos} completeTodos={completeTodos} />
				<TodoSearch searchState={searchState} setSearchState={setSearchState} />
			</Header>

			<TodoList>
				{error && <TodoError />}
				{loading && <TodoLoading />}
				{!loading && !searchTodo.length && <EmptyTodos />}

				{searchTodo.map((todo) => (
					<TodoItem
						key={todo.texto}
						texto={todo.texto}
						completado={todo.completado}
						onComplete={() => checkTodo(todo.texto)}
						onDelete={() => deleteTodo(todo.texto)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
					<ModalForm addTodo={addTodo} setOpenModal={setOpenModal} />
				</Modal>
			)}

			{!openModal && <TodoButton setOpenModal={setOpenModal} />}
		</React.Fragment>
	);
}

export { AppUI };
