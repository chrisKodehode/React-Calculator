import React from "react";
import "../Display/Display.css";

function Display({ operand1, operator, operand2, result }) {
    return (
        <div className="display">
            <h1>
                {/* Display the first operand. */}
                {operand1}

                {/* If an operator has been chosen, display it. */}
                {operator ? ` ${operator} ` : ' '}

                {/* Display the second operand. */}
                {operand2}

                {/* If the result has been calculated, display it. */}
                {result !== "" ? ` = ${result}` : ''} 
            </h1>
        </div>
    )
}

export default Display;