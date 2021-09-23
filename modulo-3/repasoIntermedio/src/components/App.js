import "../styles/App.scss";
import data from "../data/contacts.json";
import { useState } from "react";

function App() {
  const oneContact = data[0];

  const [search, setSearch] = useState("");
  const [newName, serNewName] = useState("");

  const hadleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const hadleChangeName = (ev) => {
    setNewName(ev.currentTarget.value);
  };

  const dataFiltered = data.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const htmlContactList = dataFiltered.map((oneContact, index) => {
    <li className="contact__item" key={index}>
      <p className="contact__name">
        <label className="contact__label">Nombre:</label>
        {oneContact.name} {oneContact.lastName}
      </p>
      <p className="contact__phone">
        <label className="contact__label">Teléfono:</label>
        <a
          href={`tel: ${oneContact.phone}`}
          title={`Pulsa aquí para llamar a ${oneContact.name}`}
        >
          {oneContact.phone}
        </a>
      </p>
      <p className="contact__mail">
        <label className="contact__label">Email:</label>
        <a
          href={`mailto: ${oneContact.email}`}
          title="Pulsa aquí para escribir a Lola"
        >
          {oneContact.email}
        </a>
      </p>
    </li>;
  });

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={hadleChangeSearch}
            //falta el value con el evento
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{htmlContactList};</ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input className="new-contact__btn" type="submit" value="Añadir" />
        </form>
      </main>
    </div>
  );
}

export default App;
