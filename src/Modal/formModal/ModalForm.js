import React from "react";
import "./ModalForm.css";

function ModalForm({ addTodo, setOpenModal }) {
	const [newTodoValue, setNewTodoValue] = React.useState("");

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};
	const onCancel = () => {
		setOpenModal(false);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	return (
		<form onSubmit={onSubmit} className="card">
			<b></b>
			<div className="content">
				<p className="title">Agrega Nuevo <br /> TO DO</p>
				<textarea onChange={onChange}></textarea>
				<div className="container-btn">
					<button onClick={onCancel}>
						<div className="btn cancelar">
							<a>CANCELAR</a>
						</div>
					</button>

					<button type="submit">
						<div className="btn aceptar">
							<a>ACEPTAR</a>
						</div>
					</button>
				</div>
			</div>
		</form>
	);
}

export { ModalForm };
