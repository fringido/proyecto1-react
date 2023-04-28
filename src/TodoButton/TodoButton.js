import React from "react";
import './TodoButton.css'

function TodoButton({setOpenModal}) {
    const onClickButton = () => {
        setOpenModal(true)
    }
    return(
        <button className="add" 
        onClick={onClickButton}
        >ADD</button>
        )
}

export {TodoButton}