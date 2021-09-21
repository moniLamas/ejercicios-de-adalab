import "../styles/App.scss";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    }
  );
  const handleCompleted = (ev) => {
    const clickedTasksId = ev.currentTarget.id;
    const foundTasks = tasks.find((tasks) => tasks.id === clickedTasksId);

    foundTasks.isCompleted = !foundTasks.isCompleted;

    setTasks([...tasks]);
  };

  const renderTask = () => {
    return tasks.map((tasks, index) => {
      return (
        <li key={index} id={index} onClick={handleCompleted}>
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
