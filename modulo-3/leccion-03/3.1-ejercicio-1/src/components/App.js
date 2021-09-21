import { useState } from "react";

const App = () => {
  const [macaroons, setMacaroons] = useState("");
  const [potatoes, setPotatoes] = useState("");
  const [nuts, setNuts] = useState("");
  const [eggs, setEggs] = useState("");
  const [onion, setOnion] = useState("");
  const [beer, setBeer] = useState("");

  const handleIngredient = (ev) => {
    if (ev.target.id === "macaroons") {
      setMacaroons(ev.target.checked);
    } else if (ev.target.id === "potatoes") {
      setPotatoes(ev.target.checked);
    } else if (ev.target.id === "nuts") {
      setNuts(ev.target.id.checked);
    } else if (ev.target.id === "eggs") {
      setEggs(ev.target.checked);
    } else if (ev.target.id === "onion") {
      setOnion(ev.target.checked);
    } else if (ev.target.id === "beer") {
      setBeer(ev.target.checked);
    }
  };

  const renderMesaje = () => {
    if (onion && potatoes && eggs && !beer && !nuts && !macaroons) {
      return "Eres una persona concebollista";
    } else {
      return "Eres un robot sin paladar";
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="ingredients">
          Selecciona los ingredientes de la tortilla de patatas
        </label>

        <label htmlFor="macaroons">Macarrones</label>
        <input
          type="checkbox"
          id="macaroons"
          name="ingredient"
          value="macaroons"
          onChange={handleIngredient}
        />

        <label htmlFor="potatoes">Patatas</label>
        <input
          type="checkbox"
          id="potatoes"
          name="ingredient"
          value="potatoes"
          onChange={handleIngredient}
        />

        <label htmlFor="nuts">Nueces</label>
        <input
          type="checkbox"
          id="nuts"
          name="ingredient"
          value="nuts"
          onChange={handleIngredient}
        />

        <label htmlFor="eggs">Huevos</label>
        <input
          type="checkbox"
          id="eggs"
          name="ingredient"
          value="eggs"
          onChange={handleIngredient}
        />

        <label htmlFor="onion">Cebolla</label>
        <input
          type="checkbox"
          id="onion"
          name="ingredient"
          value="onion"
          onChange={handleIngredient}
        />

        <label htmlFor="beer">Cerveza</label>
        <input
          type="checkbox"
          id="beer"
          name="ingredient"
          value="beer"
          onChange={handleIngredient}
        />

        <p>{renderMesaje()}</p>
      </form>
    </div>
  );
};

export default App;
