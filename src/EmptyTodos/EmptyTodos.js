import React from "react";
import './EmptyTodos.css'
function EmptyTodos() {
	return (
		<div className="container-loaded">

			<div className="not-found">

				NO SE ENCONTRARON TO DO
				<div className="loader-run"></div>
			</div>
		</div>
	);
}

export { EmptyTodos };
