import React, { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function calculate(operation) {

    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);

    switch(operation) {

      case "+":
        setResult(n1 + n2);
        break;

      case "-":
        setResult(n1 - n2);
        break;

      case "*":
        setResult(n1 * n2);
        break;

      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;

      default:
        setResult("Invalid");
    }
  }

  return (

    <div style={{ padding: "20px" }}>

      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calculate("+")}>Add</button>

      <button onClick={() => calculate("-")}>Subtract</button>

      <button onClick={() => calculate("*")}>Multiply</button>

      <button onClick={() => calculate("/")}>Divide</button>

      <h3>Result: {result}</h3>

    </div>
  );
}

export default App;