import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoButton } from "./TodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { Modal } from "./Modal";
import { ModalForm } from "./formModal/ModalForm";

const defaultTodo = [
	{ texto: "Leche", completado: false },
	{ texto: "Pollo", completado: true },
	{ texto: "Huevos", completado: false },
	{ texto: "Queso", completado: true },
	{ texto: "Agua", completado: false },
	{ texto: "Tocino", completado: true },
	{ texto: "Huevosm", completado: false },
	{ texto: "Quedsom", completado: true },
	{ texto: "Huevoes", completado: false },
	{ texto: "Quesoe", completado: true },
	{ texto: "Leacher", completado: false },
];

function App() {
	const [todo, setTodos] = React.useState(defaultTodo);
	const [searchState, setSearchState] = React.useState("");
	const [openModal, setOpenModal] = React.useState(false)
	const [addState, setAddState] = React.useState('')

	const completeTodos = todo.filter((todo) => !!todo.completado).length;
	const totalTodos = todo.length;
	let searchTodo = [];

	if (!searchState.length >= 1) {
		searchTodo = todo;
	} else {
		searchTodo = todo.filter((todo) => {
			const todoText = todo.texto.toLowerCase();
			const serchText = searchState.toLowerCase();

			return todoText.includes(serchText);
		});
	}
	const checkTodo = (text) => {
		const newTodo = [...todo];
		const indext = todo.findIndex((d) => d.texto == text);
		newTodo[indext].completado = true;
		setTodos(newTodo);
	};

	const deleteTodo = (text) => {
		const newTodo = todo.filter((d) => d.texto != text);
		setTodos(newTodo);
	};

	const addTodo = () => {
		const newTodo = [...todo,{			
			texto: addState,
			completado:false	
		}]
		setTodos(newTodo);
		setAddState('')
	};

	let form = false;

	return (
		<React.Fragment>
			{form && <TodoAdd />}
			<TodoCounter
				completeTodos={completeTodos}
				totalTodos={totalTodos}
			/>
			<TodoSearch
				searchState={searchState}
				setSearchState={setSearchState}
			/>
			<TodoList>
				{searchTodo.map((todos) => (
					<TodoItem
						key={todos.texto}
						text={todos.texto}
						completado={todos.completado}
						onComplete={() => {
							checkTodo(todos.texto);
						}}
						onDelete={() => {
							deleteTodo(todos.texto);
						}}
					/>
				))}
				{!openModal && (
					<TodoButton
					setOpenModal = {setOpenModal}
				/>
				)}
			</TodoList>
			{!!openModal && (
				<Modal>
					<ModalForm
						setCloseModal = {setOpenModal}
						setAddState = {setAddState}
						onAddTodo={() => {
							addTodo()
						}} 
					/>
			</Modal>
			)}
		</React.Fragment>
		// <TodoCounter/>
	);
}

export default App;
