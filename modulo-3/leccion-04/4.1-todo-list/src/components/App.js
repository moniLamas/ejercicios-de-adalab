import "../styles/App.scss";

const App = () => {
  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ];

  const renderTask = () => {
    return tasks.map((tasks, index) => {
      return (
        <li key={index}>
          <span className={tasks.completed === true ? "completed" : ""}>
            {tasks.task}
          </span>
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTask()}</ol>
    </div>
  );
};

export default App;
