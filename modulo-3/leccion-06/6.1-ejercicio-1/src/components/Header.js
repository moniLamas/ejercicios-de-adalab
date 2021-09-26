//import { useState } from "react";
import "../styles/App.scss";
//import initialData from "../data/contacts.json";

function Header() {
  return (
    <div>
      <header className="header">
        <a
          href="https://adalab.es/"
          rel="noreferrer"
          target="_blank"
          title="Adalab"
        >
          <img
            className="logo"
            src="../images/adalab-logo-155x61.png"
            alt="Logo de adalab"
            title="Adalab"
          />
        </a>
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
      </header>
    </div>
  );
}

export default Header;
