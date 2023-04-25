import React from "react";
import './ModalForm.css'

function ModalForm({ setCloseModal, setAddState, onAddTodo }) {
    const [valueTextArea, settValueTextArea] = React.useState('')
    const onCloseModal = () => {
        setCloseModal(false)
    }
    const saveText = (event) => {
        settValueTextArea(event.target.value);
    }
    const onAddModal = () => {
        setAddState(valueTextArea)
        setCloseModal(false)
        onAddTodo()
    }
	return (

		<div className="card">
			<b></b>
			<div className="content">
				<p className="title">ADD NEW TODO</p>
				<textarea
                    onChange={saveText}
                ></textarea>
				<div className="container-btn">
					<button onClick={onCloseModal}>
						<div className="btn cancelar">
							<a>CANCELAR</a>
						</div>
					</button>

					<button
                        onClick={ onAddModal}
                    >
						<div  className="btn aceptar">
							<a>ACEPTAR</a>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}

export { ModalForm };
