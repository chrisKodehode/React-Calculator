import React from "react";
import "../Button/Button.css";

/*
    Label   = Text to be displayed on the button
    onClick = Function to be executed when user clicks a button
    type    = Type of the button, sort of like a className for styling
*/

function Button({label, onClick, type}) {
    return (
        <button className={`button ${type}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;