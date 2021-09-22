// Fichero src/components/App.js
import { useState } from "react";
// import data from './data.json';
// import styles
const App = () => {
  // Estados
  const [persons, setPersons] = useState(data);
  const [searchName, setSearch] = useState("");

  const handleSearchName = (ev) => {
    setSearch(ev.target.value);
  };

  const handleClick = (ev) => {
    const id = ev.currentTarget.id;
    //cambiar el estado de true a false y viceversa al hacer click
    persons[id].isBlogger = !persons[id].isBlogger;
    setPersons([...persons]);
  };

  const renderPerson = () => {
    return persons
      .filter((person) => {
        return person.name.toLowerCase().includes(searchName.toLowerCase());
      })
      .map((person, index) => {
        return (
          <li
            key={index}
            onClick={handleClick}
            id={index}
            className={`classLi ${person.isBlogger ? "background" : ""}`}
          >
            <img src="{person.medim}" alt="{person.name}" />
            <p>{person.name + "" + person.last}</p>
          </li>
        );
      });
  };

  return (
    <div>
      <form action="">
        <input type="text" id="searchName" onChange={handleSearchName} />
      </form>
      <ul>{renderPerson()}</ul>
    </div>
  );
};

export default App;
