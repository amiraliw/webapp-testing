import { useState } from "react";

export const Calculator = () => {
  const [numbers, setNumbers] = useState([0, 0]);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("+");

  const performOperation = (op) => {
    switch (op) {
      case "+":
        return numbers[0] + numbers[1];
      case "-":
        return numbers[0] - numbers[1];
      case "x":
        return numbers[0] * numbers[1];
      case ":":
        if (numbers[1] !== 0) {
          return numbers[0] / numbers[1];
        } else {
          return "Division by zero";
        }
      default:
        return "+";
    }
  };

  const handleOperation = (op) => {
    setOperation(op);
    const newResult = performOperation(op);
    setResult(newResult);
  };

  const changeHandlerFirstNumber = (event) => {
    const { name, value } = event.target;
    setResult(null); // Clear the result when typing in the input fields
    if (name === "firstNumber") {
      setNumbers([+value, numbers[1]]);
    }
  };

  const changeHandlerSecondNumber = (event) => {
    const { name, value } = event.target;
    setResult(null); // Clear the result when typing in the input fields
    if (name === "secondNumber") {
      setNumbers([numbers[0], +value]);
    }
  };

  return (
    <>
      <h3>Calculator</h3>
      <form>
        <label htmlFor="firstNumber">First Number</label>
        <input
          id="firstNumber"
          type="text"
          name="firstNumber"
          onChange={changeHandlerFirstNumber}
        ></input>
        <label htmlFor="secondNumber">Second Number</label>
        <input
          type="text"
          id="secondNumber"
          name="secondNumber"
          onChange={changeHandlerSecondNumber}
        ></input>
        <button type="button" onClick={() => handleOperation("+")}>
          +
        </button>
        <button type="button" onClick={() => handleOperation("-")}>
          -
        </button>
        <button type="button" onClick={() => handleOperation("x")}>
          x
        </button>
        <button type="button" onClick={() => handleOperation(":")}>
          :
        </button>
      </form>
      {result !== null && (
        <p>{`${numbers[0]} ${operation} ${numbers[1]} = ${result}`}</p>
      )}
    </>
  );
};
