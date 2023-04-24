import React from "react";
import './TodoCounter.css'
function TodoCounter(props) {
    const {totalTodos, completeTodos} = props
    return(
        <h2 className="TodoCounter">{`Has completado ${completeTodos} TODO de ${totalTodos}`}</h2>
    )
}

export {TodoCounter}