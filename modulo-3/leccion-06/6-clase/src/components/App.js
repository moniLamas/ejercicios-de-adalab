import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";

import data from "../data/list.json";

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
