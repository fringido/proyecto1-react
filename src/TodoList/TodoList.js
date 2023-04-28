import React from "react";
import './TodoList.css'

function TodoList(props) {
    return(
        <section className="container-todo">
            {props.children}
        </section>
        )
}

export {TodoList}