import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [number, setNumber] = useState(0);
  function increase() {
    return setNumber(number + 1);
  }
  function decrease() {
    return setNumber(number - 1);
  }
  function reset() {
    setNumber(0);
  }
  return (
    <div>
      <h1>El Contador</h1>
      <p>Contador: {number}</p>
      <button onClick={increase}>Incrementa 1</button>
      <button onClick={decrease}>Decrementa 1</button>
      <button onClick={reset}>Resetea</button>
    </div>
  );
}

export default App;
