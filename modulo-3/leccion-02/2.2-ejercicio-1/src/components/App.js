import "../styles/App.scss";

// Fichero src/components/App.js
function App() {
  const handleInput = (ev) => {
    console.log("El evento lanzado es: ", ev);
    console.log("La tecla pulsada es: ", ev.key);
    console.log("El valor del input es: ", ev.target.value);
  };

  return (
    <div>
      <input type="text" name="email" id="email" onKeyUp={handleInput} />
    </div>
  );
}
export default App;
