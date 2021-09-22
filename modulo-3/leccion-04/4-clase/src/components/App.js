// Fichero src/components/App.js
import { useState } from "react";
// import data from './data.json';

const App = () => {
  // Estados
  const [persons, setPersons] = useState(data);

  const renderPerson = () => {
    return persons.map((person, index) => {
      return (
        <li key={index}>
          <img src="{person.medim}" alt="{person.name}" />
          <p>{person.name + "" + person.last}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderPerson()}</ul>
    </div>
  );
};

export default App;
