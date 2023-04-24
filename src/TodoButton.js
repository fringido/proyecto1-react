import React from "react";
import './TodoButton.css'
function TodoButton(data) {
    return(
        <button 
        onClick={data.onAddTodo}
        >ADD</button>
        )
}

export {TodoButton}