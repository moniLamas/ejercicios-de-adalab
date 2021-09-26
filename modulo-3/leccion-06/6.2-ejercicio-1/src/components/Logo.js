//import { useState } from "react";
import "../styles/App.scss";
import adalabLogo from "../images/adalab-logo-155x61.png";
//import initialData from "../data/contacts.json";

function Logo() {
  return (
    <div>
      <a
        href="https://adalab.es/"
        rel="noreferrer"
        target="_blank"
        title="Adalab"
      >
        <img
          className="logo"
          src={adalabLogo}
          alt="Logo de adalab"
          title="Adalab"
        />
      </a>
    </div>
  );
}

export default Logo;
