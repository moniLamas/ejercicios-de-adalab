import { useEffect, useState } from "react";
import callToApi from "../services/api";

const App = () => {
  // Estados

  // Creamos characters para guardar las series respondidos por el API, por eso es un array vacío
  const [series, setSeries] = useState([]);
  // Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchName, setSearchName] = useState("");

  // useEffect

  useEffect(() => {
    // Aquí podemos poner código JS, por ejemplo podríamos llamar a callToApi dentro de un if

    // Llamamos al API pasando por parámetros el searchName
    callToApi(searchName).then((response) => {
      // Cuando el API responde guardamos las series en el estado
      setSeries(response);
    });
    // Este useEffect depende de searchName por eso ponemos [searchName]
    // Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez al API para obtener nuevos datos
  }, [searchName]);

  // Eventos

  const handleSearchName = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(ev.target.value);
  };

  // Renderizado

  const renderSeries = () => {
    // Pintamos el listado de series respondido por el API
    return series.map((serie) => {
      return (
        <li key={serie.id}>
          Nombre: {serie.name}
          <img src={serie.image} alt={serie.name} />
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Buscador de series</h1>

      <form>
        <label htmlFor="name">Busca por el titulo de la serie:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchName}
          onChange={handleSearchName}
        />
      </form>

      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default App;
