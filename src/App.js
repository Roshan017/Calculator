import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }
  function sub(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }
  function mult(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }
  function div(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }
  function clri(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }
  function clrr(e) {
    e.preventDefault();
    setResult((result) => 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simple Working Calculator</h1>
      </div>
      <div>
        <form>
          <p className="res" ref={resultRef}>
            Result: {result}
          </p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a Number"
          />
          <br />
          <button onClick={plus}>Add</button>
          <button onClick={sub}>Substract</button>
          <br />
          <button onClick={mult}>Multiply</button>
          <button onClick={div}>Divide</button>
          <br />
          <button onClick={clri}>Reset Input</button>
          <button onClick={clrr}>Reset Result</button>
        </form>
      </div>
    </div>
  );
}

export default App;
