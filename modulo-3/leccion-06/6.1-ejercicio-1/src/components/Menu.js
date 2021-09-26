//import { useState } from "react";
import "../styles/App.scss";
//import initialData from "../data/contacts.json";

function Menu() {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <li>
            <a className="link" href="https://adalab.es/blog/" title="Blog">
              Blog
            </a>
          </li>
          <li>
            <a className="link" href="./contact" title="Contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
