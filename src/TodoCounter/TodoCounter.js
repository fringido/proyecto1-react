import React from "react";
import './TodoCounter.css'
function TodoCounter({completeTodos, totalTodos, loading}) {
    return(
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        {`Has completado ${completeTodos} TO DO de ${totalTodos}`}
        </h2>
    )
}

export {TodoCounter}

