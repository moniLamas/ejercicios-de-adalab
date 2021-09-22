import { useState } from "react";

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const handleNumberA = (ev) => {
    const newValue = parseInt(ev.currentTarget.value);
    setNumberA(newValue);
  };
  const handleNumberB = (ev) => {
    const newValue = parseInt(ev.currentTarget.value);
    setNumberB(newValue);
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label>
          Escribe un número:
          <input
            type="number"
            name="name"
            onChange={handleNumberA}
            value={numberA}
          />
        </label>
        <label>
          Escribe otro número:
          <input
            type="number"
            name="email"
            onChange={handleNumberB}
            value={numberB}
          />
        </label>
      </form>
      <p>
        La suma de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;
