import "../stylesheets/App.scss";

function App() {
  const handleClick = () => {
    fetch("http://localhost:3000/users", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Probando nuestro servidor</h1>
      </header>
      <main>
        <button onClick={handleClick}>Fetch me</button>
      </main>
    </div>
  );
}

export default App;
