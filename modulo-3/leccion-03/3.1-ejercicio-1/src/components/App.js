import { useState } from "react";

const App = () => {
  // valor inicial a string vacío
  const [ingredient, setIngredient] = useState("");

  // la función manejadora
  const handleIngredient = (ev) => {
    setIngredient(ev.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="ingredients">
          Selecciona los ingredientes de la tortilla de patatas
        </label>

        <label htmlFor="macaroons">Macarrones</label>
        <input
          type="radio"
          id="macaroons"
          name="ingredient"
          value="macaroons"
          onChange={handleIngredient}
        />

        <label htmlFor="potatoes">Patatas</label>
        <input
          type="radio"
          id="potatoes"
          name="ingredient"
          value="potatoes"
          onChange={handleIngredient}
        />

        <label htmlFor="nuts">Nueces</label>
        <input
          type="radio"
          id="nuts"
          name="ingredient"
          value="nuts"
          onChange={handleIngredient}
        />

        <label htmlFor="eggs">Huevos</label>
        <input
          type="radio"
          id="eggs"
          name="ingredient"
          value="eggs"
          onChange={handleIngredient}
        />

        <label htmlFor="onion">Cebolla</label>
        <input
          type="radio"
          id="onion"
          name="ingredient"
          value="onion"
          onChange={handleIngredient}
        />

        <label htmlFor="beer">Cerveza</label>
        <input
          type="radio"
          id="beer"
          name="ingredient"
          value="beer"
          onChange={handleIngredient}
        />

        <p>
          {/* {ingredient === cebolla
            ? "Eres una persona concebollista"
            : "Eres un robot sin paladar"} */}
        </p>
      </form>
    </div>
  );
};

export default App;
