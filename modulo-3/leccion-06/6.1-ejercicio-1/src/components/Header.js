//import { useState } from "react";
import "../styles/App.scss";
//import initialData from "../data/contacts.json";

function Header() {
  return (
    <header class="header">
      <a href="https://adalab.es/" target="_blank" title="Adalab">
        <img
          class="logo"
          src="../images/adalab-logo-155x61.png"
          alt="Logo de adalab"
          title="Adalab"
        />
      </a>
      <nav>
        <ul class="nav-bar">
          <li>
            <a className="link" href="#" title="Blog">
              Blog
            </a>
          </li>
          <li>
            <a className="link" href="#" title="Contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
