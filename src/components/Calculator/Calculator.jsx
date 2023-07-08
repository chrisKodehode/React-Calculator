import React, { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "../Calculator/Calculator.css";

function Calculator() {
  /* 
    Declare and initialize constant state variables
    operand1 and operand2 for storing the numbers that the user inputs,
    operator for storing the operations to perform the calculations
    result for storing the result of the operation
  */
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (num) => {
    // If an operator hasn't been chosen yet,
    if (!operator) {
      // append the clicked number to the end of operand1. 
      setOperand1(operand1 + num);
    }

    // If an operator has been chosen,
    else {
      // append the clicked number to the end of operand2.
      setOperand2(operand2 + num); 
    }
  };
  
  const handleOperatorClick = (op) => {
    // If operand1 is not empty,
    if (operand1) {
      // set the clicked symbol as the current operator. 
      setOperator(op); 
    }
  };

  const handleEqualClick = () => {
    if (operand1 && operand2 && operator) {
      // Calculation Logic & res = result
      let res = 0;

      switch (operator) {
        // Using parseFloat to convert a string to a floating number so the calculation works as expected
        case "+":
          res = parseFloat(operand1) + parseFloat(operand2);
          break;

        case "-":
          res = parseFloat(operand1) - parseFloat(operand2);
          break;

        case "*":
          res = parseFloat(operand1) * parseFloat(operand2);
          break;

        case "/":
          if (operand2 !== "0") {
            res = parseFloat(operand1) / parseFloat(operand2);
          } 
          
          else {
            alert("Cannot divide by zero");
            return;
          }
          break;

        default:
          break;
      }

      // Set result to operand1, reset operand2 and operator
      setOperand1(String(res));
      setOperand2("");
      setOperator("");
    }
  };

  const handleDeleteClick = () => {
    // If there is no value in operand2,
    if (!operand2) {
      // remove the last character from operand1. 
      setOperand1(operand1.slice(0, -1)); 
    } 
    
    // If there is a value in operand2,
    else {
      // remove the last character from operand2.
      setOperand2(operand2.slice(0, -1)); 
    }
  };

  const handleResetClick = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setResult("");
  };

  const handleDotClick = () => {
    // If an operator hasn't been chosen yet,
    if (!operator) {
      // and if operand1 doesn't already include a dot,
      if (!operand1.includes('.')) {
        // append a dot to the end of operand1.
        setOperand1(operand1 + '.'); 
      }
    }

    // If an operator has been chosen,
    else {
      // and if operand2 doesn't already include a dot,
      if (!operand2.includes('.')) {
        // append a dot to the end of operand2.
        setOperand2(operand2 + '.'); 
      }
    }
  };

  return (
    <div className="calculator">
      <ThemeSwitcher />
      <Display operand1={operand1} operand2={operand2} operator={operator} result={result} />
      <div className="calculator-buttons">
        <div className="button-row">
          <Button label="7" type="number" onClick={() => handleNumberClick("7")} />
          <Button label="8" type="number" onClick={() => handleNumberClick("8")} />
          <Button label="9" type="number" onClick={() => handleNumberClick("9")} />
          <Button label="DEL" type="del" onClick={handleDeleteClick} />
        </div>

        <div className="button-row">
          <Button label="4" type="number" onClick={() => handleNumberClick("4")} />
          <Button label="5" type="number" onClick={() => handleNumberClick("5")} />
          <Button label="6" type="number" onClick={() => handleNumberClick("6")} />
          <Button label="+" type="operation" onClick={() => handleOperatorClick("+")} />
        </div>

        <div className="button-row">
          <Button label="1" type="number" onClick={() => handleNumberClick("1")} />
          <Button label="2" type="number" onClick={() => handleNumberClick("2")} />
          <Button label="3" type="number" onClick={() => handleNumberClick("3")} />
          <Button label="-" type="operation" onClick={() => handleOperatorClick("-")} />
        </div>

        <div className="button-row">
          <Button label="." type="number" onClick={handleDotClick} />
          <Button label="0" type="number" onClick={() => handleNumberClick("0")} />
          <Button label="/" type="operation" onClick={() => handleOperatorClick("/")} />
          <Button label="x" type="operation" onClick={() => handleOperatorClick("*")} />
        </div>

        <div className="button-row">
          <Button label="RESET" type="reset" onClick={handleResetClick} />
          <Button label="=" type="equal" onClick={handleEqualClick} />
        </div>

      </div>
    </div>
  );
}

export default Calculator;