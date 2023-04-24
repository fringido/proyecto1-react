import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return(
        <li className="item1">
            <div className="item2">
            <span className={`Icon Icon-check ${props.completado && 'Icon-check--active'}`}
            onClick={props.onComplete }
            >
        √
      </span>           
       <p>{props.text}</p>
            <span className="delete"
            onClick={props.onDelete }
            >X</span>
            </div>
        </li>
    )
}

export {TodoItem}